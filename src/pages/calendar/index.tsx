import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { Calendar, Event, momentLocalizer } from 'react-big-calendar'
import { Button } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import _ from 'lodash'

import 'moment/locale/pt-br'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { calendarRequest } from '../../store/actions/calendar'

import ModalCalendar from './modal'

moment.locale("pt-br")

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar)

export default function Calendars() {
    const dispatch = useDispatch()

    const { calendar } = useSelector((state: any) => state.calendar)

    const [content, setContent] = useState({})
    const [modal, setModal] = useState(false)
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        dispatch(calendarRequest({}))
    }, [dispatch])

    useEffect(() => {
        if (!calendar.length) return

        setEvents(_.map(calendar, (data) => ({
            title: data.title,
            resource: data,
            start: new Date(data.dt_start),
            end: new Date(data.dt_end)
        })))
    }, [calendar])

    const open = (data: any) => {
        setModal(true)

        if (!data) return

        setContent({
            ...data.resource,
            dt_start: moment(data.dt_start).format('YYYY-MM-DDTHH:mm'),
            dt_end: moment(data.dt_end).format('YYYY-MM-DDTHH:mm')
        })
    }

    const update = (data: any) => {
        const { start, end } = data

        const content = [...events]

        content.splice(_.findIndex(content, ({ resource }) => resource.uuid === data.event.resource.uuid), 1, {
            ...data.event,
            start: new Date(start),
            end: new Date(end),
        })

        setEvents(content)
    }

    const onEventResize: withDragAndDropProps['onEventResize'] = update

    const onEventDrop: withDragAndDropProps['onEventDrop'] = update

    return (
        <Container>
            <ModalCalendar
                toggle={{ value: modal, set: setModal }}
                content={{ value: content, set: setContent }}
            />
            <div className='calendar-header'>
                <span className='title'>Agendamentos</span>
                <Button label="agendar" onClick={open} />
            </div>
            <DnDCalendar
                defaultView='week'
                events={events}
                localizer={localizer}
                onSelectEvent={open}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                resizable
                style={{ height: 'calc(100vh - 8.5rem)', color: 'var(--transparent-6)' }}
                messages={{
                    date: "data",
                    time: "horário",
                    event: "evento",
                    allDay: "todo dia",
                    week: "semana",
                    work_week: "semana de trabalho",
                    day: "dia",
                    month: "mês",
                    previous: "anterior",
                    next: "próximo",
                    yesterday: "ontem",
                    tomorrow: "amanhã",
                    today: "hoje",
                    agenda: "calendário",
                    noEventsInRange: "Nenhum agendamento encontrado neste período"
                }}
            />
        </Container>
    )
}