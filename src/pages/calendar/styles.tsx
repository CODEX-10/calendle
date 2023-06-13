import styled from "styled-components"

export const Container = styled.div`
    padding: 0 2rem;

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