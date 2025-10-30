



import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import gril from "../assets/download (2).png";
import { NavLink } from "react-router";

const Banner = () => {
  return (



    <section className="relative bg-gradient-to-br from-[#0023FF] to-[#7A00FF] text-white overflow-hidden h-auto md:h-[500px] flex items-center py-10">
  <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
  
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
        Discover the Latest <br />
        <span className="text-[#ff4655]">Trendy Products</span>
      </h1>
      <p className="mt-4 text-gray-200 max-w-md mx-auto md:mx-0">
        Shop the best collections with exclusive offers, premium quality,
        and fast delivery!
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
        <NavLink
          to="/shop"
          className="flex items-center justify-center gap-2 bg-[#ff4655] hover:bg-[#ff2a3a] text-white px-5 py-2 rounded-lg font-semibold shadow-[0_0_15px_#ff4655] transition-all duration-300"
        >
          <PiShoppingBagFill className="w-5 h-5" />
          Shop Now
        </NavLink>
        <NavLink
          to="/allcetagory"
          className="border border-white/30 hover:bg-green-300 px-5 py-2 rounded-lg font-semibold transition-all duration-300"
        >
          Explore More
        </NavLink>
      </div>
    </div>

   
    <div className="flex-1 mt-6 md:mt-0">
      <img
        src={gril}
        alt="E-commerce banner"
        className="w-full max-w-[300px] md:max-w-full h-auto rounded-2xl shadow-lg mx-auto"
      />
    </div>
  </div>
</section>

  );
};

export default Banner;

