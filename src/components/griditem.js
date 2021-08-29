import styled from 'styled-components';

const GridItem = styled.section`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: ${props => props.height || '100vw'};
    
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      & {
        flex: 1;
        height: ${props => props.height || '50vw;'}
      }
    }
`;

export default GridItem;