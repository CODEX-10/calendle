import React from "react"
import { Container } from "./styles"
import { Button } from "./button"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { DateTime } from "./datetime"
import _ from "lodash"

export function Form(props: any) {

    const component = (data: any, index: number) => {
        const TYPES = {
            "textarea": <Textarea key={index} {...data} />,
            "password": <Input key={index} {...data} />,
            "text": <Input key={index} {...data} />,
            "datetime": <DateTime key={index} {...data} />,
        }

        return TYPES[data.type || "text"]
    }

    return (
        <Container ref={props.formRef} onSubmit={props.onSubmit}>
            {_.map(props.inputs, component)}
            <div className="form-buttons">
                {_.map(props.buttons, (data, index) =>
                    <Button key={index} {...data} />
                )}
            </div>
        </Container>
    )
}