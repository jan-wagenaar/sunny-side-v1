import styled from 'styled-components';

const GridRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.isReversed ? 'column-reverse' : 'column'};


    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            flex-direction: row;
        }
    }
`;

export default GridRow;