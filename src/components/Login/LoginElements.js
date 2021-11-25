import styled from 'styled-components';
import {MdArrowForward, MdArrowRight } from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';



export const NavBar = styled.div`
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

export const NavbarLogo = styled(LinkR)`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
    background-color: #f9f9f9;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 60px 40px;
    background-color: #fff;
    border-radius: 10px;
    height: 80%;
    box-shadow: 5px 3px 6px #00000066;
    max-width: 1200px;
    @media screen and (max-width: 1200px) {
        width: 80%;
    }
    @media screen and (max-width: 960px) {
        width: 70%;
    }
    @media screen and (max-width: 450px) {
        width: 90%;
    }
    `;

export const LoginTitle = styled.h1`
    font-size: 2.5rem;
    color: #18213A;
    margin: 10px 0;
`;

export const LoginInput = styled.input`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid #18213A;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
    margin-right: 8px;
    font-size: 20px;
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 100%;
    display: grid;
    height: 500px;
    justify-content: center;
`;


export const LoginWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    background-color: #f9f9f9;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'`: `'col1 col2'`};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 0px;
    margin-top: 30px;
    padding: 0 15px;
    grid-area: col2;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`;

export const SocialIconLink = styled.a`
  color: #222729;
  font-size: 24px;
`;

export const Divider = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LineDivider = styled.hr`
    height: 2px;
    border: none;
    background-color: rgb(225, 225, 225);
    flex: 1 1 0%;
`

export const TextDivider = styled.div`
    background-color: rgb(255, 255, 255);
    color: rgb(97, 97, 97);
    font-size: 12px;
    line-height: 18px;
    padding: 0px 10px;
`
export const RestartLink = styled.button`
    background-color: rgb(255, 255, 255);
    color: rgb(97, 97, 97);
    font-size: 12px;
    line-height: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #8B63FF;
    }
`
