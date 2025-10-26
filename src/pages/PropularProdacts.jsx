import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router';

const PropularProdacts = () => {
   const [products, setProducts] = useState([]);
 useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
      
        const sorted = data.sort(
          (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
        );
        setProducts(sorted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
    return (
        <div className=" px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-6">
        Featured <span className="text-[#ff4655]">Products</span>
      </h2>
      <Marquee className='gap-6'>
      <div className="flex gap-7 overflow-x-auto py-4">
        {products.slice(0, 10).map((product) => (
          <NavLink
            key={product.id}
            to={`/details/${product.id}`}  
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-[#ff4655]/50 transition-shadow duration-300 block"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 ">
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <p className="text-gray-400 mt-1">Rating: {product.ratings} ⭐</p>
              <p className="text-gray-400 mt-1">Category: {product.category}</p>
              <p className="text-gray-400 mt-1">Price : $ {product.price}</p>
            </div>
          </NavLink>
        ))}

      </div>
      </Marquee>

      <NavLink to="/allcetagory">
        <button className="w-full sm:w-auto px-6 py-3 bg-[#ff4655] hover:bg-[#ff2a3a] text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_0_15px_#ff4655] block mx-auto mt-10">
          See All
        </button>
      </NavLink>
    </div>
    );
};

export default PropularProdacts;
