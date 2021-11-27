import React from 'react'
import { FaBars } from 'react-icons/fa';
import logoBlanco from '../../images/Academy_Blanco.png';
import { animateScroll as scroll } from 'react-scroll';

import {
    Nav, 
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    Img,
    NavInfo
} from './NavbarElements';


const Navbar = ({toggle}) => {    

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}><Img src={logoBlanco} /></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavInfo>

                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="learning"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Learning
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="achievements"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Achievements
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Sign Up
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Login">Sign In</NavBtnLink>
                </NavBtn>

                </NavInfo>
            </NavbarContainer>
        </Nav>

        </>
    )
}

export default Navbar
