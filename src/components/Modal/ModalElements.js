// import React from 'react';

import styled from 'styled-components';

import { MdClose } from 'react-icons/md';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #f9f9f9;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 100;
    border-radius : 10px;
`;

export const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius :10px 0 0 10px;
    background: ${({background}) => (background)};
    padding-left: 30px;
    padding-right: 30px;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    line-height: 1.8;
    color: #141414;
    padding: 15px;
`;

export const ModalText = styled.p`
    margin-bottom: 1rem;
`;

export const ContainerButtonCourse = styled.div`
    width: 97%;
    display: flex;
    justify-content: end;
    margin-top: 5px;
`;

export const ModalButton = styled.button`
    padding: 3px 10px;
    margin-top: .3rem;
    background: #18213A;
    color: #fff;
    font-size: .8rem;
    border: none;
    display: flex;
    justify-content: end;
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width:32px;
    height:32px;
    padding: 0;
    z-index: 10;
`;

export const ModalTargetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 14vh;
    background-color: #f9f9f9;
`;
export const ContainerInfoCourse = styled.div`
    display: flex;
    width: 100%;
`;

export const ModalCourse = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;
    /* padding: 60px 40px; */
    background-color: #f9f9f9;
    border-radius: 8px;
    height: 90%;
    box-shadow: 1px 1px 3px 1px #0000003d;
    /* max-width: 1200px; */
`;

export const TopLine = styled.p`
    font-size: 22px;
    font-weight: normal;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 10px;
    font-weight: normal;
    margin: 0;

`;

export const CourseImg = styled.img`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 0px;
    width: 45px;
    height: 50px;
    
`;

export const InfoCourse = styled.div`
    width: 100%;
`

export const TitleCouse = styled.h3`
    padding-top: 8px;
    margin: 0;
    font-size: 15px;
    font-weight: bolder;
`;

export const TitleTeacher = styled.p`
    font-size: 10px;
    margin: 0;
`;

export const ProgressCourse = styled.div`
    width: 100%;
    padding-right: 10px;
`;
