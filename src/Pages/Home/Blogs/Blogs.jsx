import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Rating } from '@smastrom/react-rating';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Blogs = () => {
    
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/blogs");
            return res.data;
        }
    })
    return (
        <section className='my-14'>
            <Slide triggerOnce delay={3}>
                <p className='text-center font-bold text-2xl text-secondary'>Harmony in Words: Explore Our Music Blog</p>
                <p className='text-center my-3 font-semibold'>Immerse yourself in the captivating world of music through our thought-provoking and informative blog. Our collection of articles written by passionate musicians and industry experts covers a wide range of topics.</p>
            </Slide>

            <div className='flex flex-col lg:flex-row items-center justify-center my-10 gap-10'>

                <div className='flex flex-col lg:flex-row justify-center gap-10'>
{
    blogs.slice(0,2).map(blog=><div key={blog?._id} className="card card-compact w-72 h-fit bg-base-100 shadow-xl">
    <figure><img src={blog.img} alt="Shoes" className='w-full h-40'/></figure>
    <div className="card-body">
      <h2 className="card-title text-primary h-[85px]">{blog.name}</h2>
      <div className='flex items-start justify-between py-5'>
        <div>
            <p className='font-semibold'>{blog.author}</p>
            <p className='font-semibold'>{blog.publishDate}</p>
        </div>
        <div>
            <p className='font-semibold'>{blog.readTime}</p>
   
            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={blog.rating}
                                                readOnly
                                            />

        </div>
      </div>
      <div className="card-actions justify-end">
        <button className="myBtnThr">Read</button>
      </div>
    </div>
  </div>)
}
                </div>
                <div className='flex flex-col justify-center gap-10'>
{
    blogs.slice(2,5).map(blog=><div key={blog?._id} className="flex items-start  border-b-2 border-secondary  gap-5 lg:w-[450px]">
    <figure><img src={blog.img} alt="Shoes" className='w-32 h-32 mask mask-squircle'/></figure>
    <div className="">
      <h2 className="card-title text-primary">{blog.name}</h2>
      <div className='flex items-start justify-between py-2'>
        <div>
            <p className='font-semibold'>{blog.author}</p>
            <p className='font-semibold'>{blog.publishDate}</p>
        </div>
        <div>
            <p className='font-semibold'>{blog.readTime}</p>
   
            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={blog.rating}
                                                readOnly
                                            />
        </div>
      </div>
    </div>
  </div>)
}
                </div>

            </div>
        </section>
    );
};

export default Blogs;