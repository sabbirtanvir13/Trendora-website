import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import {   Link, useParams } from 'react-router';




const Details = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState(null);

  useEffect(() => {
    document.title = " Details";
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === Number(id));

        setDetails(found);
      });
  }, [id]);

  if (!Details) {
    return <p className='text-center mt-20 text-xl'>Loading game details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 shadow-2xl text-black flex gap-9 items-center ">
      <div>
        <img src={Details.image} alt={Details.title} className="w-full h-100 rounded-lg shadow-lg mb-6" />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{Details.name}</h1>
        <p className="text-gray-600 mb-2">Category: {Details.category}</p>
        <p className="text-gray-600 mb-2">Developer: {Details.developer}</p>
        <div className='flex gap-3 items-center text-white font-bold '>
          <p className=" mb-2">Rating: {Details.ratings} </p>
          <p className='items-center mt-[-4px]'><IoIosStar /></p>
        </div>

        <div className="mt-3 flex items-center gap-3">
          {Details.oldPrice && (
            <span className="text-gray-600  line-through text-sm">${Details.oldPrice.toFixed(2)}</span>
          )}
          <span className="text-[#ff4655] font-bold text-lg">${Details.price.toFixed(2)}</span>
        </div>

    
         <div className=''>
          <button  className='mt-8 bg-green-400 text-white px-6 py-2 mr-3 rounded-lg shadow-md hover:bg-green-600 transition'>
            Buy Now
          </button>
           <button className='mt-8 bg-[#ff4655] text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition'>
           Add to Cart
          </button>
         </div>

         
         



       <div>
         <div className="grid grid-cols-4 mt-3 items-center gap-6 mb-10">
        <img
          src="https://download.logo.wine/logo/BKash/BKash-Logo.wine.png"
          alt="bKash"
          className="w-[100px] hover:scale-110 transition-transform"
        />
        <img
          src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
          alt="Nagad"
          className="w-[100px] hover:scale-110 transition-transform"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
          alt="Visa"
          className="w-[66px] hover:scale-110 transition-transform"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
          alt="MasterCard"
          className="w-[66px] hover:scale-110 transition-transform"
        />
      </div>
         
       </div>

       
      
      </div>
 
    </div>

   
  );
};

export default Details;
