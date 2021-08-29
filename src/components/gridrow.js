import styled from 'styled-components';

const GridRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.isReversed ? 'column-reverse' : 'column'};
    ${props => props.alignCenter ? 'align-items: center;' : ''}
    padding: ${props => props.paddingContainer || props.theme.spacing.none};


    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            flex-direction: ${props => props.isColumn ? 'column' : 'row'};
        }
    }
`;

export default GridRow;