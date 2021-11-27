import React, {useRef, useEffect, useCallback} from 'react';
import ReactDOM from "react-dom";
import {useSpring, animated} from 'react-spring';

import modalImg from '../../images/outer_space.svg';

import { 
     Background,
     ModalButton, 
     ModalContent, 
     ModalWrapper,
     ModalImg,
     ModalText,
     CloseModalButton,
    } from './ModalElements';

const Modal = ({ showModal, setShowModal }) => {

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

    return (
        <>
          {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={modalImg}/>
                    <ModalContent>
                        <h1>Are u ready?</h1>
                        <ModalText>Learn physics with the best teacher :v</ModalText>
                        <ModalButton>Join Now</ModalButton>
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
