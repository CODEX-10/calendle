import React, { useEffect, useRef } from "react"
import { Container } from "./styles"
import { Form, Modal } from "../../../components"
import { useDispatch, useSelector } from "react-redux"
import Refactoring from "../../../utils"
import * as Yup from "yup"

import { saveCalendarRequest } from "../../../store/actions/calendar"

export default function ModalCalendar(props: any) {
    const dispatch = useDispatch()
    const formRef: any = useRef({})

    const { loadingSaveCalendar: loading } = useSelector((state: any) => state.calendar)

    useEffect(() => {
        if (!props.content.value.uuid) return

        formRef.current.setData({
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

            formRef.current.setErrors({})

            const body: any = {
                uuid: props.content.value.uuid,
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