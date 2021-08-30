import React from 'react';
import GlobalStyle from '../components/globalstyle';
import Page from '../components/page';
import GridContainer from '../components/gridcontainer';
import { Hero, HeroTypography } from '../components/hero';
import { IconWrapper, Arrow } from '../components/icons';
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
              <IconWrapper>
                <Arrow viewBox="0 0 60 55" preserveAspectRatio="xMidYMin slice"
                 style={{width: "100%", paddingBottom: "92%", height: "3rem", overflow: "visible"}} />
              </IconWrapper>
            </Hero>
            <GridRow>
              <GridItem height="auto" justifyContent="flex-start">
                <Palette isPrimary={true} />
              </GridItem>
              <GridItem height="auto" justifyContent="flex-start">
                <Palette />
              </GridItem> 
            </GridRow>
            </GridContainer>
            </Page>
      </React.Fragment>
)};

export default Contact;