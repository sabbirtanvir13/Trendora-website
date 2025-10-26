import React from 'react';
import dele from "../assets/dele.png"
import gift from "../assets/wired-outline-412-gift-hover-roll.png"
import support from "../assets/wired-outline-981-consultation-hover-conversation.png"
const Features = () => {
    return (
        <div className='flex gap-4 bg-white p-7 mt-5   '>
            <div className='p-3'>
                <img className='h-[100px]' src={dele} alt="" />
            <h1 className='text-black font-bold'>Free Shipping</h1>
            <p className='text-base-300'>Enjoy free worldwide shipping on all <br /> orders over $100 — fast, reliable delivery right to your doorstep.</p>
            </div>
            <div className='p-3'>
                <img  className='h-[100px]' src={gift} alt="" />
                <h1 className='text-black font-bold'>30 Days Easy Return</h1>
                <p className='text-base-300'>Not satisfied with your purchase? No worries! Return or <br /> exchange within 30 days — completely free of charge.</p>
            </div>
            <div className='p-3'>
                <img  className='h-[100px]' src={gift} alt="" />
                <h1 className='text-black font-bold'>Gift Cards</h1>
                <p className='text-base-300'>Give something special to your loved ones 🎁 —  our gift <br /> cards let them choose what they truly want.</p>
            </div>
            <div className='p-3'>
                <img  className='h-[100px]' src={support} alt="" />
                <h1 className='text-black font-bold'>Need Advice? Ask Us!</h1>
                <p className='text-base-300'>Need help with your order? We’re here for you! <br /> Call us at +45 3 4564 2355 or send us a message <br /> — our team is always ready to assist.</p>
            </div>
        </div>
    );
};

export default Features;
// Free Shipping Free worldwide shipping on all orders over $100 30 days return Returning your order for free is easy: just send us an email Gift cards Give something extraordinary with our gift cards Need advice? Ask us! Or call us on: +45 3 4564 2355 ki name eigulo file