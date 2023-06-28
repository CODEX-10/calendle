import React, { useRef, useEffect, useState } from "react"
import { Container } from "./styles"
import { useSelector } from "react-redux"
import moment from "moment"
import _ from "lodash"

export default function FocusContent(props: any) {
    const headerRef: any = useRef({})
    const contentRef: any = useRef({})

    const { loadingCalendar } = useSelector((state: any) => state.calendar)

    const [size, setSize] = useState({ header: 0, content: 0 })

    useEffect(() => {
        if (size.header > 0 && size.content > 0) return

        setSize({
            header: headerRef.current?.clientHeight || 0,
            content: contentRef.current?.clientHeight || 0,
        })
    }, [headerRef, contentRef, loadingCalendar, size])

    return (
        <Container
            className="scheduling"
            first={props.index === 0}
            headerSize={size.header}
            contentSize={size.content}
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