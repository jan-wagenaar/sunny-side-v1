import React from 'react';
import Page from '../components/page';
import { ButtonSecondary } from '../components/button';
import GridContainer from '../components/gridcontainer';
import GridItem from '../components/griditem';
import GridRow from '../components/gridrow';
import { Hero, HeroTypography } from '../components/hero';
import { StaticImage } from 'gatsby-plugin-image';
import { Header, Text, TextSecondary, TextOverlay } from '../components/typography';
import TextWrapper from '../components/textWrapper';
import { basetheme } from '../components/theme';
import { IconWrapper, Arrow } from '../components/icons';
import { TestimonialItem, TestimonialWrapper, TestimonialPicture } from '../components/testimonials';
import { Gallery, GalleryItem } from '../components/gallery';

 
const HomePage = () => {   
  return (
      <React.Fragment>
        <Page>
          <GridContainer>
            <Hero>
              <HeroTypography>
                We are creatives
              </HeroTypography>
              <IconWrapper>
              {/* <StaticImage 
                src="../images/svg/icon-arrow-down.svg"
                alt="Placeholder"
                placeholder="blurred"
                className="fit-container"
                /> */}
                <Arrow viewBox="0 0 60 55" preserveAspectRatio="xMidYMin slice"
   style={{width: "100%", paddingBottom: "92%", height: "3rem", overflow: "visible"}} />
              </IconWrapper>
            </Hero>
            <GridRow isReversed={true}>
              <GridItem>
                <TextWrapper>
                  <Header>Transform your brand</Header>
                  <TextSecondary>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do the most of the marketing for you.</TextSecondary>
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
                    <TextSecondary>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</TextSecondary>
                    <ButtonSecondary to="#" underlinecolor={basetheme.colors.primary.red}>Learn more</ButtonSecondary>
                </TextWrapper>
              </GridItem>
            </GridRow>
            <GridRow>
              <GridItem justifyContent='flex-end'>
                <StaticImage 
                  src="../images/image-graphic-design.jpg"
                  alt="Placeholder"
                  placeholder="blurred"
                  style={{position: "absolute"}}
                  className="fit-container" 
                />
                <TextWrapper maxWidth='25rem'>
                  <Header textCenter color={basetheme.colors.neutral.transperant}>
                    Graphic Design
                  </Header>
                  <TextOverlay textCenter margin={basetheme.spacing.l}> 
                    Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
                  </TextOverlay>
                </TextWrapper>
              </GridItem>
              <GridItem justifyContent='flex-end'>
                <StaticImage 
                  src="../images/image-photography.jpg"
                  alt="Placeholder"
                  placeholder="blurred"
                  style={{position: "absolute"}}
                  className="fit-container" 
                />
                <TextWrapper maxWidth='25rem'>
                  <Header textCenter color={basetheme.colors.neutral.transperant}>
                    Photography
                  </Header>
                  <TextOverlay textCenter margin={basetheme.spacing.l}> 
                    Increase your credibility by getting the most stunning, high-quality photo's that improve your business image.
                  </TextOverlay>
                </TextWrapper>
              </GridItem>
            </GridRow>
            <GridRow 
              isColumn 
              alignCenter 
              paddingContainer={basetheme.spacing.xxl}>                
              <Header as="h4" 
                fontSize={basetheme.typography.size.header4} 
                fontWeight={basetheme.typography.weight.black}
                color={basetheme.colors.neutral.grayblue} 
                fontStretch={'0.3rem'}
                uppercase
                textCenter>
                  Client testimonials
                </Header>
              <TestimonialWrapper>
                <TestimonialItem>
                  <TestimonialPicture>
                    <StaticImage 
                      src="../images/image-emily.jpg"
                      alt="Placeholder"
                      placeholder="blurred"
                      className="fit-container" 
                    />
                  </TestimonialPicture>
                  <Text 
                    textCenter 
                    color={basetheme.colors.neutral.darkergrayblue}
                    margin={basetheme.spacing.xl}>
                      We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                  </Text>
                  <Header 
                    as="h4" 
                    margin={'0px'} 
                    fontSize={basetheme.typography.size.small}>
                      Emily R.
                  </Header>
                  <TextSecondary 
                    fontSize={basetheme.typography.size.small} 
                    color={basetheme.colors.neutral.grayblue}>
                    Marketing Director
                  </TextSecondary>
                </TestimonialItem>
                <TestimonialItem>
                  <TestimonialPicture>
                    <StaticImage 
                      src="../images/image-thomas.jpg"
                      alt="Placeholder"
                      placeholder="blurred"
                      className="fit-container" 
                    />
                  </TestimonialPicture>
                  <Text 
                    textCenter 
                    color={basetheme.colors.neutral.darkergrayblue}
                    margin={basetheme.spacing.xl}>
                      Sunnyside's enthusiasm coupled with their keen interest in our brand's succes made it a satisfying and enjoyable experience.
                  </Text>
                  <Header 
                    as="h4" 
                    margin={'0px'} 
                    fontSize={basetheme.typography.size.small}>
                      Thomas S.
                  </Header>
                  <TextSecondary 
                    fontSize={basetheme.typography.size.small} 
                    margin={'0.3rem'} 
                    color={basetheme.colors.neutral.grayblue}>
                    Chief Operating Officer
                  </TextSecondary>
                </TestimonialItem>
                <TestimonialItem>
                  <TestimonialPicture>
                    <StaticImage 
                      src="../images/image-jennie.jpg"
                      alt="Placeholder"
                      placeholder="blurred"
                      className="fit-container" 
                    />
                  </TestimonialPicture>
                  <Text 
                    textCenter 
                    color={basetheme.colors.neutral.darkergrayblue}
                    margin={basetheme.spacing.xl}>
                      Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                  </Text>
                  <Header 
                    as="h4" 
                    margin={'0px'} 
                    fontSize={basetheme.typography.size.small}>
                      Jennie F.
                  </Header>
                  <TextSecondary 
                    fontSize={basetheme.typography.size.small} 
                    margin={'0.3rem'} 
                    color={basetheme.colors.neutral.grayblue}>
                    Business Owner
                  </TextSecondary>
                </TestimonialItem>
              </TestimonialWrapper>
            </GridRow>
            <Gallery>
              <GalleryItem>
                <StaticImage 
                        src="../images/image-gallery-milkbottles.jpg"
                        alt="Placeholder"
                        placeholder="blurred"
                        className="fit-container" 
                      />
              </GalleryItem>
              <GalleryItem>
                <StaticImage 
                        src="../images/image-gallery-orange.jpg"
                        alt="Placeholder"
                        placeholder="blurred"
                        className="fit-container" 
                      />
              </GalleryItem>
              <GalleryItem>
                <StaticImage 
                        src="../images/image-gallery-cone.jpg"
                        alt="Placeholder"
                        placeholder="blurred"
                        className="fit-container" 
                      />
              </GalleryItem>
              <GalleryItem>
                <StaticImage 
                        src="../images/image-gallery-sugarcubes.jpg"
                        alt="Placeholder"
                        placeholder="blurred"
                        className="fit-container" 
                      />
              </GalleryItem>
            </Gallery>
          </GridContainer>
        </Page>
      </React.Fragment>
  )};

export default HomePage;