import React,{useState} from 'react';
import bannerImage from '../assets/bannerImage.jpg';


const AboutPage = () => {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        dignissimos esse itaque impedit quas omnis odit, velit ullam
        suscipit? Vel obcaecati pariatur voluptatem sapiente.
        Necessitatibus vero laborum nam quaerat ullam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        dignissimos esse itaque impedit quas omnis odit, velit ullam
        suscipit? Vel obcaecati pariatur voluptatem sapiente.
    `,
        actionButton: {
            title: "Read More..",
            link: "/about",
        },
    });
    return (
        <div className='main-container bg-gray-100 py-16'>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;