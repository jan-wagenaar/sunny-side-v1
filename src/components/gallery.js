import styled from 'styled-components';

const Gallery = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
    & {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
`;

const GalleryItem = styled.div`
    position: relative;
    height: 50vw;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            height: 25vw;
          }
        }
`;



export { Gallery, GalleryItem } ;