
// import React from 'react';
// // React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // CSS
// import 'swiper/css';
// import 'swiper/css/navigation';
// // Modules
// import { Navigation } from 'swiper/modules';
// import { NavLink } from 'react-router';


// const products = [
//   {
//     id: 1,
//     name: "Coffee Maker – Brew Master",
//     materials: "Metal, Glass, Plastic",
//     price: 120,
//     feature: "Brew the perfect cup every time with precision and style. Compact, efficient, and designed for coffee lovers everywhere.",
//     image: "https://i5.walmartimages.com/seo/Mainstays-Black-5-Cup-Drip-Coffee-Maker-New_16f77040-27ab-4008-9852-59c900d7a7d9_1.c524f1d9c465e122596bf65f939c8d26.jpeg"
//   },
//   {
//     id: 2,
//     name: "Wooden Bookshelf – Oak Elegance",
//     materials: "Oak Wood, Metal",
//     price: 250,
//     feature: "Organize your space with premium craftsmanship. Elegant, durable, and perfect for any home or office.",
//     image: "https://grihoshaj.com/cdn/shop/files/61eC8vXl91S._AC_SL1024.jpg?v=1686781378&width=1920"
//   },
//   {
//     id: 3,
//     name: "Wall Clock – Minimalist Style",
//     materials: "Wood, Metal",
//     price: 85,
//     feature: "Keep track of time in a sleek, modern way. Adds sophistication and style to any room or workspace.",
//     image: "https://rukminim2.flixcart.com/image/480/640/l13whow0/wall-clock/n/k/d/metal-big-decorative-luxury-living-room-farmhouse-wall-clock-original-imagcqrzfnapv3ye.jpeg?q=90"
//   },
//   {
//     id: 4,
//     name: "LED Desk Light – BrightWork",
//     materials: "Metal, LED",
//     price: 60,
//     feature: "Illuminate your workspace with energy-efficient LED. Adjustable, stylish, and designed for comfort and productivity.",
//     image: "https://static-01.daraz.com.bd/p/8685b16c0e378f47227c5fdcbd8d8c90.jpg"
//   }
//  ];    



// const Offer = () => {
//     return (
//         <div className=' bg-plum-light text-purple-900 mt-5 py-10'>

//             <div>
//                 <h2 className="text-4xl text-black font-bold text-center mb-8">
//              🎁 Limited Time Offer
//             </h2>
//             </div>
//             <Swiper
//                 modules={[Navigation]}
//                 spaceBetween={30}
//                 slidesPerView={1} 
//                 navigation
//                 className='max-w-4xl mx-auto'
//             >
//                 {products.map(product => (
//                     <SwiperSlide key={product.id}>
//                         <div className=' rounded-xl  shadow-[0_0_25px_#7A00FF]/50 overflow-hidden'>
//                             <img className='w-full h-[300px] object-cover' src={product.image} alt={product.name} />
//                             <div className='p-6'>
//                                 <h1 className='text-2xl font-bold mb-2 text-white'>{product.name}</h1>
//                                 <p className=' mb-1 text-black'>Materials: {product.materials}</p>
//                                 <p className='text-black mb-1'>💰 Price: ${product.price}</p>
//                                 <p className='text-black mb-4'>{product.feature}</p>
//                                <NavLink to="/cart">
//                                  <button className="bg-[#ff4655] text-white px-6 py-2 rounded-lg shadow-[0_0_15px_#ff4655]/50 hover:bg-[#ff2a3a] transition">
//                                     ADD TO CART
//                                 </button> 
//                                </NavLink>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Offer;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NavLink } from "react-router";

const products = [
  {
    id: 1,
    name: "Coffee Maker – Brew Master",
    materials: "Metal, Glass, Plastic",
    price: 120,
    feature:
      "Brew the perfect cup every time with precision and style. Compact, efficient, and designed for coffee lovers everywhere.",
    image:
      "https://i5.walmartimages.com/seo/Mainstays-Black-5-Cup-Drip-Coffee-Maker-New_16f77040-27ab-4008-9852-59c900d7a7d9_1.c524f1d9c465e122596bf65f939c8d26.jpeg",
  },
  {
    id: 2,
    name: "Wooden Bookshelf – Oak Elegance",
    materials: "Oak Wood, Metal",
    price: 250,
    feature:
      "Organize your space with premium craftsmanship. Elegant, durable, and perfect for any home or office.",
    image:
      "https://grihoshaj.com/cdn/shop/files/61eC8vXl91S._AC_SL1024.jpg?v=1686781378&width=1920",
  },
  {
    id: 3,
    name: "Wall Clock – Minimalist Style",
    materials: "Wood, Metal",
    price: 85,
    feature:
      "Keep track of time in a sleek, modern way. Adds sophistication and style to any room or workspace.",
    image:
      "https://rukminim2.flixcart.com/image/480/640/l13whow0/wall-clock/n/k/d/metal-big-decorative-luxury-living-room-farmhouse-wall-clock-original-imagcqrzfnapv3ye.jpeg?q=90",
  },
  {
    id: 4,
    name: "LED Desk Light – BrightWork",
    materials: "Metal, LED",
    price: 60,
    feature:
      "Illuminate your workspace with energy-efficient LED. Adjustable, stylish, and designed for comfort and productivity.",
    image:
      "https://static-01.daraz.com.bd/p/8685b16c0e378f47227c5fdcbd8d8c90.jpg",
  },
];

const Offer = () => {
  return (
    <section className=" text-white py-16 px-4">
  
      <div className="text-center mb-12">
        <h2 className="text-4xl text-black md:text-5xl font-extrabold mb-3">
          🎁 Limited Time Offer
        </h2>
        <p className="text-black max-w-2xl mx-auto">
          Exclusive handpicked products — crafted with quality and love.
          Don’t miss out on these limited-time deals!
        </p>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        className="max-w-5xl mx-auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white/10 border-2 border-white/20 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all duration-500">
              <img
                className="w-full h-[350px] object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="p-8 text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-3 text-[#ff4655]">
                  {product.name}
                </h1>
                <p className="text-gray-600 mb-1">
                  🧱 Materials: {product.materials}
                </p>
                <p className="text-lg text-gray-600 mb-2">💰 Price: ${product.price}</p>
                <p className="text-gray-600 mb-6">{product.feature}</p>

                <NavLink to="/cart">
                  <button className="bg-[#ff4655] text-white px-8 py-3 rounded-lg shadow-[0_0_20px_#ff4655] hover:bg-[#ff2a3a] transition-all duration-300">
                    🛒 ADD TO CART
                  </button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Offer;
