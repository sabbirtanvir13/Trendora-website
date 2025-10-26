import React from 'react';
import Banner from '../components/Banner';
import PropularProdacts from './PropularProdacts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PropularProdacts></PropularProdacts>
        </div>
    );
};

export default Home;