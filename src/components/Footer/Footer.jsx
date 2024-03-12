import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bottom-0 w-full bg-white py-6">
            <div className="flex justify-center items-center">
                <a href='https://www.commercecourt.ca/' target='_blank' className="mx-5">
                    <img src='http://127.0.0.1:5500/media/6844e96a5db04195bf7e3413f8a6c0da/7224648ae2705a8928576c4c71f830e03773da5c-full.png' alt="Commerce Court" />
                </a>
                
                <Link to='https://www.quadreal.com/' target="_blank" className="mx-5">
                    <img src="https://the-renovation.azurewebsites.net/media/70ce93a8ac0cb49c280b2c30e95aaa54/quadreal-at-2x-tenth.png" alt="Quadreal logo" className="w-32 h-auto" />
                </Link>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto w-1/2" />
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 px-5">
                <p className="mb-2">© 2023 Pricing, specifications and information subject to change without notice. E. & O. E.</p>
                <p className="mb-2">©2022 25 King West Commerce Court North</p>
                <div className='flex justify-center'>
                    <span className="mr-4"><a href='https://www.quadreal.com/legal/' className='hover:underline'>Privacy Policy</a></span>
                    <span><a href='https://www.52pick-up.com/' className='hover:underline'>Created by 52 Pick-up Inc.</a></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
