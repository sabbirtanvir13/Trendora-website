import React from 'react';

const BestProudcts = () => {
    return (
        <div className='w-9/12 mx-auto '>
            <div className='flex justify-between  items-center'>
                <div >
                    <h1  className='font-bold text-4xl '>🎧 Built for Performance</h1>
                    <p className='mt-3'>Experience studio-grade sound with over-ear headphones designed for clarity and comfort.
                    Engineered <br /> for deep bass, crisp highs, and total noise isolation — built <br /> to keep up with your music, your mood, and your day.</p>
                </div>
                <img  className='h-[400px] rounded-2xl' src="https://www.startech.com.bd/image/cache/catalog/headphone/edifier/wh950nb/wh950nb-black-01-500x500.webp" alt="" />
            </div>
            <div className='flex justify-between  items-center'>
                <img className='h-[400px] rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZ2k83KsJHpKaTT3gPPEKhasVsB6ZZHJAard-R_HOdjDa_3MJr4k8OzUanQaGSf0XMVc&usqp=CAU" alt="" />
                <div>
                    <h1 className='font-bold text-4xl'>Made for Every Space</h1>
                    <p className='mt-3'>Whether it’s your living room, office, or reading corner — this chair <br /> blends effortlessly into any space.
                     Its sleek blue design adds a touch <br /> of calm elegance and modern charm to your interior</p>
                   
                </div>
            </div>
            <div  className='flex justify-between  items-center'>
                <div>
                    <h1  className='font-bold text-4xl'>Your Everyday Companion.</h1>
                    <p className='mt-3'>Whether you’re at the gym, office, or out for a run, this smartwatch is designed <br /> to move with you.
                     Water-resistant, lightweight, and packed with smart features —  <br /> it’s everything you need, everywhere you go    </p>
                </div>
                <img className='h-[400px] rounded-2xl' src="https://i5.walmartimages.com/seo/Smart-Watch-Fits-for-Android-and-iPhone-EEEkit-Fitness-Health-Tracker-Waterproof-Smartwatch-for-Women-Men_819cb65b-8437-4eb3-aba1-ce6513dc8d58.312f5775b50ab18c130fe5a454149fa9.jpeg" alt="" />
            </div>
        </div>
    );
};

export default BestProudcts;