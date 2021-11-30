import React, {useRef, useEffect, useCallback} from 'react';
// import ReactDOM from "react-dom";
import {useSpring, animated} from 'react-spring';

import 'bootstrap/dist/css/bootstrap.min.css';

import { 
     Background,
     SyllabusContent, 
     SyllabusWrapper,
     CloseSyllabusButton,
     TopLine,
     Description,
     About,
     SyllabusInfo,
     SyllabusIconsData,
     SyllabusProgram,
     ProgramTopLine,
     ProgramSubTitle
    } from './SyllabusElements';

const Syllabus = ({ 
    showSyllabus, 
    setShowSyllabus, 
    objectSyllabus
    }) => {

    console.log(objectSyllabus);

    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 350 
        },
        opacity: showSyllabus ? 1 : 0,
        transform: showSyllabus ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeSyllabus = e => {
        if (modalRef.current === e.target) {
            setShowSyllabus(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showSyllabus) {
                setShowSyllabus(false);
            }
        },
        [setShowSyllabus, showSyllabus]
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
          {showSyllabus ? (
            <Background ref={modalRef} onClick={closeSyllabus}>
                <animated.div style={animation}>
                <SyllabusWrapper showSyllabus={showSyllabus}>
                    <SyllabusContent>
                      <SyllabusInfo>
                        <TopLine>{objectSyllabus.topLine}</TopLine>
                        <About>{objectSyllabus.about}</About>
                        <Description>{objectSyllabus.description}</Description>
                      </SyllabusInfo>
                      <SyllabusIconsData>

                      </SyllabusIconsData>
                    </SyllabusContent>
                    <SyllabusProgram>
                      <ProgramTopLine>{objectSyllabus.program}</ProgramTopLine>
                      <ProgramSubTitle>What will you learn on this route</ProgramSubTitle>
                    </SyllabusProgram>
                    <CloseSyllabusButton
                        aria-label='Close modal'
                        onClick={() => setShowSyllabus(prev2 => !prev2)}
                    />
                </SyllabusWrapper>
                </animated.div>
            </Background>
        ) : null}
        </>
    )
}

export default Syllabus;