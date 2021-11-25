import React from 'react';
import { Button, ButtonR } from '../ButtonElements';

import AnimationTest from "../animations/index";

import { useEffect, useState } from "react";

import { Pulse } from "react-animation-wrapper";


import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    BtnWrap,
    ImgWrap,
    Img,
    ArrowForward,
    ArrowRight,
} from './InfoElements';

const InfoSection = ({
    lightBg,
    id,
    to,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    animation,
    colorWave
}) => {

    const wave = () => {
        return (
          <div style={{ height: "150px", overflow: "hidden" }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M0.00,49.98 C179.73,247.22 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: "none", fill: `${colorWave}`}}
              ></path>
            </svg>
          </div>
        );
    };


    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <ButtonR 
                                        to={to}
                                        onMouseEnter={onHover}
                                        onMouseLeave={onHover}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        >
                                        {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                                    </ButtonR>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {/* <Img src={img} alt={alt} /> */}
                                {/* <AnimationP /> */}
                                <AnimationTest animation={animation}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
                {wave()}
            </InfoContainer>  
        </>
    )
}

export default InfoSection
