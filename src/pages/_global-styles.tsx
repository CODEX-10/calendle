import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    --primary: #fff;
    --secondary: #5869da;
    --tertiary: rgb(98, 157, 253, 0.2);
    --transparent-6: rgb(0, 0, 0, 0.6);
    --transparent-8: rgb(0, 0, 0, 0.8);
    --transparent-05: rgb(0, 0, 0, 0.05); 
    --transparent-4-revert: rgb(255, 255, 255, 0.4);
    --transparent-2: rgb(0, 0, 0, 0.2);
    --input-background: #fff;
    --positive: #65c965;
    --negative: #FF334E;
  }

  html, body, input, select, textarea, div, button {
    font-family: 'Poppins', sans-serif;
  } 

  html, body {
    padding: 0;
    margin: 0;
    background: var(--primary);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  div {
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(0, 0, 0, 0.08);
      width: 6px;
      border-radius: 1rem;
    }
  }
`;

export default GlobalStyle