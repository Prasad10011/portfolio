import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [brandName, setBrandName] = useState("abc xyz");
    const [links, setLinks] = useState([
        { name: "Home", link: "/", id: 1 },
        { name: "About", link: "/about", id: 2 },
        { name: "Contact", link: "/contact", id: 3 },
    ]);
    const [topBtn, setTopBtn] = useState("button");
    return (
        <div className='main flex justify-between items-center px-16 bg-gray-50 h-16'>
            <div>
                <div className="text-2xl font-bold">{brandName}</div>
            </div>
            <div className='space-x-10'>
                {
                    links.map((link, index) => (
                        <NavLink key={index} className='hover:text-orange-600 font-semibold' to={link.link}>
                            {link.name}
                        </NavLink>
                    ))
                }
            </div>
            <div>
                <button className='px-4 py-1 bg-orange-500 rounded-full text-1xl text-white font-bold shadow-lg'>
                    {topBtn}
                </button>
            </div>
        </div>
    );
};

export default Header;