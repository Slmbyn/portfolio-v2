'use client'
import React, {useState, useRef} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Strat-Tester",
      description: 'A web application that helps stock traders test and analyze data from various trading strategies.', 
      image: "/images/projects/strattester.png",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/Slmbyn/strattester',
      previewUrl: "/",
    },
    {
      id: 2,
      title: "PushStart",
      description: 'An application that seamlessly connects car buyers & sellers in a way that simplifies the car buying process.', 
      image: "/images/projects/pushstart.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Slmbyn/PushStart",
      previewUrl: "https://pushstart-67af309d22a2.herokuapp.com/",
    },
    {
      id: 3,
      title: "Fit-Forecast",
      description: 'Platform designed to enhance your well-being through personalized workout suggestions based on your local weather conditions.',
      image: "/images/projects/fitforecast.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/Slmbyn/Fit-Forecast",
      previewUrl: "https://fitforecast-dc33e66f392f.herokuapp.com/",
    },
    {
      id: 4,
      title: "Snake",
      description: 'Snake, the timeless arcade game, is back! In snake, players control a snake with never ending hunger as it navigates through a field in search of food!',
      image: "/images/projects/snake.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Slmbyn/Snake",
      previewUrl: "https://snake-gilt-eta.vercel.app/",
    },
    {
      id: 5,
      title: "TutorAi",
      description: "TutorAi empowers new programmers, especially those without a CS background, by using AI to provide personalized, digestible explanations on diverse topics, fostering an inclusive learning environment.",
      image: "/images/projects/site_under_construction.jpeg",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/Slmbyn/TutorAi",
      previewUrl: "https://github.com/Slmbyn/TutorAi",
    }
  ];
  

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const fileredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
      initial: { y: 50, opacity: 0},
      animate: { y: 0, opacity: 1}
    }

  return (
    <section>
        <h2 className='text-white text-center text-4xl font-bold mt-4 mb-4 md:mb-8 md:text-6xl'> My Projects</h2>

        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
            <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
            <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === 'Mobile'} />
        </div>

        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {fileredProjects.map((project, index) => (
              <motion.li 
                variants={cardVariants} 
                initial="initial" 
                animate={ isInView ? "animate" : "initial"}  
                transition={{ duration: 0.3, delay: index * 0.2}}
                key={index}
                >
                <ProjectsCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
        </ul>

    </section>
  )
}

export default ProjectsSection
