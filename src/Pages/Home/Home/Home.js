import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;