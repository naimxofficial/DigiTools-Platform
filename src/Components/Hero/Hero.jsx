import React from 'react';
import { CiPlay1 } from 'react-icons/ci';

const Hero = () => {
    return (
        <section className='my-10 flex flex-col md:flex-row items-center gap-10 mx-auto w-11/12 justify-center'>
            <div className='md:space-y-4 space-y-2'>
                <p className='w-fit flex items-center gap-1 px-4 py-2 rounded-full bg-[#e1e7ff] font-medium text-[#9514fa] text-xs md:text-sm'><span><img className='blink-hard' src={"dot.svg"} alt="" /></span> New: AI-Powered Tools Available</p>
                <h1 className='font-extrabold text-4xl md:text-7xl text-[#4f39f6]'>Supercharge Your <br />
                    Digital Workflow</h1>
                <p className='text-[#627382] text-xs  md:text-lg wrap'>Access premium AI tools, design assets, templates,<br /> and productivity software—all in one place.<br /> Start creating faster today.Explore Products
                </p>
                <div className='space-x-2'>
                    <button className='btn rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-none border-none'>Explore Products</button>
                    <button className='btn btn-outline rounded-full border-[#9514fa] text-[#9514fa]'><CiPlay1 /> Watch Demo</button>
                </div>
            </div>
            <div><img src={"banner.png"} alt="" /></div>

        </section>
    );
};

export default Hero;