import styled from 'styled-components';

const GridItem = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 50%;
    height: 50vw;
    box-sizing: border-box;
    
    ${({ color }) => color && `
    background-color: ${color};
  `}
`;

export default GridItem;