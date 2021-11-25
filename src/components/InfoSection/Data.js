import animationDataOne from "../../lotties/people_edu_2.json";
import animationDataTwo from "../../lotties/img_reading.json";
import animationDataThree from "../../lotties/goals.json";
import animationDataFour from "../../lotties/signup.json";



export const homeObjectOne = {
    id: 'about',
    to: '/About',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Decimetrix Academy',
    headLine: 'A new way to learning and teaching',
    description: 'Solve basic science problems, complete the learning routes, earn kudos and become a tutor, you are part of the largest learning community in the world.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/study_2.svg').default,
    alt: 'study',
    animation: animationDataOne,
    dark: true,
    primary: true,
    darkText: false,
    colorWave: '#f9f9f9'
};

export const homeObjectTwo = {
    id: 'learning',
    to: '/Learning',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Learning paths',
    headLine: 'Review all your learning paths',
    description: 'In decimetrix Academy you can take all the learning routes in basic sciences for free. Access all the content, solve the problems and become a Decimetrians.',
    buttonLabel: 'Show me',
    imgStart: true,
    img: require('../../images/mindmap_2.svg').default,
    alt: 'study',
    animation: animationDataTwo,
    dark: false,
    primary: false,
    darkText: true,
    colorWave: '#18213A',
};

export const homeObjectThree = {
    id: 'achievements',
    to: '/Achievements',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Achievements',
    headLine: 'Earn achievements and badges',
    description: 'As you advance on your learning paths and solve problems, you will get kudos, achievements, badges and you will be positioned at the top of the Decimetrians ranking.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/winners.svg').default,
    alt: 'study',
    animation: animationDataThree,
    dark: true,
    primary: true,
    darkText: false,
    colorWave: '#f9f9f9',
};

export const homeObjectFour = {
    id: 'signup',
    to: '/Signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Join Now',
    headLine: 'Become a Decimetrians',
    description: 'Be part of the best education community and connect with the world through our platform.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../../images/winners.svg').default,
    alt: 'study',
    animation: animationDataFour,
    dark: true,
    primary: true,
    darkText: false,
    colorWave: '#f9f9f9',
};