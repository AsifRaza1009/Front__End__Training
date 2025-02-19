import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import AboutImg from '../../public/about.jpg';
import { RevealWrapper } from 'next-reveal';



export default function About() {
  return (
    
    <section id='about'> 
    
    <div  className='w-full md:h-screen p-2 flex items-center py-16'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
    
      <div className='col-span-2'>
        <p className=' font-serif font-semibold uppercase text-xl tracking-widest text-blue-500 border-l-8 border-l-red-500 pl-5 '>
          About Me
        </p>
        <h2 className='py-4 text-red-500 font-serif'>Who I Am</h2>
        <p className='py-2 text-gray-700 font-serif'>
          I specialize in building mobile responsive front-end UI applications
          that connect with API’s and other backend technologies. I’m
          passionate about learning new technologies and understand there is
          more than one way to accomplish a task. Though I am most proficient
          in building front-end applications using HTML, CSS, Javascript, and
          React, I am a quick learner and can pick up new tech stacks as
          needed. I believe that being a great developer is not using one
          specific language, but choosing the best tool for the job.
        </p>
        <p className='py-2 text-gray-700 font-serif '>
          I started my professional carrier with banking in 2004 and work 
          in banking sector till 2017. Then after I start my own bussiness till 2022. 
          I started web developement in 2022 managing multiple e-commerce
          websites on CMS platforms such as WordPress, BigCommerce, and
          Shopify. I have experience working directly with clients and taking
          mock wireframes all the way to deployed applications. In my spare
          time I run Code Commerce, a Youtube channel where I teach web
          developement and various front-end technologies.
        </p>
        <a href='#projects'>
          <p className='py-2 text-blue-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </a>
      </div>
      <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image src={AboutImg} className='rounded-xl' alt='/' />
      </div>
    </div>
  </div>
      
  
  </section>
  
  );
};


