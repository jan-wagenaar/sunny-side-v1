import React from 'react';
import Page from '../components/page';
import { ButtonSecondary } from '../components/button';
import GridContainer from '../components/gridcontainer';
import GridItem from '../components/griditem';
import GridRow from '../components/gridrow';
import { Hero, HeroTypography } from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';
import { Header, Text } from '../components/typography';
import TextWrapper from '../components/textWrapper';
import { basetheme } from '../components/theme';
import { IconWrapper, Arrow } from '../components/icons';

 
const HomePage = () => {   
  return (
      <React.Fragment>
        <Page>
          <GridContainer>
            <Hero>
              <HeroTypography>
                We are creatives
              </HeroTypography>
              <Arrow height="100px" width="30px"/>
            </Hero>
            <GridRow isReversed={true}>
              <GridItem>
                <TextWrapper>
                  <Header>Transform your brand</Header>
                  <Text>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do the most of the marketing for you.</Text>
                  <ButtonSecondary to="#" underlinecolor={basetheme.colors.primary.yellow}>Learn more</ButtonSecondary>
                </TextWrapper>
              </GridItem>
              <GridItem>
                <StaticImage
                  src="../images/image-transform.jpg"
                  alt="Placeholder"
                  placeholder="blurred"
                  className="fit-container"
                />
              </GridItem>
            </GridRow>
            <GridRow>
              <GridItem>
                <StaticImage 
                src="../images/image-stand-out.jpg"
                alt="Placeholder"
                placeholder="blurred"
                className="fit-container" 
                />
              </GridItem>
              <GridItem>
                <TextWrapper>
                    <Header>Stand out to the right audience</Header>
                    <Text>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</Text>
                    <ButtonSecondary to="#" underlinecolor={basetheme.colors.primary.red}>Learn more</ButtonSecondary>
                </TextWrapper>
              </GridItem>
            </GridRow>
            <GridRow>
              <GridItem>
                <StaticImage 
                  src="../images/image-graphic-design.jpg"
                  alt="Placeholder"
                  placeholder="blurred"
                  className="fit-container" 
                />
              </GridItem>
              <GridItem>
                <StaticImage 
                  src="../images/image-photography.jpg"
                  alt="Placeholder"
                  placeholder="blurred"
                  className="fit-container" 
                />
              </GridItem>
            </GridRow>
          </GridContainer>
        </Page>
      </React.Fragment>
  )};

export default HomePage;