import React from 'react';
import {ThemeProvider} from 'styled-components';
import { Helmet } from 'react-helmet';
import basetheme from './theme';
import GlobalStyle from './globalstyle';
import NavBar from './navbar';
import Footer from './footer';


const Page = ({children}) => {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Title</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap" rel="stylesheet"></link>
            </Helmet>
            <ThemeProvider theme={basetheme}>
                <GlobalStyle />
                <NavBar />
                {children}
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Page;