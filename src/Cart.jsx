import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
    
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const handleCheckOut = () => {
        setCart([]);
        toast('Purchased all')
    }

    const handleRemove = (item) => {
        const filteredArray = cart.filter(i => i.id !== item.id);
        setCart(filteredArray)
        toast.info(`(${item.icon} ${item.name}) has been removed from the cart successfully ($${item.price})`)
    }
    return (
        <div className='p-10 w-11/12 mx-auto border border-black/20 rounded-2xl space-y-6 mb-20'>
            <h1 className='font-bold text-2xl'>Your Cart</h1>
            <div>
                {
                    cart.length === 0 ?<div className='text-center bg-[#f9fafc] p-20'>
                        <p>The cart is empty</p>
                    </div> : cart.map(item => <div key={item.id} className='flex gap-4 items-center justify-between bg-[#f9fafc] rounded-2xl p-5 mb-4'>

                        <div className='flex items-center gap-4'>
                            <button className='mr-auto text-2xl rounded-full p-4 border border-black/10 mb-4'>{item.icon}</button>
                            <div>

                                <h2 className='font-semibold text-xl'>{item.name}</h2>
                                <p className='text-[#627382] font-medium'>${item.price}</p>

                            </div>
                        </div>
                        <button onClick={() => handleRemove(item)} className='text-[#ff3980] font-bold cursor-pointer'>Remove</button></div>)
                }
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-[#627382]'>Total:</p>
                <h4 className='text-2xl font-bold'>${totalPrice}</h4>
            </div>
            <button onClick={handleCheckOut} className=' btn font-bold rounded-full border-none shadow-none text-white py-5 w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>Proceed to Checkout</button>
        </div>

    );
};

export default Cart;