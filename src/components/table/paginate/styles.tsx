import styled from "styled-components"

export const Container: any = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    .paginate {
        font-size: .8rem;
        font-weight: 500;
        height: 1.5rem;
        padding: 0 .6rem;
        border-radius: 1rem;
        transition: ease .3s;
        color: var(--label);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &[data-current="true"] {
            background: var(--tertiary);
            color: var(--secondary);

            &:hover {
                background: var(--tertiary);
            }
        }

        &:hover {
            background: var(--transparent);
        }
    }
`;