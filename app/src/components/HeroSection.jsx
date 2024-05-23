'use client'
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'


const HeroSection = () => {
  return (
    <motion.section 
    // initial={{ opacity: 0, scale: 0.5}}
    // animate={{ opacity: 1, scale: 1}}
    // transition={{ duration: .5 }}
        className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>

            <motion.div 
                initial={{ opacity: 0, scale: 0.6}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: .5 }}
                className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold"> 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Hello, I&rsquo;m
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Selam.',
                            3000,
                            'a Software Engineer.',
                            2000,
                            'a Day Trader.',
                            2000,
                            'a Warriors Fan.',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                &quot;I have no special talents. I am only passionately curious.&quot;  <br/> - Albert Einstein
                </p>
                <div>
                    <a        
                        href="https://drive.google.com/file/d/1eKl6XrAK0Y-vuqGhFCkhzQzLP8Qisjtz/view?usp=sharing"
                        target="_blank"
                        download
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white cursor-pointer'
                    >
                            Resume
                    </a>
                    {/* <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                            Download CV
                        </span>
                    </button> */}
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.3}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 1.3 }}
                className='col-span-4 place-self-center mt-4lg:mt-0'>
                {/* <div className='rounded-full bg-[#504f4f] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative'> */}
                <div className='rounded-full w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src='/images/hero-image.png'
                        alt='hero image'
                        className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </motion.div>

        </div>
    </motion.section>
  )
}

export default HeroSection
