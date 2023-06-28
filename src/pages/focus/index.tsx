import React, { useEffect } from "react"
import { Container } from "./styles"
import { Loading } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { calendarRequest } from "../../store/actions/calendar"
import _ from "lodash"

import Content from "./content"

export default function Focus(props: any) {
    const dispatch = useDispatch()

    const { calendar, loadingCalendar } = useSelector((state: any) => state.calendar)

    useEffect(() => {
        dispatch(calendarRequest({ today: true }))
    }, [dispatch])

    return (
        <Container loading={loadingCalendar}>
            <div className='focus-title'>Agendamentos de hoje</div>
            {!!loadingCalendar &&
                <>
                    <Loading height="10rem" margin="0 0 .5rem" />
                    {_.map([1, 2, 3, 4, 5], (data, index) =>
                        <Loading key={index} height="4rem" margin="0 0 .5rem" />
                    )}
                </>}
            <div className="focus-content">
                {calendar.length
                    ? _.map(calendar, (data, index) =>
                        <Content key={index} index={index} {...data} />
                    )
                    : <div className="focus-empty">
                        <i className="fa-regular fa-calendar" />
                        <label>Nenhum agendamento encontrado</label>
                    </div>}
            </div>
        </Container>
    )
}