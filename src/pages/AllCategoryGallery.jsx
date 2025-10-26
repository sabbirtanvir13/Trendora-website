import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { NavLink } from "react-router";

const AllCategoryGallery = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    
    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setProducts(data);
            })
            .catch((error) => console.log("Error fetching:", error));
    }, []);


    const categories = ["All", ...new Set(products.map((p) => p.category))];


    const filtered = products.filter((product) => {
        const matchCategory =
            activeCategory === "All" || product.category === activeCategory;


        const matchSearch = (product.name || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">

            <h2 className="text-4xl font-bold text-center mb-8">
                Browse by <span className="text-[#ff4655]">Category</span>
            </h2>

      
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-1/2 border border-gray-300 px-4 py-2 rounded-lg shadow-md outline-none focus:ring-2 focus:ring-[#ff4655]"
                />
            </div>

         
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat
                            ? "bg-[#B266FF] text-white shadow-[0_0_15px_#ff4655]"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filtered.map((product) => (
                        <NavLink
                            key={product.id}
                          to={`/details/${product.id}`} 
                            className="rounded-xl overflow-hidden shadow-lg hover:shadow-[#28C76F]/50 transition-all duration-300 "
                        >
                            <img
                                src={product.image}
                                alt={product.title || "Product"}
                                className="w-full h-56 object-cover"
                            />
                            

                            <div className="card-body bg-purple-300">
                                <div className="">  
                                    
                               <h3 className="text-xl text-black font-semibold">{product.name}</h3>

                                    <p className="text-base-300 mt-1">{product.category}</p>

                                </div>
                            
                                <div className="mt-3 flex items-center gap-3">
                                    {product.oldPrice && (
                                        <span className="text-gray-600 line-through text-sm">${product.oldPrice.toFixed(2)}</span>
                                    )}
                                    <span className="text-[#ff4655] font-bold text-lg">${product.price.toFixed(2)}</span>
                                </div>

                                <div className="card-actions flex justify-between">
                                    <div className="badge "><IoIosStar />{product.rating}</div>
                                    <div className="badge badge-outline"></div>
                                </div>
                            </div>
                        </NavLink>


                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg mt-10">
                    No products found 😔
                </p>
            )}
        </div>
    );
};

export default AllCategoryGallery;
