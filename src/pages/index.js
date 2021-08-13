import React from 'react';
import Page from '../components/page';
import { ButtonLink } from '../components/button';
import GridContainer from '../components/gridcontainer';
import GridItem from '../components/griditem';
import { Hero, HeroTypography } from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = () => {
  return (
      <React.Fragment>
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
            <GridItem><h2>About Me</h2></GridItem>
            <GridItem>
              <StaticImage
                src="../images/image-transform.jpg"
                alt="Placeholder"
                placeholder="blurred"
                className="fit-container"
              />
            </GridItem>
            <GridItem>
              <StaticImage 
              src="../images/image-stand-out.jpg"
              alt="Placeholder"
              placeholder="blurred"
              className="fit-container" 
              />
            </GridItem>
            <GridItem>
              <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
              <ButtonLink to="/contact">Contact</ButtonLink>
            </GridItem>
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
          </GridContainer>
        </Page>
      </React.Fragment>
  )};

export default HomePage;