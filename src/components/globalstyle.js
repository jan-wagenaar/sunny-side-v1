import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Barlow, sans-serif;
        background-color: hsl(25,100%,98%);
    }

    a {
        text-decoration: none;
    }

    .fit-container {
        display: absolute;
        top: 0;
        height: 100%;
        width: 100%;
    }
`

export default GlobalStyle;