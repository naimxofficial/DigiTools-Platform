import React from 'react';

const Steps = () => {
    return (
        <section className='w-11/12 mx-auto my-10'>

            <div className='text-center md:space-y-4 space-y-1'>
                <h2 className='font-extrabold  text-3xl md:text-4xl'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] text-xs md:text-sm'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-7 my-10'>

                <div className='px-6 py-15 flex flex-col items-center text-center rounded-2xl bg-white space-y-4 relative'>
                    <p className='px-3 py-2 rounded-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-sm absolute right-5 top-5'>01</p>
                    <img src={"user.svg"} alt="" className='mx-auto' />
                    <h3 className='font-bold'>Create Account</h3>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card  <br />required to get started.</p>
                </div>

                <div className='px-6 py-15 flex flex-col items-center text-center rounded-2xl bg-white space-y-4 relative'>
                    <p className='px-3 py-2 rounded-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-sm absolute right-5 top-5'>02</p>
                    <img src={"package.svg"} alt="" className='mx-auto' />
                    <h3 className='font-bold'>Choose Products</h3>
                    <p className='text-[#627382]'>Browse our catalog and select the tools <br />
                        that fit your needs.</p>
                </div>

                <div className='px-6 py-15 flex flex-col items-center text-center rounded-2xl bg-white space-y-4 relative'>
                    <p className='px-3 py-2 rounded-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-sm absolute right-5 top-5'>03</p>
                    <img src={"rocket.svg"} alt="" className='mx-auto ' />
                    <h3 className='font-bold'>Start Creating</h3>
                    <p className='text-[#627382]'>Download and start using your premium <br />
                        tools immediately.</p>
                </div>

            </div>

        </section>
    );
};

export default Steps;