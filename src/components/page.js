import React from 'react';
import {ThemeProvider} from 'styled-components';
import { Helmet } from 'react-helmet';
import { basetheme } from './theme';
import GlobalStyle from './globalstyle';
import NavBar from './navbar';
import Footer from './footer';
import favicon32 from "../images/favicon32.png";


const Page = ({children}) => {
    return (
        <React.Fragment>
            <Helmet
            htmlAttributes={{
              lang: 'en',
            }}
            title={"Sunnyside"}
            meta={[
              {
                name: "description",
                content: "Sunnyside is a creative design agency that focuses on the bright side of life.",
              },
              {
                name: "keywords",
                content: "agency, creative, digital",
              },
            ]}
            link={[
                { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap' }
            ]} />
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