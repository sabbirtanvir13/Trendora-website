



import { NavLink } from "react-router";

const NewArivals = () => {
  

  return (
    <div className="px-4 py-12 bg-white/5 backdrop-blur-sm rounded-2xl">
      <h2 className="text-4xl font-bold text-center mb-6 text-black">
        New Arivals <span className="text-[#ff4655]"> Coming Soon </span>
      </h2>


        <div className="md:flex felx-row md:gap-7 space-y-3  overflow-x-auto py-4">
           
           <div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://static-01.daraz.com.bd/p/5e1f876c7cc12fd07c4fdc88989c44e9.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Mackup </h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Coming Soon</button>
    </div>
  </div>
</div>
   {/* 2 */}
           
           <div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://image.sggp.org.vn/w1000/Uploaded/2025/yfsgf/2024_11_26/anh-man-hinh-2024-11-26-luc-165326-6771.png.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">realme c75</h2>
  
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Coming Soon</button>
    </div>
  </div>
</div>
{/* 3 */}
   <div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://cdn.thewirecutter.com/wp-content/media/2025/09/BG-IPHONE-2048px_IPHONE-17-PRO-MAX_BACK.jpg?auto=webp&quality=75&width=1024"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">iPhone 17</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Coming Soon</button>
    </div>
  </div>
</div>
{/* 4 */}
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://images.asics.com/is/image/asics/1011B928_750_SR_RT_GLB?$sfcc-product$"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">GEL-NIMBUS 26 PARIS</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Coming Soon</button>
    </div>
  </div>
</div>
{/* 5 */}
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://modernkraftz.com/cdn/shop/products/1_5e18c9da-b60a-4d8d-8a36-1a33ee05c133_1024x1024@2x.jpg?v=1631877980"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> Modern Kraftz Solidwood Kids Study Table and Chair Set</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Coming Soon</button>
    </div>
  </div>
</div>


        </div>
     

    </div>
  );
};

export default NewArivals;