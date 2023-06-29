import React, { useEffect, useRef } from "react"
import { Container } from "./styles"
import { Form, Modal } from "../../../components"
import { useDispatch, useSelector } from "react-redux"
import Refactoring from "../../../utils"
import moment from "moment"
import * as Yup from "yup"

import { saveCalendarRequest } from "../../../store/actions/calendar"
import { customerRequest, customerSuccess } from "../../../store/actions/customer"

export default function ModalCalendar(props: any) {
    const dispatch = useDispatch()
    const formRef: any = useRef({})

    const { loadingSaveCalendar: loading } = useSelector((state: any) => state.calendar)
    const { customer } = useSelector((state: any) => state.customer)

    useEffect(() => {
        if (!props.content.value.uuid) return

        formRef.current.setData({
            cpf: Refactoring.mask.docNumber(props.content.value.customer?.cpf),
            title: props.content.value.title,
            description: props.content.value.description,
            dt_start: props.content.value.dt_start || '',
            dt_end: props.content.value.dt_end || '',
        })
    }, [props.content.value])

    const onClose = () => {
        props.toggle.set(false)
        props.content.set({})
        formRef.current.setErrors({})
        formRef.current.reset()
    }

    async function _onSubmit(data: any) {
        try {
            const schema = Yup.object().shape({
                title: Yup.string().required('Campo obrigatório!'),
                description: Yup.string().required('Campo obrigatório!'),
                dt_start: Yup.string().required('Campo obrigatório!'),
                dt_end: Yup.string().required('Campo obrigatório!'),
            })

            await schema.validate(data, { abortEarly: false })

            const dtStart = moment(data.dt_start)
            const dtEnd = moment(data.dt_end)

            if (dtStart.diff(moment(), "minute") < 0) return formRef.current.setErrors({ dt_start: "Data menor que atual!" })
            if (dtEnd.diff(dtStart, "minute") <= 0) return formRef.current.setErrors({ dt_end: "Data final menor ou igual que a final!" })

            formRef.current.setErrors({})

            const body: any = {
                uuid: props.content.value?.uuid,
                uuid_customer: customer.uuid,
                title: data.title,
                description: data.description,
                dt_start: data.dt_start,
                dt_end: data.dt_end,
            }

            dispatch(saveCalendarRequest({
                ...body, clear: () => {
                    onClose()
                    props.page.set(0)
                }
            }))
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {}

                err.inner.forEach((error) => {
                    errorMessages[error.path] = error.message
                })

                const dtStart = moment(data.dt_start)
                const dtEnd = moment(data.dt_end)

                if (dtStart.diff(moment(), "minute") < 0) return formRef.current.setErrors({ ...errorMessages, dt_start: "Data menor que atual!" })
                if (dtEnd.diff(dtStart, "minute") <= 0) return formRef.current.setErrors({ ...errorMessages, dt_end: "Data final menor ou igual que a final!" })

                formRef.current.setErrors(errorMessages)
            }
        }
    }

    return (
        <Modal
            toggle={props.toggle.value}
            onClose={onClose}
            buttons={[
                {
                    label: 'agendar',
                    onClick: () => formRef.current.submitForm(),
                    disabled: !customer.uuid || loading,
                    loading
                },
                {
                    label: 'cancelar',
                    transparent: true,
                    onClick: onClose,
                    disabled: loading
                }
            ]}
        >
            <Container>
                <div className="header">

                </div>
                <div className="body">
                    <Form
                        formRef={formRef}
                        onSubmit={_onSubmit}
                        inputs={[
                            {
                                name: "cpf",
                                label: "CPF do cliente",
                                mask: Refactoring.mask.docNumber,
                                maxLength: 14,
                                onChange: (value: string) => {
                                    const cpf = Refactoring.removeMask.docNumber(value)

                                    if (cpf.length < 11) return dispatch(customerSuccess({}))

                                    dispatch(customerRequest({ cpf }))
                                },
                                disabled: loading
                            },
                            {
                                name: "title",
                                label: "Título",
                                disabled: loading
                            },
                            {
                                type: "textarea",
                                name: "description",
                                label: "Descrição",
                                disabled: loading
                            },
                            {
                                type: "datetime",
                                name: "dt_start",
                                label: "Data início",
                                disabled: loading
                            },
                            {
                                type: "datetime",
                                name: "dt_end",
                                label: "Data final",
                                disabled: loading
                            },
                        ]}
                    />
                </div>
            </Container>
        </Modal>
    )
}