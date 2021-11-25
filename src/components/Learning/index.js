import React from 'react';

import IconTarget1 from '../../images/intro_2_img.png';
import IconTarget2 from '../../images/physics_img.png';
import IconTarget3 from '../../images/maths_img.png';
import IconTarget4 from '../../images/chemestry_img.png';
import IconTarget5 from '../../images/problems_img.png';
import Academy_logo from '../../images/Academy.png';

import { 
    ContainerAdd,
    ProgressContainer,
    ProgressWrapper,
    ProgressCard,
    ProgressIcon,
    ProgressH1,
    ProgressH2,
    ContainerLogo,
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
                                <ProgressH2>Physics</ProgressH2>
                                <ProgressIcon src={IconTarget2}/>
                            </ProgressCard>
                            <ProgressCard>                               
                                <ProgressH2>Mathematics</ProgressH2>
                                <ProgressIcon src={IconTarget3}/>
                            </ProgressCard>
                            <ProgressCard>                               
                                <ProgressH2>Chemestry</ProgressH2>
                                <ProgressIcon src={IconTarget4}/>
                            </ProgressCard>
                            <ProgressCard>                                
                                <ProgressH2>Problems Lake</ProgressH2>
                                <ProgressIcon src={IconTarget5}/>
                            </ProgressCard>
                        </ProgressWrapper>
                </ProgressContainer>
            </ContainerAdd>
            
        </>
    )
}

export default Learning
