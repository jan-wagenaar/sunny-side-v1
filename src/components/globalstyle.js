import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.typography.font.barlow};
        background-color: ${props => props.theme.colors.neutral.body}
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