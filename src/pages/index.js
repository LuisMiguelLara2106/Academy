import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import InfoSection from '../components/InfoSection';
import { 
    homeObjectOne, 
    homeObjectThree, 
    homeObjectTwo 
} from '../components/InfoSection/Data';



const Home = () => {

    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <InfoSection {...homeObjectOne} />
            <InfoSection {...homeObjectTwo} />
            <InfoSection {...homeObjectThree} />
        </>
    )
}

export default Home
