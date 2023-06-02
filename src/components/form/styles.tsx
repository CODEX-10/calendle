import styled from "styled-components"
import { Form } from "@unform/web"

export const Container: any = styled(Form)`
    width: 100%;

    .form-buttons {
        width: 100%;
        padding-top: 1rem;

        button {
            width: 100%;
            margin-top: 1rem;
        }
    }
`;