import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Product = ({ product, cart, setCart}) => {
    const [isAdded, setIsAdded] = useState(false);
    const handleBuyNow = () => {
        setIsAdded(true);
        setCart([...cart, product]);
        toast.success(`(${product.icon} ${product.name})  Added to cart at ($${product.price})`)
    }
    return (
        <div className=' hover:-translate-y-3 transition-all duration-800 ease-out hover:shadow-2xl hover:border-[#9514fa]/30 rounded-2xl p-6 border border-black/20 drop-shadow-2xl flex flex-col'>

            <button className='flex ml-auto justify-self-end px-3 py-1 rounded-full bg-[#e1e7ff] text-[#9514fa]'>{product.tag}</button>

            <button className='mr-auto text-2xl rounded-full p-4 border border-black/10 mb-4'>{product.icon}</button>
            <h1 className='mb-4 font-black text-2xl'>{product.name}</h1>
            <p className='mb-4 text-[#627382]'>{product.description}</p>
            <p className='mb-4'><span className='font-bold text-2xl'>${product.price}</span><span className='text-[#627382]'>/{product.period}</span></p>
            <ul className=' mb-4 space-y-2'>
                {product.features.map((feature, index) => (
                    <li id='Features' className='flex gap-2 text-[#627382] font-medium' key={index}>
                        <img src={"tick.svg"} alt="" /> {feature}
                    </li>
                ))}
            </ul>
            <button onClick={handleBuyNow} className='hover:scale-105 transition-all btn mt-auto font-bold rounded-full border-none shadow-none text-white py-5 w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>{
                isAdded ? "Added to cart" : "Buy Now"
            }</button>
        </div>
    );
};

export default Product;