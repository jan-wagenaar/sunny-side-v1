import LogoImage from "../images/svg/icon.svg";
import styled from "styled-components";

const Logo = styled(LogoImage)`
    fill:  ${props => props.theme.colors.neutral.darkerblue};
`;

export default Logo;