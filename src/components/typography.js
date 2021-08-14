import styled from 'styled-components';

const Header = styled.h3`
    font-size: ${props => props.theme.font.sizes.header3};
    font-weight: ${props => props.theme.font.weight.bold};
`;

const Text = styled.p`
    font-size: ${props => props.theme.font.sizes.header3};
`;

export { Header, Text };