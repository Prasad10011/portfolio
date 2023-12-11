import React, { useState } from 'react';
import bannerImage from '../assets/bannerImage.jpg';
import demo from '../assets/demo.pdf'
const About = () => {
    const [data, setData] = useState({
        image: bannerImage,
        title: "Developer",
        desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        illo fugit explicabo blanditiis enim quaerat dolorum fugiat
        ducimus minus ipsum.`,
        desc2: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        dignissimos esse itaque impedit quas omnis odit, velit ullam
        suscipit? Vel obcaecati pariatur voluptatem sapiente.
        Necessitatibus vero laborum nam quaerat ullam?
    `,
        actionButton: {
            title: "Read More..",
            link: "/about",
        },
    });
    return (
        <div className='main-container bg-gray-100 py-16'>
            <h1 className='text-center font-bold text-4xl pb-16'>
                About
            </h1>
            <div className='flex items-center'>
                <div className='w-full flex justify-center items-center'>
                    <img src={bannerImage}
                        className='rounded-full h-72 w-72' />
                </div>
                <div className='w-full justify-center'>
                    <div className="space-y-5 w-2/3">
                        <h1 className="text-5xl  font-semibold ">{data.title}</h1>
                        <p>{data.desc1}</p>
                        <p>{data.desc2}</p>
                        <a href={demo} download="demo.pdf">
                            <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                                {data.actionButton.title}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;