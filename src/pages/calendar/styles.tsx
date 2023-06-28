import styled from "styled-components"

export const Container = styled.div`
    padding: 0 2rem;

    .calendar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;

        @media(max-width: 650px) {
            button {
                width: 100%;
            }
        }

        .title {
            color: var(--transparent-6);
            font-size: 1.3rem;
            font-weight: 600;
        }
    }

    .rbc-event {
        background-color: var(--secondary);
        border: 1px solid var(--secondary);
    }

    .rbc-today {
        background-color: var(--tertiary);
    }

    .rbc-event.rbc-selected {
        background-color: var(--secondary) !important;
        border: 1px solid var(--secondary) !important;
    }

    .rbc-off-range-bg {
        background: var(--transparent-05);
    }

    .rbc-toolbar button {
        &:hover, &:active {
            background-color: var(--tertiary) !important;
            color: var(--transparent-6);
        }

        &:focus {
            background-color: transparent !important;
            color: var(--transparent-6);
        }
    }

    button {
        color: var(--transparent-6);

        &.rbc-active {
            background-color: var(--transparent-05) !important;
            color: var(--transparent-6);
        }
    }
`;  