import React, { useState } from "react";

import Modal from "../Modal/index";

import Syllabus from "../Syllabus/index";

import { modalObjectMaths, modalObjectPhysics, modalObjectChemestry, modalObjectProblems } from "../Modal/Data";
import { syllabusObjectMaths, syllabusObjectPhysics, syllabusObjectChemestry, syllabusObjectProblems } from "../Syllabus/Data";

import IconTarget1 from "../../images/intro_2_img.png";
import IconTarget2 from "../../images/physics_3_img.png";
import IconTarget3 from "../../images/maths_img_3.png";
import IconTarget4 from "../../images/chemestry_img_3.png";
import IconTarget5 from "../../images/problems_img_3.png";
import Academy_logo from "../../images/Academy.png";

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
  ProgressLogo,
} from "./LearningElements";

const Learning = () => {
  const [showModal, setShowModal] = useState(false);

  const [objectModal, setObjectModal] = useState({});

  const openModal = (event) => {
    const id = event.target.id;

    switch (id) {
      case "maths":
        setObjectModal(modalObjectMaths);
        break;
      case "physics":
        setObjectModal(modalObjectPhysics);
        break;
      case "chemestry":
        setObjectModal(modalObjectChemestry);
        break;
      case "problems":
        setObjectModal(modalObjectProblems);
        break;

      default:
        break;
    }
    setShowModal((prev) => !prev);
  };


  const [showSyllabus, setShowSyllabus] = useState(false);

  const [objectSyllabus, setObjectSyllabus] = useState({});

  const openSyllabus = (event) => {
    const id = event.target.id;

    switch (id) {
      case "maths":
        setObjectSyllabus(syllabusObjectMaths);
        break;
      case "physics":
        setObjectSyllabus(syllabusObjectPhysics);
        break;
      case "chemestry":
        setObjectSyllabus(syllabusObjectChemestry);
        break;
      case "problems":
        setObjectSyllabus(syllabusObjectProblems);
        break;

      default:
        break;
    }
    setShowSyllabus((prev2) => !prev2);
  };

  return (
    <>
      <ContainerAdd>
        <ProgressContainer id="learning">
          <ProgressH1>PROGRESS</ProgressH1>
          <ProgressWrapper>
            <ProgressCard>
              <ProgressH2>Introduction to</ProgressH2>
              <ContainerLogo>
                <ProgressLogo src={Academy_logo} />
              </ContainerLogo>
              <ProgressIcon src={IconTarget1} />
            </ProgressCard>
            <ProgressCard>
              <ProgressH3>Physics</ProgressH3>
              <ProgressButtons>
                <ButtonSyllabus id="physics" onClick={openSyllabus}>
                  SYLLABUS</ButtonSyllabus>
                <ButtonResume id="physics" onClick={openModal}>
                  RESUME
                </ButtonResume>
              </ProgressButtons>
              <ProgressIcon src={IconTarget2} />
            </ProgressCard>
            <ProgressCard>
              <ProgressH3>Mathematics</ProgressH3>
              <ProgressButtons>
                <ButtonSyllabus id="maths" onClick={openSyllabus}
                >SYLLABUS</ButtonSyllabus>
                <ButtonResume id="maths" onClick={openModal}>
                  RESUME
                </ButtonResume>
              </ProgressButtons>
              <ProgressIcon src={IconTarget3} />
            </ProgressCard>
            <ProgressCard>
              <ProgressH3>Chemestry</ProgressH3>
              <ProgressButtons>
                <ButtonSyllabus id="chemestry" onClick={openSyllabus}>
                  SYLLABUS</ButtonSyllabus>
                <ButtonResume id="chemestry" onClick={openModal}>
                  RESUME</ButtonResume>
              </ProgressButtons>
              <ProgressIcon src={IconTarget4} />
            </ProgressCard>
            <ProgressCard>
              <ProgressH3>Problems Lake</ProgressH3>
              <ProgressButtons>
                <ButtonSyllabus id="problems" onClick={openSyllabus}>
                  SYLLABUS</ButtonSyllabus>
                <ButtonResume id="problems" onClick={openModal}>
                  RESUME</ButtonResume>
              </ProgressButtons>
              <ProgressIcon src={IconTarget5} />
            </ProgressCard>
          </ProgressWrapper>
        </ProgressContainer>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          objectModal={objectModal}
        />
        <Syllabus
          showSyllabus={showSyllabus}
          setShowSyllabus={setShowSyllabus}
          objectSyllabus={objectSyllabus}
        />
      </ContainerAdd>
    </>
  );
};

export default Learning;
