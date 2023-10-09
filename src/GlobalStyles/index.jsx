import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding:0;
      font-size: 1.6rem;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background: ${({ theme }) => theme.colors.background};
      font-family: ${({ theme }) => theme.fonts.primaryFont};
    }

    img {
      display: block;
    }

    a {
      display: inline-block;
      color: inherit;
    }


    main {
      max-width: 1440px;
      margin: 0 auto;
      padding: 2rem 1rem 9.8rem;
    }

    ul,li {
      list-style: none;
    }

`;

export default GlobalStyles;
