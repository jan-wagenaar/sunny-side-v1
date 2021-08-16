import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "image-header.jpg" }) {
          childImageSharp {
            fluid(quality: 95, maxWidth: 2880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={'hsl(25,100%,98%)'}
    >
      {children}
    </BackgroundImage>
  )
}

const Hero = styled(BackgroundSection)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  grid-area: header;
  width: 100%;
  height: ${props => props.height || '100vh'};
  box-sizing: border-box;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
    
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    & {
      height: 50vw;
    }
  }
`

const HeroTypography = styled.h1`
  margin-bottom: ${props => props.theme.spacing.xxl};
  font-family: ${props => props.theme.typography.font.fraunces};
  color: ${props => props.theme.colors.neutral.white};
  text-transform: uppercase;
  letter-spacing: 0.5rem;
}
`;

export { Hero, HeroTypography } ;