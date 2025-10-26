import React from 'react';
import Banner from '../components/Banner';
import PropularProdacts from './PropularProdacts';
import Features from './Features';
import BestProudcts from './BestProudcts';
import Offer from './Offer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <PropularProdacts></PropularProdacts>
            <BestProudcts></BestProudcts>
         <Features ></Features>
        </div>
    );
};

export default Home;