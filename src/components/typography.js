import styled from 'styled-components';

const Header = styled.h2`
    margin-bottom: ${props => props.margin || props.theme.spacing.l};
    font-family: ${props => props.theme.typography.font.fraunces};
    font-weight: ${props => props.fontWeight || props.theme.typography.weight.black};
    font-size: ${props => props.fontSize || props.theme.typography.size.header2};
    color: ${props => props.color || props.theme.colors.neutral.darkerblue};
    text-align: ${props => props.textCenter ? 'center' : 'start'};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
    letter-spacing: ${props => props.fontStretch || '0'}
`;

const Text = styled.p`
    margin-bottom: ${props => props.margin || props.theme.spacing.s};
    font-size: ${props => props.fontSize || props.theme.typography.size.regular};
    font-weight: ${props => props.theme.typography.weight.regular};
    color: ${props => props.color || props.theme.colors.neutral.darkgrayblue};
    line-height: 1.75rem;
    text-align: ${props => props.textCenter ? 'center' : 'start'};
`;

const TextSecondary = styled.p`
    margin-bottom: ${props => props.margin || props.theme.spacing.s};
    font-size: ${props => props.fontSize || props.theme.typography.size.body};
    font-weight: ${props => props.theme.typography.weight.regular};
    color: ${props => props.color || props.theme.colors.neutral.darkgrayblue};
    text-align: ${props => props.textCenter ? 'center' : 'start'};
    line-height: 1.75rem;
`;

const TextOverlay = styled.p`
    margin-bottom: ${props => props.margin || props.theme.spacing.s};
    font-size: ${props => props.fontSize || props.theme.typography.size.body};
    font-weight: ${props => props.theme.typography.weight.regular};
    color: ${props => props.color || props.theme.colors.neutral.transperant};
    text-align: ${props => props.textCenter ? 'center' : 'start'};
    line-height: 1.75rem;
`;


export { Header, Text, TextSecondary, TextOverlay };