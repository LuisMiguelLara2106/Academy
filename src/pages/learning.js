import React, {useState} from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Learning from '../components/Learning';



const LearningPage = () => {

    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Learning />
        </>
    )
}

export default LearningPage;