import { format } from 'date-fns';


import React from 'react';


const Discount = () => {
  return (
    <section className="w-11/12 mx-auto mt-8 bg-gradient-to-br from-[#0023FF] to-[#7A00FF] rounded-2xl shadow-lg text-white p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
 
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
          🔥 Limited Time Sale!
        </h2>
        <p className="text-sm sm:text-base text-gray-200">
          Hurry up! Offer ends soon. Today is <span className="font-semibold">{format(new Date(), 'EEEE')}</span>.
        </p>
      </div>

     
      <div className="flex gap-4 justify-center sm:justify-end mt-4 sm:mt-0">
     
        <div className="bg-white/20 px-4 py-2 rounded-lg flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-bold">12</span>
          <span className="text-xs sm:text-sm">Hours</span>
        </div>
  
        <div className="bg-white/20 px-4 py-2 rounded-lg flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-bold">45</span>
          <span className="text-xs sm:text-sm">Minutes</span>
        </div>
       
        <div className="bg-white/20 px-4 py-2 rounded-lg flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-bold">30</span>
          <span className="text-xs sm:text-sm">Seconds</span>
        </div>
      </div>
    </section>
  );
};

export default Discount;
