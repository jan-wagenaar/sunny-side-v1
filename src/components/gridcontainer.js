import styled from 'styled-components';

const GridContainer = styled.main`
    display: block;
    margin-top: -124px;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        & {
            text-align: center;
        }
    }
`;

export default GridContainer;