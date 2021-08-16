import styled from 'styled-components';

const Header = styled.h2`
    font-family: ${props => props.theme.typography.font.fraunces};
    font-weight: ${props => props.theme.typography.weight.black};
    color: ${props => props.theme.colors.neutral.darkerblue};
`;

const Text = styled.p`
    font-size: ${props => props.theme.typography.size.body};
    font-weight: ${props => props.theme.typography.weight.regular};
    color: ${props => props.theme.colors.neutral.darkgrayblue};
    line-height: 1.75rem;
`;

export { Header, Text };