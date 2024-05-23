'use client'
import React, {useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: 'skills',
        content: (
            <ul className='grid grid-cols-3 gap-2'>
                <li>Bootstrap</li>
                <li>CSS</li>
                <li>Django</li>
                <li>Express</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Postman</li>
                <li>Python</li>
                <li>React</li>
                <li>SQL</li>
                <li>Tailwind</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: 'education',
        content: (
            <ul className='list-desc pl-2'>
                <li>General Assembly</li>
                <li>San Jose State University</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: 'certifications',
        content: (
            <ul className='list-desc pl-2'>
                <li>Full Stack Software Engineer</li>
                <li>Software Testing</li>
            </ul>
        )
    },
]

function AboutSection() {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className='text-white'> 
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image className="hidden md:block" src='/images/about-image.png' alt='' width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center md:text-left'>About Me</h2>
                <p className='text-base lg:text-lg'>
                My journey into software development has been unconventional. Starting with a finance degree, I found myself diving into day trading, where I picked up Python to help streamline some of my tasks. Unexpectedly, I fell in love with programming and completed a software engineering bootcamp. I love learning new skills and am all about making things easier, so it felt like the perfect fit. If you have an idea that you&apos;d like to see come to life or are looking to add a member to your team I&apos;d be happy to lend my blend of experience!
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === 'skills'}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === 'education'}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === 'certifications'}>
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className='mt-8'> {TAB_DATA.find((t) => t.id === tab).content} </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection