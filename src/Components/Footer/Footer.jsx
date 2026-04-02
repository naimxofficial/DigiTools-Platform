import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#101727] text-white pt-20 px-3'>
            <section className='mb-20 flex flex-col md:flex-row justify-evenly not-md:gap-10 not-md:text-center'>
                <div>
                    <h1 className='text-3xl md:text-4xl  font-extrabold mb-4'>DigiTools</h1>
                    <p className='text-xs'>Premium digital tools for creators, <br />professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>Products</h3>
                    <ul className='space-y-4 text-xs'>
                        <li><a href="#Features">Features</a></li>
                        <li><a href="#Pricing">Pricing</a></li>
                        <li><a href="">Templates</a></li>
                        <li><a href="">Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>Company</h3>
                    <ul className='space-y-4 text-xs'>
                        <li><a href="#hero">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>Resources</h3>
                    <ul className='space-y-4 text-xs'>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>Social Links</h3>
                    <ul className='flex items-center gap-3 not-md:justify-center'>
                        <li><a href="https://www.instagram.com/"><img src={"instagram.svg"} alt="" /></a></li>
                        <li><a href="https://www.facebook.com/"><img src={"facebook.svg"} alt="" /></a></li>
                        <li><a href="https://x.com/"><img src={"twitter.svg"} alt="" /></a></li>
                    </ul>
                </div>
            </section>

            <section className='p-5 not-md:text-xs border-y text-[#fafafa]/50 border-[#e5e7eb]/20 flex justify-between gap-12'>
                <div>
                    <p>© 2026 Digitools. All rights reserved.</p>
                </div>
                <ul className='flex items-center not-md:gap-2 gap-5'>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
            </section>

        </footer>
    );
};

export default Footer;