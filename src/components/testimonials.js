import styled from 'styled-components';


const TestimonialWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: ${props => props.isReversed ? 'column-reverse' : 'column'};

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            flex-direction: ${props => props.isColumn ? 'column' : 'row'};
            align-items: flex-start;
            justify-content: center;
        }
    }
`;

const TestimonialItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${props => props.theme.spacing.l};
    width: clamp(250px,35%,400px);
    height: 100%;
`;

const TestimonialPicture = styled.div`
    height: ${props => props.theme.spacing.xl};
    width: ${props => props.theme.spacing.xl};
    margin: ${props => props.theme.spacing.l} 0;
    overflow: hidden;
`;

export { TestimonialWrapper, TestimonialItem, TestimonialPicture };