import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    body {
        background-color: #E5E5E5;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body ,h1, h2, h3 ,h4 ,h5, h6, p {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }
`

export default GlobalStyled