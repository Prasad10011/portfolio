import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import bannerImage from '../assets/bannerImage.jpg';
import banner_wallpaper from '../assets/banner_wallpaper.svg';

const Baner = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend Developer", "Backend Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop:true
        });
        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='main-container flex items-center'
            style={{
                backgroundImage: `url(${banner_wallpaper})`,
                backgroundSize: "cover"
            }}>
            <div className='w-full flex items-center justify-center text-white '>
                <div className="w-2/3 my-2 ms-10">
                    <h3 className="text-3xl font-semibold">Hi, I am</h3>
                    <h1 className="text-5xl font-bold">abc xyz</h1>
                    <h2 className="text-3xl ">
                        I am <span className="font-bold underline" ref={el}></span>
                    </h2>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Repellendus, nemo. Omnis quis reprehenderit aspernatur culpa
                        inventore rem, illum iure optio et blanditiis quia alias
                        consequuntur totam dicta vel molestiae. Odio laboriosam quisquam,
                        exercitationem omnis numquam vero nesciunt explicabo incidunt vel
                        eaque a repellat nisi, debitis repudiandae excepturi quasi
                        praesentium id!
                    </p>
                    <div className="icons-container flex space-x-5">
                        <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-4xl  fa-facebook"></i>
                        </a>

                        <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-4xl  fa-instagram"></i>
                        </a>

                        <a className="  hover:bg-orange-600 border cursor-pointer  px-3 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-4xl  fa-youtube"></i>
                        </a>

                        <a className=" hover:bg-orange-600 border cursor-pointer px-3 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-4xl  fa-linkedin-in"></i>
                        </a>
                    </div>
                    <button className=" text-2xl my-2 px-3 py-1 bg-orange-500  rounded-full shadow-lg">
                        Contact Me
                    </button>
                </div>
            </div>
            <div className=" w-full flex justify-center">
                <img className="rounded-full my-2 shadow-lg w-72 h-72" src={bannerImage} />
            </div>
        </div>
    );
};

export default Baner;