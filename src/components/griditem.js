import styled from 'styled-components';

const GridItem = styled.section`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    order: ${props => props.gridOrder};
    box-sizing: border-box;
    height: ${props => props.height || '100vw'};
    
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      & {
        height: 50vw;
      }
    }
`;

export default GridItem;