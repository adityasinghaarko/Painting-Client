import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import QualitySection from './QualitySection/QualitySection';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';
import './Home.css';
import ReferralSection from './ReferralSection/ReferralSection';

const Home = () => {
    return (
        <div className="home">
            <TopBanner></TopBanner>
            <QualitySection></QualitySection>
            <Services></Services>
            <Reviews></Reviews>
            <ReferralSection></ReferralSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;