import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { NavLink, useParams } from 'react-router';
import Review from './Review';


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
    <div className="max-w-4xl mx-auto px-4 py-12 shadow-2xl flex gap-9 items-center ">
      <div>
        <img src={Details.image} alt={Details.title} className="w-full h-100 rounded-lg shadow-lg mb-6" />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{Details.name}</h1>
        <p className="text-white  mb-2">Category: {Details.category}</p>
        <p className="text-white mb-2">Developer: {Details.developer}</p>
        <div className='flex gap-3 items-center text-white font-bold '>
          <p className=" mb-2">Rating: {Details.ratings} </p>
          <p className='items-center mt-[-4px]'><IoIosStar /></p>
        </div>

        <div className="mt-3 flex items-center gap-3">
          {Details.oldPrice && (
            <span className="text-white line-through text-sm">${Details.oldPrice.toFixed(2)}</span>
          )}
          <span className="text-[#ff4655] font-bold text-lg">${Details.price.toFixed(2)}</span>
        </div>

    
          <button className='mt-8 bg-[#ff4655] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#ff2a3a] transition'>
           Add to Cart
          </button>
      
      </div>
 
    </div>

   
  );
};

export default Details;
