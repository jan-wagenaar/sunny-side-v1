import styled from 'styled-components';
import { Link as GatsbyLink } from "gatsby";

const ButtonBase = styled(GatsbyLink)`
  display: inline-block;
  margin: ${props => props.theme.spacing.xs};
  min-width: 1rem;
  min-height: 1rem;
  border-radius: ${props => props.theme.shape.rounded};
  transition: all ${props => props.theme.transition.base};
`;

const ButtonLink = styled(ButtonBase)`
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.l};
  color: ${props => props.theme.colors.neutral.white};
  font-weight: ${props => props.theme.typography.weight.regular};

  &:hover {
    color: ${props => props.theme.colors.neutral.darkerblue};
  }
`;

const ButtonSecondary = styled(ButtonBase)`
  position: relative;
  padding: 0 ${props => props.theme.spacing.s};
  font-family: ${props => props.theme.typography.font.fraunces};
  font-size:  ${props => props.theme.typography.size.small};
  font-weight: ${props => props.theme.typography.weight.black};
  text-transform: uppercase;
  color: ${props => props.theme.colors.neutral.darkerblue};

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: -1px;
    left: 0;
    opacity: 0.25;
    border-radius: ${props => props.theme.shape.rounded};
    background-color: ${props => props.underlinecolor || props.theme.colors.neutral.grayblue};
    transition: opacity ${props => props.theme.transition.base};
    z-index: -1;
  }
  &:hover::after {
    opacity: 0.9;
  }
`;

const Button = styled(ButtonBase)`
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.l};
  color: ${props => props.theme.colors.neutral.darkerblue};
  font-family: ${props => props.theme.typography.font.fraunces};
  font-weight: ${props => props.theme.typography.weight.semibold};
  background-color: ${props => props.theme.colors.neutral.white};

  :hover {
    color: ${props => props.theme.colors.neutral.white};
    background-color: ${props => props.theme.colors.neutral.semitransperant};
  }
`;


export { ButtonBase, ButtonLink, Button, ButtonSecondary };