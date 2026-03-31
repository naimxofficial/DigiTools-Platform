import React from 'react';

const Pricing = () => {
    return (
        <section className='w-11/12 mx-auto py-10 '>

            <div className='text-center md:space-y-4 space-y-1'>
                <h2 className='font-extrabold  text-3xl md:text-4xl'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382] text-xs md:text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-7 my-10 '>
                {/* card 1 */}
                <div className=' py-6 px-10 md:px-20 rounded-2xl space-y-6  bg-[#f9fafc] '>

                    <div className='space-y-2 '>
                        <h3 className='font-bold text-xl md:2xl'>Starter</h3>
                        <p className='text-[#627382] '>Perfect for getting started</p>
                    </div>
                    <div>
                        <span className='font-bold text-2xl md:text-3xl'>$0</span><span className='text-[#627382]'>/Month</span>
                    </div>
                    <div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium text-[#627382]'>Access to 10 free tools</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium text-[#627382]'>Basic templates</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='text-[#627382] font-medium'>Community support</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium text-[#627382]'>1 project per month</p>
                        </div>
                    </div>

                    <button className=' w-full mt-12 btn rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-none border-none'>Get Started Free</button>

                </div>
                {/* card-2 */}
                <div className=' py-6 md:px-20 px-10 rounded-2xl space-y-6  bg-linear-to-r from-[#4f39f6] to-[#9514fa]  relative'>
                    <p className='text-[#bb4d00] bg-[#fef3c6] px-3 py-1.5 rounded-full font-medium absolute -top-3 left-35
                    8'>Most Popular</p>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-xl md:2xl text-white '>Pro</h3>
                        <p className='text-white '>Best for professionals</p>
                    </div>
                    <div>
                        <span className='font-bold text-2xl md:text-3xl text-white'>$29</span><span className='text-white'>/Month</span>
                    </div>
                    <div className='text-white'>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium'>Access to all premium tools</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium'>Unlimited templates</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className=' font-medium'>Priority support</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium '>Unlimited projects</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium '>Cloud sync</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium '>Advanced analytics</p>
                        </div>
                    </div>

                    <button className='px-4 py-3 w-full btn rounded-full bg-white shadow-none border-none text-[#9514fa]'>Start Pro Trial</button>

                </div>
                {/* card 3 */}
                <div className=' py-6 px-10 md:px-20 rounded-2xl space-y-6  bg-[#f9fafc]'>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-xl md:2xl'>Enterprise</h3>
                        <p className='text-[#627382] '>For teams and business</p>
                    </div>
                    <div>
                        <span className='font-bold text-2xl md:text-3xl'>$99</span><span className='text-[#627382]'>/Month</span>
                    </div>
                    <div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium text-[#627382]'>Everything in Pro</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium text-[#627382]'>Team collaboration</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='text-[#627382] font-medium'>Custom integrations</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium text-[#627382]'>Dedicated support</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium text-[#627382]'>SLA guarantee</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src={"tick.svg"} alt="" />
                            <p className='font-medium text-[#627382]'>Custom branding</p>
                        </div>
                    </div>

                    <button className=' w-full btn rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-none border-none'>Contact Sales</button>
                    

                </div>


            </div>

        </section>
    );
};

export default Pricing;