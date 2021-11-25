import React from 'react';

import IconTarget1 from '../../images/intro_img.png';
import IconTarget2 from '../../images/physics_img.png';
import IconTarget3 from '../../images/maths_img.png';
import IconTarget4 from '../../images/chemestry_img.png';
import IconTarget5 from '../../images/problems_img.png';

import { 
    ContainerAdd,
    ProgressContainer,
    ProgressWrapper,
    ProgressCard,
    ProgressIcon,
    ProgressH1,
    ProgressH2,
    ProgressP
 } from './LearningElements'

const Learning = () => {
    return (
        <>
            <ContainerAdd>
                <ProgressContainer id="learning">
                    <ProgressH1>PROGRESS</ProgressH1>
                        <ProgressWrapper>
                            <ProgressCard>
                                <ProgressIcon src={IconTarget1}/>
                                <ProgressH2>Introduction</ProgressH2>
                                <ProgressP>Lorem Ips dolor been uploaded processed lorem ipsum dolor</ProgressP>
                            </ProgressCard>
                            <ProgressCard>
                                <ProgressIcon src={IconTarget2}/>
                                <ProgressH2>Physics</ProgressH2>
                                <ProgressP>Lorem Ips dolor been uploaded processed lorem ipsum dolor</ProgressP>
                            </ProgressCard>
                            <ProgressCard>
                                <ProgressIcon src={IconTarget3}/>
                                <ProgressH2>Mathematics</ProgressH2>
                                <ProgressP>Lorem Ips dolor been uploaded processed lorem ipsum dolor</ProgressP>
                            </ProgressCard>
                            <ProgressCard>
                                <ProgressIcon src={IconTarget4}/>
                                <ProgressH2>Chemestry</ProgressH2>
                                <ProgressP>Lorem Ips dolor been uploaded processed lorem ipsum dolor</ProgressP>
                            </ProgressCard>
                            <ProgressCard>
                                <ProgressIcon src={IconTarget5}/>
                                <ProgressH2>Problems Lake</ProgressH2>
                                <ProgressP>Lorem Ips dolor been uploaded processed lorem ipsum dolor</ProgressP>
                            </ProgressCard>
                        </ProgressWrapper>
                </ProgressContainer>
            </ContainerAdd>
            
        </>
    )
}

export default Learning
