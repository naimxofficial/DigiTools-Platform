import React from 'react';

const ReadySub = () => {
    return (
        <section className='px-3 bg-linear-to-r from-[#4f39f6] to-[#9514fa]  text-center py-20 text-white'>
            <div className='mb-10'>
                <h1 className='font-extrabold text-3xl md:text-4xl mb-4'>Ready to Transform Your Workflow?</h1>
                <p className='text-sm md:text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter. <br />
                    Start your free trial today.</p>
            </div>
            <div>
                <a href='#Products' className='btn text-[#9514fa] bg-white rounded-full font-semibold border-none shadow-none p-4 mr-4'>Explore Products</a>
                <a href='#Pricing' className='btn btn-outline rounded-full font-semibold  shadow-none py-4 px-9'>View Pricing</a>
                <p className='mt-4 text-xs md:text-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </section>
    );
};

export default ReadySub;