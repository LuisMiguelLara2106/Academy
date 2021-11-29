import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
    background: #18213A;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0px 3px 6px #00000066;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding:0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #8B63FF;
    }
`;

export const Img = styled.img`
    width: 160px;
    height: auto;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 960px) {
        width: 150px;
    }
    @media screen and (max-width: 768px) {
        width: 140px;
    }

    &:hover {
    opacity: 1;
    }
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;


export const NavInfo = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    padding-top: 15px;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #8B63FF;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #8B63FF;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    padding-left: 2rem;

    @media screen and (max-width: 769px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #8B63FF;
        color: #010606;
    }
`;



