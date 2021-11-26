import React from 'react';

import modalImg from '../../images/outer_space.svg';

import { 
     Background,
     ModalButton, 
     ModalContent, 
     ModalWrapper,
     ModalImg,
     ModalText,
     CloseModalButton
    } from './ModalElements';

const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
          {showModal ? (
            <Background>
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
            </Background>
        ) : null}
        </>
    )
}

export default Modal;
