import styled from "styled-components";

const TextWrapper = styled.div`
    margin: ${props => props.theme.spacing.l};
    max-width: ${props => props.maxWidth || '28rem'};
`;

export default TextWrapper;