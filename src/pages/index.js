import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import InfoSection from '../components/InfoSection';
import { 
    homeObjectOne, 
    homeObjectThree, 
    homeObjectTwo,
    homeObjectFour 
} from '../components/InfoSection/Data';

import Services from '../components/Services';
import Footer from '../components/Footer';


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
            <Services />
            <InfoSection {...homeObjectFour} />
            <Footer />
        </>
    )
}

export default Home
