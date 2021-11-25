import styled from 'styled-components'


export const ContainerAdd = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#18213A')};

    @media screen and (max-width: 768px) {
        padding: 0px 0;
    }
`;

export const ProgressContainer = styled.div`
    height: 800px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    @media (max-width: 768px) {
        height: 1100px;
    }
    @media (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProgressWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    grid-gap: 16px;
    /* padding: 0 50px; */
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 20px;
    }
`;

export const ProgressCard = styled.div`
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    max-width: 190px;
    padding: 30px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProgressIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
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
    margin-bottom: 10px;
    color: #010606;
`;

export const ProgressP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #18213A;
`;