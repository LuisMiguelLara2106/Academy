import React, {useState} from 'react'
import {ButtonR} from '../ButtonElements';
import logoBlanco from '../../images/Academy_Blanco.png';

import AnimationTest from "../animations/index";

import animation from "../../lotties/academy-guy.json";

import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa";

import {
    NavBar,
    NavbarLogo,
    NavbarContainer,
    LoginWrapper,
    InfoRow,
    Column1,
    Column2,
    Img,
    LoginContainer,
    LoginTitle,
    LoginForm,
    LoginInput,
    ImgWrap,
    Divider,
    LineDivider,
    TextDivider,
    RestartLink,
    SocialIcons,
    SocialIconLink,
    ArrowForward,
    ArrowRight} from './LoginElements'

const Login = () => {

    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <NavBar>
            <NavbarContainer>
                <NavbarLogo to='/'><Img src={logoBlanco} /></NavbarLogo>
            </NavbarContainer>
            </NavBar>

            <LoginWrapper>
                    <InfoRow> 
                        <Column1>
                            <LoginContainer>
                                <LoginForm>
                                    <LoginTitle>Welcome</LoginTitle> 
                                    <LoginInput placeholder="Email" type="email" required />
                                    <LoginInput placeholder="Password" type="password"  required/>
                                    <ButtonR to="/selectfolders" 
                                    onMouseEnter={onHover} 
                                    onMouseLeave={onHover}
                                    big fontBig width={'100%'}>
                                    Login {hover ? <ArrowForward/> : <ArrowRight/>}
                                    </ButtonR>
                                    <RestartLink to="/" >
                                        I forgot the password
                                    </RestartLink>

                                    <Divider>
                                        <LineDivider />
                                        <TextDivider>or</TextDivider>
                                        <LineDivider />
                                    </Divider>

                                    <SocialIcons>
                                        <SocialIconLink href="/" target="_blanck" aria-label="Facebook">
                                            <FaFacebook />
                                        </SocialIconLink>
                                        <SocialIconLink href="/" target="_blanck" aria-label="Google">
                                            <FaGoogle />
                                        </SocialIconLink>
                                        <SocialIconLink href="/" target="_blanck" aria-label="Twitter">
                                            <FaTwitter />
                                        </SocialIconLink>
                                        <SocialIconLink href="/" target="_blanck" aria-label="Linkedin">
                                            <FaLinkedin />
                                        </SocialIconLink>
                                    </SocialIcons>
                                </LoginForm>
                            </LoginContainer>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {/* <Img src={img} alt={alt} /> */}
                                {/* <AnimationP /> */}
                                <AnimationTest animation={animation}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
            </LoginWrapper> 
        </>
    )
}

export default Login