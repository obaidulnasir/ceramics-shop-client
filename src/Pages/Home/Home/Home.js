import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';
import SupportSection from '../SupportSection/SupportSection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <SupportSection></SupportSection>
            <Review></Review>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;