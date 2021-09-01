import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../images/svg/icon.svg';
import { ButtonLink, Button } from './button';
import { Link } from 'gatsby';
import HamburgerIcon from '../images/svg/icon-hamburger.svg';
import throttle from 'lodash.throttle';

const Header = styled.header`
    position: relative;
    display: flex;
    position: sticky;
    top: 0;
    align-items: center; 
    justify-content: space-between;
    padding: ${props => props.theme.spacing.l};
    background-color: ${props => props.isScrolled ? 'hsl(198deg 100% 59% / 75%)' : 'none' };
    z-index: 50;
    transition: background-color 0.2s ease-out;
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
            margin: 0 36px;
            padding: 25px;
            background-color: ${props => props.theme.colors.neutral.body};
            font-size: ${props => props.theme.typography.size.header4};
            z-index: 100;
        }

        &::after {
            content: '';
            position: absolute;
            top: -12px;
            right: -8px;
            width: 0;
            height: 0;
            border-left: 21px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 25px solid ${props => props.theme.colors.neutral.body};
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
            color: ${props => props.theme.colors.neutral.darkgrayblue};
        }
    }
`;

const CTAButton = styled(Button)`
    text-transform: uppercase;

    @media only screen and (max-width: ${props => props.theme.breakpoints.md}) {
        & {
            margin: ${props => props.theme.spacing.s};
            font-size: ${props => props.theme.typography.size.header5};
            color: ${props => props.theme.colors.neutral.darkerblue};
            background-color: ${props => props.theme.colors.primary.yellow};
        }

        &:hover, &:focus {
            background-color: ${props => props.theme.colors.primary.yellow};
        }
    }
`;

const MenuIcon = styled(HamburgerIcon)`
    z-index: 50
`;

const MenuButton = styled.button`
    display: block;
    padding: ${props => props.theme.spacing.xs};
    background-color: transparent;
    outline: none; 
    border: none;
    cursor: pointer;

    @media only screen and (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            display: none;
        }
    }
`;

const MenuOverlay = styled.div`
    position: absolute;
    display: ${props => props.isShow ? 'block' : 'none'};
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 5;

    @media only screen and (min-width: ${props => props.theme.breakpoints.md}) {
        & {
            display: none;
        }
    }
`;

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollOffset = 150;

    const toggleMenu = () => {
        const newStatus = !isMenuOpen;
        setMenuOpen(newStatus);
    }

    const handleScroll = () => {
        if(window.scrollY > scrollOffset) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    

    const throttledScrollHandler = React.useMemo(
        () => throttle(handleScroll, 50)
      , []);

    React.useEffect(() => {
        if(window.scrollY > scrollOffset) {
            setIsScrolled(true);
        }
        window.addEventListener("scroll", event => {
            throttledScrollHandler();
        })

        return () => {
            throttledScrollHandler.cancel();
            window.removeEventListener("scroll", event => {});
        }
    }, [throttledScrollHandler]);

    return (
        <>
            <Header isScrolled={isScrolled}>
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
            <MenuOverlay isShow={isMenuOpen} onClick={toggleMenu} />
        </>
    )
};

export default NavBar;