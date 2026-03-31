import React from 'react';

const Stats = () => {
    return (
        <section className=' bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex items-center my-10 py-10 justify-center '>
            <div className='text-white space-y-1 border-r border-white/50 text-center md:px-20 px-5'>
                <h1 className='font-extrabold md:text-5xl text-2xl'>50K+</h1>
                <p className='font-medium md:text-2xl text-xs'>Active Users</p>
            </div>
            <div className='text-white space-y-1 border-r border-white/50 text-center md:px-20 px-5'>
                <h1 className='font-extrabold md:text-5xl text-2xl'>200+</h1>
                <p className='font-medium md:text-2xl text-xs'>Premium Tools</p>
            </div>
            <div className='text-white space-y-1  text-center md:px-20 px-5'>
                <h1 className='font-extrabold md:text-5xl text-2xl'>4.9</h1>
                <p className='font-medium md:text-2xl text-xs'>Rating</p>
            </div>
            
        </section>
    );
};

export default Stats;