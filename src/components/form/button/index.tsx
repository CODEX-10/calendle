import React from "react"
import { Container } from "./styles"
import { Loading } from "./loading"
import _ from "lodash"

export function Button(props: any) {

    const timer = (Number(props.timer?.value) * 100) / Number(props.timer?.max)

    return (
        <Container
            timer={props.timer || props.timer === 0 ? timer : undefined}
            loading={String(!!props.loading)}
            disabled={props.disabled}
            {..._.omit(props, ["loading", "timer"])}
        >
            {!!props.loading && !props.timer && <Loading />}
            <label>{props.label}</label>
        </Container>
    )
}