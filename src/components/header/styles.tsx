import styled from "styled-components"

export const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .theme-toggle {
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    border: 2px solid var(--transparent-05);
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;

    .toggle {
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      position: relative;
      transform: ${(props: any) => props.theme === "light" ? "translateX(.2rem)" : "translateX(1.6rem)"};
      transition: ease .3s;

      div {
        width: 100%;
        height: 100%;
        background: var(--primary);
        border-radius: 1rem;
        position: relative;
        z-index: 2;
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        transform: scale(1.8);
        background: var(--transparent-05);
        top: 0;
        left: 0;
        z-index: 1;
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        transform: scale(3);
        background: var(--transparent-05);
        top: 0;
        left: 0;
        z-index: 0;
      }
    }
  }
`;