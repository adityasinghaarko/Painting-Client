import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import QualitySection from './QualitySection/QualitySection';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <QualitySection></QualitySection>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;