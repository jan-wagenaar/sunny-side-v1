import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import { ButtonBase } from './button';

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

const FotterLinkButton = styled(ButtonBase)`
    color: ${props => props.theme.colors.primary.darkcyan}
`;

const Footer = () => {
    return (
        <FooterContent>
            <h4>sunny side</h4>
            <FooterLinks>
                <FooterLinkItem><FotterLinkButton to="#">About</FotterLinkButton></FooterLinkItem>
            </FooterLinks>
        </FooterContent>
    )
};

export default Footer;