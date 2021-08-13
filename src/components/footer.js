import React from 'react';
import styled from 'styled-components';
import { ButtonBase } from './button';
import { StaticImage } from 'gatsby-plugin-image';

const FooterContent = styled.footer`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: ${props => props.theme.spacing.l};
    background-color: ${props => props.theme.colors.primary.footer};
`;

const FooterLinks = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const FooterLinkItem = styled.li`
    display: flex;
    align-items: center;
`;

const FooterLogo=styled(StaticImage)`
    color:  ${props => props.theme.colors.neutral.darkerblue}
`;

const FooterLinkButton = styled(ButtonBase)`
    color: ${props => props.theme.colors.primary.darkcyan}
`;

const Footer = () => {
    return (
        <FooterContent>
            <FooterLogo alt="" src="../images/icon.svg" />
            <FooterLinks>
                <FooterLinkItem><FooterLinkButton to="#">About</FooterLinkButton></FooterLinkItem>
            </FooterLinks>
        </FooterContent>
    )
};

export default Footer;