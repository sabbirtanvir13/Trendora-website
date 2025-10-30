import React from 'react';
import Banner from '../components/Banner';
import PropularProdacts from './PropularProdacts';
import Features from './Features';
import BestProudcts from './BestProudcts';
import Offer from './Offer';
import Discount from './Discount';
import NewArivals from './NewArivals';
import Review from './Review';
// import { APIProvider } from '@vis.gl/react-google-maps';
// import { googleMapApikey } from '../map-api-key';
// import Googlemap from './Googlemap';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <PropularProdacts></PropularProdacts>
            <Discount></Discount>
            <NewArivals></NewArivals>
            <BestProudcts></BestProudcts>
        <Review></Review>
         <Features ></Features>
        </div>
    );
};

export default Home;