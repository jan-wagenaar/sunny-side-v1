import React from 'react';
import GlobalStyle from '../components/globalstyle';
import Page from '../components/page';
import GridContainer from '../components/gridcontainer';
import { Hero, HeroTypography } from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';
import GridItem from '../components/griditem';
import { Palette } from '../components/palette';

const Contact = () => {
  return (
      <React.Fragment>
        <GlobalStyle />
        <Page>
          <GridContainer>
            <Hero>
              <HeroTypography>
                We are creatives
              </HeroTypography>
              <StaticImage
                src="../images/icon-arrow-down.svg"
                alt="Scroll down"
                placeholder="blurred"
              />
            </Hero>
            <GridItem>
              <Palette />
            </GridItem>
            </GridContainer>
            </Page>
      </React.Fragment>
)};

export default Contact;