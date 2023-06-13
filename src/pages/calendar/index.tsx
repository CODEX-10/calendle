import { useState } from 'react'
import { Container } from './styles'
import { Calendar, Event, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import 'moment/locale/pt-br'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale("pt-br")

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar)

export default function Calendars() {
    const [events, setEvents] = useState<Event[]>([{
        title: 'Learn cool stuff',
        start: moment().toDate(),
        end: moment().add(2, 'hour').toDate()
    }])

    const onEventResize: withDragAndDropProps['onEventResize'] = (data) => {
        const { start, end } = data

        setEvents(currentEvents => {
            const firstEvent = {
                start: new Date(start),
                end: new Date(end),
            }
            return [...currentEvents, firstEvent]
        })
    }

    const onEventDrop: withDragAndDropProps['onEventDrop'] = (data) => console.log(data)

    return (
        <Container>
            <DnDCalendar
                defaultView='week'
                events={events}
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                resizable
                style={{ height: 'calc(100vh - 5rem)', color: 'var(--transparent-6)' }}
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