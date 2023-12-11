import React from 'react';

const Footer = () => {
    return (
        <div className="py-5 border bg-gray-300 flex justify-center">
            <div className="space-x-5">
                <a href="/about" className="hover:underline">
                    About
                </a>
                <a href="/about" className="hover:underline">
                    Privacy Policy
                </a>
                <a href="/about" className="hover:underline">
                    Licensing{" "}
                </a>
                <a href="/about" className="hover:underline">
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Footer;