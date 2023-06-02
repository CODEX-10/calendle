import React, { useCallback, useEffect, useRef } from "react"
import { Container } from "./styles"
import { useField } from "@unform/core"
import { Label } from "../label"
import _ from "lodash"

export function Input(props: any) {
    const inputRef: any = useRef({})

    const { fieldName, registerField, defaultValue, error } = useField(props.name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    const onChangeText = useCallback((event: any) => {
        const value: any = event.target.value || ''

        if (inputRef.current) inputRef.current.value = props.mask ? props.mask(value) : value

        if (props.onChange) props.onChange(value)
    }, [props.onChange, inputRef, props.mask])

    return (
        <Container className={props.className} error={error}>
            {!!props.label && <Label>{props.label}</Label>}
            <div className="input-content">
                <input
                    ref={inputRef}
                    defaultValue={defaultValue || props.defaultValue}
                    onChange={onChangeText}
                    maxLength={props.maxLength || 255}
                    {..._.omit(props, ['defaultValue', 'maxLength', 'className', 'onChange', 'mask'])}
                />
            </div>
            {!!error && <div className="input-error">{error}</div>}
        </Container>
    )
}