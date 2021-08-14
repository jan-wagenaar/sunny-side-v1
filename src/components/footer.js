import React from 'react';
import styled from 'styled-components';
import { ButtonBase } from './button';
import Logo from './logo';
import IconFacebook from '../images/svg/icon-facebook.svg';
import IconInstagram from '../images/svg/icon-instagram.svg';
import IconTwitter from '../images/svg/icon-twitter.svg';
import IconPinterest from '../images/svg/icon-pinterest.svg';



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
    margin: ${props => props.theme.spacing.m} 0 ${props => props.theme.spacing.l} 0;
    padding: 0;
    list-style-type: none;
`;

const FooterLinkItem = styled.li`
    display: flex;
    align-items: center;
    padding: ${props => props.theme.spacing.m};
`;

const FooterLogo=styled(Logo)`
    margin: ${props => props.theme.spacing.m};

    & path {
        fill: ${props => props.theme.colors.primary.darkcyan};
    }
`;

const FooterLinkButton = styled(ButtonBase)`
    color:  ${props => props.theme.colors.primary.cyan};

    & path {
        fill: ${props => props.theme.colors.primary.darkcyan};
    }
`;

const Footer = () => {
    return (
        <FooterContent>
            <FooterLogo />
            <FooterLinks>
                <FooterLinkItem><FooterLinkButton to="#">About</FooterLinkButton></FooterLinkItem>
                <FooterLinkItem><FooterLinkButton to="#">Services</FooterLinkButton></FooterLinkItem>
                <FooterLinkItem><FooterLinkButton to="#">Projecten</FooterLinkButton></FooterLinkItem>
            </FooterLinks>
            <FooterLinks>
                <FooterLinkItem><FooterLinkButton to="#"><IconFacebook /></FooterLinkButton></FooterLinkItem>
                <FooterLinkItem><FooterLinkButton to="#"><IconInstagram /></FooterLinkButton></FooterLinkItem>
                <FooterLinkItem><FooterLinkButton to="#"><IconTwitter /></FooterLinkButton></FooterLinkItem>
                <FooterLinkItem><FooterLinkButton to="#"><IconPinterest /></FooterLinkButton></FooterLinkItem>
            </FooterLinks>
        </FooterContent>
    )
};

export default Footer;