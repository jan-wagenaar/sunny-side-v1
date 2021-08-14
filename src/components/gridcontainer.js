import styled from 'styled-components';

const GridContainer = styled.main`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
                "header"
                "item-right"
                "item-left"
                "footer";
    
    margin-top: -10rem;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            grid-template-columns: 50% 50%;
            grid-template-areas: 
                "header  header"
                "item-left item-right"
                "item-left item-right"
                "item-left item-right"
                "item-left item-right"
                "item-left item-right"
                "item-left item-right"
                "footer footer";
        }
    }
`;

export default GridContainer;