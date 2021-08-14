import React from 'react';
import Page from '../components/page';
import { ButtonLink, ButtonSecondary } from '../components/button';
import GridContainer from '../components/gridcontainer';
import GridItem from '../components/griditem';
import { Hero, HeroTypography } from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';
import {useMediaQuery} from '@react-hook/media-query'
import { Header, Text } from '../components/typography';
import TextWrapper from '../components/textWrapper';
import theme from '../components/theme';



const HomePage = () => { 
  const isMobile = useMediaQuery('only screen and (max-width: 960px)');

  return (
      <React.Fragment>
        <Page>
          <GridContainer>
            <Hero gridOrder={0}>
              <HeroTypography>
                We are creatives
              </HeroTypography>
              <StaticImage
                src="../images/icon-arrow-down.svg"
                alt="Scroll down"
                placeholder="blurred"
              />
            </Hero>
            <GridItem gridOrder={ isMobile ? 3 : 2}>
              <TextWrapper>
                <Header>Transform your brand</Header>
                <Text>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do the most of the marketing for you.</Text>
                <ButtonSecondary to="#" underlineColor={theme.colors.primary.yellow}>Learn more</ButtonSecondary>
              </TextWrapper>
            </GridItem>
            <GridItem gridOrder={ isMobile ? 2 : 3}>
              <StaticImage
                src="../images/image-transform.jpg"
                alt="Placeholder"
                placeholder="blurred"
                className="fit-container"
              />
            </GridItem>
            <GridItem gridOrder={4}>
              <StaticImage 
              src="../images/image-stand-out.jpg"
              alt="Placeholder"
              placeholder="blurred"
              className="fit-container" 
              />
            </GridItem>
            <GridItem gridOrder={5} height="120vw">
              <TextWrapper>
                  <Header>Stand out to the right audience</Header>
                  <Text>Using a collaborative formnula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</Text>
                  <ButtonSecondary to="#" underlineColor={theme.colors.primary.red}>Learn more</ButtonSecondary>
              </TextWrapper>
            </GridItem>
            <GridItem gridOrder={6} height="150vw">
              <StaticImage 
                src="../images/image-graphic-design.jpg"
                alt="Placeholder"
                placeholder="blurred"
                className="fit-container" 
              />
            </GridItem>
            <GridItem gridOrder={7}>
              <StaticImage 
                src="../images/image-photography.jpg"
                alt="Placeholder"
                placeholder="blurred"
                className="fit-container" 
              />
            </GridItem>
          </GridContainer>
        </Page>
      </React.Fragment>
  )};

export default HomePage;