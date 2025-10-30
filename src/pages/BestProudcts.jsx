


import React from 'react';

const BestProducts = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto flex flex-col gap-16">
      

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-black text-4xl mb-3">🎧 Built for Performance</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Experience studio-grade sound with over-ear headphones designed for clarity and comfort.
            Engineered for deep bass, crisp highs, and total noise isolation — built to keep up with your music, your mood, and your day.
          </p>
        </div>
        <img 
          className="h-[400px] w-full md:w-auto rounded-2xl object-cover" 
          src="https://www.startech.com.bd/image/cache/catalog/headphone/edifier/wh950nb/wh950nb-black-01-500x500.webp" 
          alt="Built for Performance" 
        />
      </div>

      {/* Product 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-black text-4xl mb-3">Made for Every Space</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Whether it’s your living room, office, or reading corner — this chair blends effortlessly into any space.
            Its sleek blue design adds a touch of calm elegance and modern charm to your interior.
          </p>
        </div>
        <img 
          className="h-[400px] w-full md:w-auto rounded-2xl object-cover" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZ2k83KsJHpKaTT3gPPEKhasVsB6ZZHJAard-R_HOdjDa_3MJr4k8OzUanQaGSf0XMVc&usqp=CAU" 
          alt="Made for Every Space" 
        />
      </div>

    
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-black text-4xl mb-3">Your Everyday Companion</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Whether you’re at the gym, office, or out for a run, this smartwatch is designed to move with you.
            Water-resistant, lightweight, and packed with smart features — it’s everything you need, everywhere you go.
          </p>
        </div>
        <img 
          className="h-[400px] w-full md:w-auto rounded-2xl object-cover" 
          src="https://i5.walmartimages.com/seo/Smart-Watch-Fits-for-Android-and-iPhone-EEEkit-Fitness-Health-Tracker-Waterproof-Smartwatch-for-Women-Men_819cb65b-8437-4eb3-aba1-ce6513dc8d58.312f5775b50ab18c130fe5a454149fa9.jpeg" 
          alt="Everyday Companion" 
        />
      </div>

    </div>
  );
};

export default BestProducts;
