import React from "react"
import { Container } from "./styles"
import { Button } from "./button"
import { Input } from "./input"
import _ from "lodash"

export function Form(props: any) {
    return (
        <Container ref={props.formRef} onSubmit={props.onSubmit}>
            {_.map(props.inputs, (data, index) =>
                <Input key={index} {...data} />
            )}
            <div className="form-buttons">
                {_.map(props.buttons, (data, index) =>
                    <Button key={index} {...data} />
                )}
            </div>
        </Container>
    )
}