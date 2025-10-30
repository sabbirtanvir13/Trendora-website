

import React from "react";

const reviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    text: "Amazing product! Fast delivery and top-notch quality. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Michael Smith",
    rating: 4,
    text: "Really satisfied with my purchase. Works exactly as described.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sofia Lee",
    rating: 5,
    text: "Customer service was excellent and the product exceeded my expectations!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "David Kim",
    rating: 4,
    text: "Good quality and stylish design. Worth the price.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

const Review = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:scale-105 transform transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-black">{review.name}</h3>
                <p className="text-yellow-400">
                  {"★".repeat(review.rating)}
             
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;

