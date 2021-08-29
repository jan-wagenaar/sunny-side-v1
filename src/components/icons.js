import styled from "styled-components";
import ArrowIcon from '../images/svg/icon-arrow-down.svg';

const IconWrapper = styled.div`
    height: ${props => props.height || '1rem'};
`;

const Arrow = styled(ArrowIcon)`
`;

export { IconWrapper, Arrow };