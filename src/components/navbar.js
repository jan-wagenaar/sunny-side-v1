import React from 'react';
import styled from 'styled-components';
import { ButtonLink, Button } from './button';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

const Header = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.l};
    z-index: 50;
`;

const Links = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    list-style-type: none;
`;

const LinkItem = styled.li`
    display: flex;
    align-items: center;
`;

const NavBar = () => {
    return (
        <Header>
            <Link to="/"><StaticImage alt="Logo" src="../images/icon.svg" /></Link> 
            <nav>
                <Links>
                    <LinkItem><ButtonLink to="/contact">About</ButtonLink></LinkItem>
                    <LinkItem><ButtonLink to="/contact">Services</ButtonLink></LinkItem>
                    <LinkItem><ButtonLink to="/contact">Projects</ButtonLink></LinkItem>
                    <LinkItem><Button to="/contact">Contact</Button></LinkItem>
                </Links>
            </nav>
        </Header>
    )
};

export default NavBar;