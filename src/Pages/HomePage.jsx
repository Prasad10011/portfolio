import React from 'react';
import Baner from '../components/Baner';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Services from '../components/Services';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Baner/>
            <About/>
            <Services />
            <Expertise />
        </div>
    );
};

export default HomePage;