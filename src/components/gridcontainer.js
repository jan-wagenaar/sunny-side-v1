import styled from 'styled-components';

const GridContainer = styled.main`
    display: block;
    // flex-flow: column;
    margin-top: -124px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
        }
    }
`;

export default GridContainer;