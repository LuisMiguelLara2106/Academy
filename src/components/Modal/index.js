import React, {useRef, useEffect, useCallback} from 'react';
// import ReactDOM from "react-dom";
import {useSpring, animated} from 'react-spring';

import courseImg from '../../images/calcular.png';

import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
     Background,
     ModalButton, 
     ModalContent, 
     ModalWrapper,
     ModalImg,
     CloseModalButton,
     ModalTargetContainer,
     ModalCourse,
     CourseImg,
     InfoCourse,
     TitleCouse,
     ProgressCourse,
     TitleTeacher,
     TopLine,
     Description,
     ContainerInfoCourse,
     ContainerButtonCourse
    } from './ModalElements';

const Modal = ({ 
    showModal, 
    setShowModal, 
    objectModal
    }) => {

    console.log(objectModal);

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 350 
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    const percentage = 50;

    return (
        <>
          {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalImg background={objectModal.imgBg} src={objectModal.modalImg}/>
                    <ModalContent>
                        <TopLine>{objectModal.topLine}</TopLine>
                        <Description>{objectModal.description}</Description>
                        <ModalTargetContainer>
                            <ModalCourse>
                                <ContainerInfoCourse>
                                    <CourseImg src={courseImg}/>
                                    <InfoCourse>
                                        <TitleCouse>Pre-Calculus</TitleCouse>
                                        <TitleTeacher>Luis Alejandro Fonseca</TitleTeacher>
                                        <ProgressCourse>
                                            <ProgressBar animated now={percentage} label={`${percentage}% completed`} />
                                        </ProgressCourse>
                                    </InfoCourse>
                                </ContainerInfoCourse>
                                <ContainerButtonCourse>
                                    <ModalButton>Carry on</ModalButton>
                                </ContainerButtonCourse>
                            </ModalCourse>
                        </ModalTargetContainer>
                    </ModalContent>
                    <CloseModalButton
                        aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}
                    />
                </ModalWrapper>
                </animated.div>
            </Background>
        ) : null}
        </>
    )
}

export default Modal;
