import React,{ useState, useEffect } from 'react'

const Projects = () => {
  const [data, setData] = useState('');
  const api_url = 'http://localhost:8080/projects';

  const fetchData = async () => {
    try {
      const projects = await fetch(api_url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          // log data to make sure req, res was processed
          console.log(data);
        });
    } catch(err) {
      console.error('Error connecting to database', err);
    } 
  };

  fetchData();
  
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
    </section>
  )
}

export default Projects;