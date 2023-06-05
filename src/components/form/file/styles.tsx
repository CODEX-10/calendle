import styled from "styled-components"

export const Container: any = styled.div`
    width: 100%;
    padding-top: .3rem;

    .image-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${(props: any) => props.error ? 'var(--negative)' : 'var(--transparent-2)'};
        border-radius: 10px;
        overflow: hidden;
        padding: .5rem 1rem;
        width: 100%;
        font-size: .8rem;
        background: ${(props: any) => props.disabled ? 'var(--transparent-2)' : 'var(--input-background)'};
        opacity: ${(props: any) => props.disabled ? '.7' : '1'};
        color: var(--transparent-6);
        cursor: pointer;
    }

    .image-error {
        color: var(--negative);
        font-size: .7rem;
    }
`;