import styled from 'styled-components'


export const ContainerAdd = styled.div`
    color: #f9f9f9;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#18213A')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 968px) {
        padding: 0px 0;
    }
`;

export const ProgressContainer = styled.div`
    height: 800px;    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    padding: 0 24px;
    @media (max-width: 1100px) {
        height: 1100px;
    }
    @media (max-width: 668px) {
        height: 2000px;
    }
   
`;

export const ProgressWrapper = styled.div`
    max-width: 1100px;
    /* margin: 0 auto; */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    grid-gap: 16px;
    /* padding: 0 50px; */
    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 668px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 20px;
    }
`;

export const ProgressCard = styled.div`
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    /* align-items: center; */
    border-radius: 10px;
    height: 326px;
    max-width: 200px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 0px 10px 10px black;
    }
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ProgressLogo = styled.img`
    height: 38px;
    width: 160px;
    margin-top: 13px;
    margin-bottom: 54px;
    /* margin-bottom: 10px; */
`;

export const ProgressIcon = styled.img`
    height: 180px;
    width: 100%;
    /* padding-top: 48px; */
    /* margin-top: 50px; */
    border-radius: 0px 0px 10px 10px;
`;

export const ProgressH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;
    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProgressH2 = styled.h2`
    font-size: 1rem;
    margin-top: 30px;
    color: #010606;
    margin-left: 15%;
`;

export const ProgressH3 = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 1rem;
    margin-top: 35px;
    margin-bottom: 65px;
    color: #010606;
`;

export const ProgressP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #18213A;
`;

export const ProgressButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 17px;
`;

export const ButtonSyllabus = styled.button`
    width: 30%;
    padding: 5px;
    margin-right: 25px;
    font-size: .5rem;
    background-color: #f9f9f9;
    border-radius: 6px;
    border: .8px solid #010606;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        background: #f6f6f6;
        color: #010606;
        cursor: pointer;
        box-shadow: 0px 2px 4px gray;
    }
`;

export const ButtonResume = styled.button`
    width: 30%;
    padding: 5px;
    font-size: .5rem;
    background-color: #f9f9f9;
    border-radius: 6px;
    border: .8px solid #010606;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        background: #f6f6f6;
        color: #010606;
        cursor: pointer;
        box-shadow: 0px 2px 4px gray;
    }
`;
