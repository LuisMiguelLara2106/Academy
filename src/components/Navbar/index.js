import React from 'react'
import { FaBars } from 'react-icons/fa';
import logoBlanco from '../../images/Academy_Blanco.png';
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
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'><Img src={logoBlanco} /></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavInfo>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="learning">Learning</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="achievements">Achievements</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>

                </NavInfo>
            </NavbarContainer>
        </Nav>

        </>
    )
}

export default Navbar
