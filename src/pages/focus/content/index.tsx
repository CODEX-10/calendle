import React, { useRef } from "react"
import { Container } from "./styles"
import moment from "moment"
import _ from "lodash"

export default function FocusContent(props: any) {
    const headerRef: any = useRef({})
    const contentRef: any = useRef({})

    return (
        <Container
            className="scheduling"
            first={props.index === 0}
            headerSize={headerRef.current?.clientHeight}
            contentSize={contentRef.current?.clientHeight}
        >
            <div ref={headerRef} className="scheduling-header">
                <div>
                    <i className="fa-solid fa-circle-user" />
                    <label>Gustavo Valsechi de Freitas</label>
                </div>
                <span>{moment(props.dh_start).format("DD/MM/YYYY HH:mm")} - {moment(props.dh_end).format("DD/MM/YYYY HH:mm")}</span>
            </div>
            <div ref={contentRef} className="scheduling-content">
                <span>{props.title}</span>
                <div dangerouslySetInnerHTML={{ __html: _.replace(props.description, /\n/g, "<br/>") }} />
            </div>
        </Container>
    )
}