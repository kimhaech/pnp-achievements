import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Achievement from '../components/Achievement';
import Member from '../components/Member';
import MemberCounter from '../components/MemberCounter';
import Recruit from '../components/Recruit';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Scrollup from '../components/Scrollup';

const MainPage = () => {
    return (
        <div>
            <Header />
            <Main />
            <About />
            <Achievement />
            <Member />
            <MemberCounter />
            <Recruit />
            <FAQ />
            <Footer />
            <Scrollup />
        </div>
    );
};

export default MainPage;
