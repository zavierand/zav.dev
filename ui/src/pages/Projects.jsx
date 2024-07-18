import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import data
import { clips, arrow } from '../assets/icons';

// import components
import CTA from '../components/CTA.jsx';

const Projects = () => {
  // initialize projects to an empty array
  const [projects, setProjects] = useState([]);
  const api_url = import.meta.env.VITE_PROJECTS;

  // fetch our projects from backend and set project ===
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(api_url);
        if (!res.ok) {
          throw new Error('Failed to connect to ');
        }
        const data = await res.json();
        setProjects(data);
        console.log('Projects:', data); // Log the updated data after setting state
      } catch (err) {
        console.error('Error fetching', err);
      }
    };

    fetchData();

  }, []); 
  
  return (
    <section className='max-container pt-20'>
      <h1 className='text-4xl font-bold text-gray-800'>
        My <span className='blue-gradient_text'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3'>
        <p>
          I wouldn't say that I can pinpoint where exactly my love for tech started. However,
          I can say it started really young when my dad introduced me to video games. The very first
          game I remember playing was "Gran Turismo 3" on the "PlayStation 2". From there, I fell in 
          with cars and video games... from creating minecraft mods, to tuning my car (virtually lol),
          I think my love for building things stems from there.
        </p>
        <p>
          Now, fast forward 20 something years later, and I'm still building! Here are some projects I've built
          over the past few years!
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div key={`project.name`} className='lg:w-[400px]'>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl`} />
              <div className='btn-front rounded-xl flex items-center justify-center'>
                <img 
                  src={clips}
                  alt='projects'
                  className=''
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.desc}
              </p>
              <p className-='mt-2 text-slate-500'>
                <span className='font-semibold'>Languages Used:</span> {project.languages.join(', ')}
              </p>
              <p className-='mt-2 text-slate-500'>
                <span className='font-semibold'>Tech:</span> {project.tech.join(', ')}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Click Me to See the Project
                </Link>
                <img 
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default Projects;