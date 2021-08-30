import styled from 'styled-components';

const Header = styled.h2`
    margin: 0 0 ${props => props.margin || props.theme.spacing.l} 0;
    font-family: ${props => props.theme.typography.font.fraunces};
    font-weight: ${props => props.fontWeight || props.theme.typography.weight.black};
    font-size: ${props => props.fontSize || props.theme.typography.size.header2};
    color: ${props => props.color || props.theme.colors.neutral.darkerblue};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
    letter-spacing: ${props => props.fontStretch || '0'};

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            text-align: ${props => props.textCenter ? 'center' : 'start'};
        }
    }
`;

const Text = styled.p`
    margin-bottom: ${props => props.marginMobile || props.theme.spacing.m};
    font-size: ${props => props.fontSize || props.theme.typography.size.regular};
    font-weight: ${props => props.theme.typography.weight.regular};
    color: ${props => props.color || props.theme.colors.neutral.darkgrayblue};
    line-height: 1.75rem;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            margin-bottom: ${props => props.margin || props.theme.spacing.s};
            text-align: ${props => props.textCenter ? 'center' : 'start'};
        }
    }
`;

const TextSecondary = styled.p`
    margin-bottom: ${props => props.margin || props.theme.spacing.l};
    font-size: ${props => props.fontSize || props.theme.typography.size.body};
    font-weight: ${props => props.theme.typography.weight.regular};
    color: ${props => props.color || props.theme.colors.neutral.darkgrayblue};
    line-height: 1.75rem;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            text-align: ${props => props.textCenter ? 'center' : 'start'};
        }
    }
`;

const TextOverlay = styled.p`
    margin-bottom: ${props => props.theme.spacing.m};
    font-size: ${props => props.fontSize || props.theme.typography.size.body};
    font-weight: ${props => props.theme.typography.weight.regular};
    color: ${props => props.color || props.theme.colors.neutral.transperant};
    text-align: ${props => props.textCenter ? 'center' : 'start'};
    line-height: 1.75rem;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            margin-bottom: ${props => props.margin || props.theme.spacing.s};
        }
    }
`;


export { Header, Text, TextSecondary, TextOverlay };