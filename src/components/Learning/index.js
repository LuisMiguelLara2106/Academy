import React from 'react';

import IconTarget1 from '../../images/intro_2_img.png';
import IconTarget2 from '../../images/physics_3_img.png';
import IconTarget3 from '../../images/maths_img_3.png';
import IconTarget4 from '../../images/chemestry_img_3.png';
import IconTarget5 from '../../images/problems_img_3.png';
import Academy_logo from '../../images/Academy.png';

import { 
    ContainerAdd,
    ProgressContainer,
    ProgressWrapper,
    ProgressCard,
    ProgressIcon,
    ProgressH1,
    ProgressH2,
    ProgressH3,
    ContainerLogo,
    ProgressButtons,
    ButtonSyllabus,
    ButtonResume,
    ProgressLogo
 } from './LearningElements'

const Learning = () => {
    return (
        <>
            <ContainerAdd>
                <ProgressContainer id="learning">
                    <ProgressH1>PROGRESS</ProgressH1>
                        <ProgressWrapper>
                            <ProgressCard>
                                <ProgressH2>Introduction to</ProgressH2>
                                <ContainerLogo>
                                    <ProgressLogo src={Academy_logo}/>
                                </ContainerLogo>
                                <ProgressIcon src={IconTarget1}/>
                            </ProgressCard>
                            <ProgressCard>
                                <ProgressH3>Physics</ProgressH3>
                                <ProgressButtons>
                                    <ButtonSyllabus>SYLLABUS</ButtonSyllabus>
                                    <ButtonResume>RESUME</ButtonResume>
                                </ProgressButtons>
                                <ProgressIcon src={IconTarget2}/>
                            </ProgressCard>
                            <ProgressCard>                               
                                <ProgressH3>Mathematics</ProgressH3>
                                <ProgressButtons>
                                    <ButtonSyllabus>SYLLABUS</ButtonSyllabus>
                                    <ButtonResume>RESUME</ButtonResume>
                                </ProgressButtons>
                                <ProgressIcon src={IconTarget3}/>
                            </ProgressCard>
                            <ProgressCard>                               
                                <ProgressH3>Chemestry</ProgressH3>
                                <ProgressButtons>
                                    <ButtonSyllabus>SYLLABUS</ButtonSyllabus>
                                    <ButtonResume>RESUME</ButtonResume>
                                </ProgressButtons>
                                <ProgressIcon src={IconTarget4}/>
                            </ProgressCard>
                            <ProgressCard>                                
                                <ProgressH3>Problems Lake</ProgressH3>
                                <ProgressButtons>
                                    <ButtonSyllabus>SYLLABUS</ButtonSyllabus>
                                    <ButtonResume>RESUME</ButtonResume>
                                </ProgressButtons>
                                <ProgressIcon src={IconTarget5}/>
                            </ProgressCard>
                        </ProgressWrapper>
                </ProgressContainer>
            </ContainerAdd>
            
        </>
    )
}

export default Learning
