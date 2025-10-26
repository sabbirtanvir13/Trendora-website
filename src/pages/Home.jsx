import React from 'react';
import Banner from '../components/Banner';
import PropularProdacts from './PropularProdacts';
import Features from './Features';
import BestProudcts from './BestProudcts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PropularProdacts></PropularProdacts>
            <BestProudcts></BestProudcts>
         <Features ></Features>
        </div>
    );
};

export default Home;