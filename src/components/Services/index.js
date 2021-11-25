import React from 'react'

import Icon1 from '../../images/study_1.svg';
import Icon2 from '../../images/study_2.svg';
import Icon3 from '../../images/study_3.svg';

import { 
    ContainerAdd,
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
 } from './ServicesElements'

const Services = () => {

    const wave = () => {
        return (
          <div style={{ height: "150px", overflow: "hidden" }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%", backgroundColor: "f9f9f9"}}
            >
              <path
                d="M0.00,49.98 C179.73,247.22 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: "none", fill: `${'#18213A'}`}}
              ></path>
            </svg>
          </div>
        );
    };

    return (
        <>
        <ContainerAdd>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                    <ServicesWrapper>
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesH2>Lorem ipsum dolor</ServicesH2>
                            <ServicesP>Lorem Ips dolor been uploaded processed lorem ipsum dolor</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon2}/>
                            <ServicesH2>Lorem ipsum dolor</ServicesH2>
                            <ServicesP>Lorem Ips dolor lorem ipsum dolor been uploaded processed</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon3}/>
                            <ServicesH2>Lorem ipsum dolor</ServicesH2>
                            <ServicesP>processed lorem ipsum dolo lorem Ips dolor been uploadedr</ServicesP>
                        </ServicesCard>
                    </ServicesWrapper>
            </ServicesContainer>
            
        </ContainerAdd>
        {wave()}
        </>
    )
}

export default Services