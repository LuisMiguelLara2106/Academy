// import React from 'react';

import styled from 'styled-components';

import { MdClose } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FcVideoCall } from 'react-icons/fc';
import { FcInspection } from 'react-icons/fc';


export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SyllabusWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #f9f9f9;
    color: #000;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 100;
    border-radius : 10px; */
`;

export const SyllabusContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 100;
    /* border-radius : 10px; */
    line-height: 1.8;
    color: #141414;
    padding: 15px;
    border-bottom-style: inset;
`;

export const SyllabusInfo = styled.div`
    margin-right: 15px;
`;

export const CloseSyllabusButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width:32px;
    height:32px;
    padding: 0;
    z-index: 10;
`;

export const SyllabusIcon = styled.div`
    display: flex;
    align-items: center;
`;

export const ConnectSyllabusButton = styled(AiOutlineGlobal)`
    top: 20px;
    right: 20px;
    width:32px;
    height:32px;
    padding: 0;
    margin: 15px;
    border-style: solid;
    border-color: #8B63FF;
    border-radius: 50%;
`;

export const TimeSyllabusButton = styled(AiOutlineHistory)`
    top: 20px;
    right: 20px;
    width:32px;
    height:32px;
    padding: 0;
    margin: 15px;
    border-style: solid;
    border-color: #8B63FF;
    border-radius: 50%;
`;

export const PriseyllabusButton = styled(AiOutlineDollarCircle)`
    top: 20px;
    right: 20px;
    width:32px;
    height:32px;
    padding: 0;
    margin: 15px;
    border: 3px inset;
    border-color: #8B63FF;
    border-style: solid;
    border-radius: 50%;
`;

export const TopLine = styled.h1`
    font-size: 22px;
    font-weight: bolder;
    margin: 15px;
`;

export const About = styled.p`
    font-size: 15px;
    font-weight: normal;
    margin-left: 15px;
    margin-bottom: 5px;
`;

export const Description = styled.h2`
    font-size: 12px;
    font-weight: lighter;
    margin-left: 15px;
`;

export const SyllabusIconsData = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SyllabusProgram = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProgramTopLine = styled.h2`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 0;
`;

export const ProgramSubTitle = styled.h3`
    font-size: 15px;
    font-weight: lighter;
`;

export const SyllabusTargetItems = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    border-bottom-style: inset;
`;

export const ItemNumber = styled.div`
    margin: 15px 15px 15px 15px;
    width: 15%;
    display: flex;
    justify-content: center;
`;

export const ItemInfo = styled.div`
    width: 100%;
    height: 100%;
    margin: 15px;
    display: flex;
    flex-direction: column;
`;

export const TitleItem = styled.p`
`;

export const MediaIcon = styled(FcVideoCall)`
    top: 20px;
    right: 20px;
    width:32px;
    height:32px;
    padding: 0;
`;

export const ProblemsIcon = styled(FcInspection)`
    top: 20px;
    right: 20px;
    width:32px;
    height:32px;
    padding: 0;
`;