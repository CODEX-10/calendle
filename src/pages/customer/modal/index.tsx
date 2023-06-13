import React, { useEffect, useRef } from "react"
import { Container } from "./styles"
import { Form, Modal } from "../../../components"
import { useDispatch, useSelector } from "react-redux"
import Refactoring from "../../../utils"
import * as Yup from "yup"

import { saveCustomerRequest } from "../../../store/actions/customer"

export default function ModalCustomer(props: any) {
    const dispatch = useDispatch()
    const formRef: any = useRef({})

    const { loadingSaveCustomer: loading } = useSelector((state: any) => state.customer)

    const phone = (value: string) => Refactoring.mask.phone(value)
    const removePhone = (value: string) => Refactoring.removeMask.phone(value)

    useEffect(() => {
        if (!props.content.value.uuid) return

        formRef.current.setData({
            name: props.content.value.name,
            phone: phone(props.content.value.phone),
            email: props.content.value.email || '',
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
                name: Yup.string().required('Campo obrigatório!'),
                phone: Yup.string().required('Campo obrigatório!'),
            })

            await schema.validate(data, { abortEarly: false })

            formRef.current.setErrors({})

            const body: any = {
                uuid: props.content.value.uuid,
                name: data.name,
                phone: removePhone(data.phone),
                email: data.email || null,
            }

            dispatch(saveCustomerRequest({
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
            center
            toggle={props.toggle.value}
            onClose={onClose}
            buttons={[
                {
                    label: 'salvar',
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
                                name: "name",
                                label: "Nome",
                                disabled: loading
                            },
                            {
                                name: "phone",
                                label: "Telefone",
                                mask: phone,
                                disabled: loading
                            },
                            {
                                name: "email",
                                label: "E-mail",
                                disabled: loading
                            },
                        ]}
                    />
                </div>
            </Container>
        </Modal>
    )
}