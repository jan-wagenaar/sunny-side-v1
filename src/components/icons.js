import styled from "styled-components";
import ArrowIcon from '../images/svg/icon-arrow-down.svg';

const IconWrapper = styled.div`
    position: relative;
    max-width: ${props => props.theme.spacing.xl};
    max-height: ${props => props.theme.spacing.xl};
    // overflow: hidden;
`;

const Arrow = styled(ArrowIcon)`
`;

export { IconWrapper, Arrow };