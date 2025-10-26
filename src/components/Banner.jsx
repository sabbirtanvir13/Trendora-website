import React from 'react';

const Banner = () => {
    return (
        <div className='w-6/12 mx-auto flex justify-between items-center mt-7'>
            <div>
                <h1 className='text-6xl'>Shop now. <br /> Pay later</h1>
                <p className='mt-4'>Find trendy and affordable products</p>
                <button className='btn mt-3'>Shop Now</button>
            </div>
            <div>
                <img className=' rounded-3xl' src="https://ak1.ostkcdn.com/images/products/is/images/direct/f849521c0bafeeb94450d354efb67281399cfe23/Teddy-Ergonomics-Accent-Chair-Living-Room-Chair-Home-Chair-With-Black-Legs.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;