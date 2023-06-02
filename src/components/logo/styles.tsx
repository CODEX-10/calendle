import styled from "styled-components"

export const Container: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props: any) => props.size || "1rem"};
  font-weight: 500;
  color: ${(props: any) => props.color || "var(--label)"};

  i {
    margin-right: .5rem;
  }
`;