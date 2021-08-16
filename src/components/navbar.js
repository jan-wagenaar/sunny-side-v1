import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './logo';
import { ButtonLink, Button } from './button';
import { Link } from 'gatsby';
import {useMediaQuery} from '@react-hook/media-query';
import HamburgerIcon from '../images/svg/icon-hamburger.svg';

const Header = styled.header`
    position: relative;
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
    padding: 0;
    list-style-type: none;

    @media only screen and (max-width: ${props => props.theme.breakpoints.md}) {
        & {
            position: absolute;
            top: 90px;
            left: 0;
            right: 0;
            display: ${props => props.isOpen ? 'flex' : 'none' };
            flex-flow: column;
            align-items: center;
            justify-content: center;
            margin: 0 ${props => props.theme.spacing.xl};
            padding: ${props => props.theme.spacing.m};
            background-color: ${props => props.theme.colors.neutral.body};
            z-index: 100;
        }

        &::after {
            content: '';
            position: absolute;
            top: -15px;
            right: -10px;
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 30px solid ${props => props.theme.colors.neutral.body};
            transform: rotate(-90deg);
            z-index: 99;
        }
    }
`;

const LinkItem = styled.li`
    display: flex;
    align-items: center;
`;

const NavLink = styled(ButtonLink)`
    @media only screen and (max-width: ${props => props.theme.breakpoints.md}) {
        & {
            color: ${props => props.theme.colors.neutral.darkerblue};
        }
    }
`;

const CTAButton = styled(Button)`
    @media only screen and (max-width: ${props => props.theme.breakpoints.md}) {
        & {
            color: ${props => props.theme.colors.neutral.darkerblue};
            background-color: ${props => props.theme.colors.primary.yellow};
        }
    }
`;

const MenuIcon = styled(HamburgerIcon)`
    z-index: 50
`;

const MenuButton = styled.button`
    display: none;
    padding: ${props => props.theme.spacing.xs};
    background-color: transparent;
    outline: none; 
    border: none;
    cursor: pointer;

    @media only screen and (max-width: ${props => props.theme.breakpoints.md}) {
        & {
            display: block;
        }
    }
`;

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        const newStatus = !isMenuOpen;
        setMenuOpen(newStatus);
    }

    return (
        <Header>
            <Link to="/"><Logo /></Link> 
            <nav>
                <Links isOpen={isMenuOpen} >
                    <LinkItem><NavLink to="/contact">About</NavLink></LinkItem>
                    <LinkItem><NavLink to="/contact">Services</NavLink></LinkItem>
                    <LinkItem><NavLink to="/contact">Projects</NavLink></LinkItem>
                    <LinkItem><CTAButton to="/contact">Contact</CTAButton></LinkItem>
                </Links>
                <MenuButton onClick={toggleMenu}><MenuIcon /></MenuButton>
            </nav>
        </Header>
    )
};

export default NavBar;