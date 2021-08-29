import React from 'react';
import GlobalStyle from '../components/globalstyle';
import Page from '../components/page';
import GridContainer from '../components/gridcontainer';
import { Hero, HeroTypography } from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';
import GridItem from '../components/griditem';
import { Palette } from '../components/palette';
import GridRow from '../components/gridrow';

const Contact = () => {
  return (
      <React.Fragment>
        <Page>
        <GlobalStyle />
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
            <GridRow>
              <GridItem height="auto">
                <Palette isPrimary={true} />
              </GridItem>
              <GridItem height="auto">
                <Palette />
              </GridItem> 
            </GridRow>
            </GridContainer>
            </Page>
      </React.Fragment>
)};

export default Contact;