import styled from 'styled-components';

const Header = styled.h3`
    font-family: ${props => props.theme.typography.font.fraunces};
    font-size: ${props => props.theme.typography.size.header3};
    font-weight: ${props => props.theme.typography.weight.bold};
`;

const Text = styled.p`
    font-size: ${props => props.theme.typography.size.body};
    font-weight: ${props => props.theme.typography.weight.regular}
    color: ${props => props.theme.colors.neutral.grayblue};
`;

export { Header, Text };