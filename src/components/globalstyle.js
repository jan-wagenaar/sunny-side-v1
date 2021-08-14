import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.typography.font.barlow};
        background-color: ${props => props.theme.colors.neutral.body};
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-size: ${props => props.theme.typography.size.header1};
    }
    
    h2 {
        font-size: ${props => props.theme.typography.size.header2};
    }

    .fit-container {
        display: absolute;
        top: 0;
        height: 100%;
        width: 100%;
    }

    @media (max-width: ${props => props.theme.breakpoints.xs}) {
        html {
            font-size: 12px;
        }

        h1 {
            font-size: 18px;
        }
    }
`

export default GlobalStyle;