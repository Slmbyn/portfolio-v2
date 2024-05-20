'use client'
import React, {useState} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/strattester.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/images/projects/pushstart.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/projects/snake.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/fitforecast.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/pushstart.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/fitforecast.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];
  

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const fileredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

  return (
    <>
        <h2 className='text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12'> My Projects</h2>

        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
            <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
            <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === 'Mobile'} />
        </div>

        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {fileredProjects.map((project) => (
                <ProjectsCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>

    </>
  )
}

export default ProjectsSection
