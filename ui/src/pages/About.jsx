// import dependencies
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import destructured objects (and functions) from data/index.js
import { mergeSort, mergeSortExperiences, experiences, skills } from '../data/';

// import components
import CTA from '../components/CTA.jsx';

const About = () => {
  // sort skills
  mergeSort(skills, 0, skills.length - 1);
  mergeSortExperiences(experiences, 0, experiences.length - 1);

  return (
    <section className='max-container pt-20'>
      <h1 className='text-4xl font-bold text-gray-800'>
        Yo, I'm <span className='blue-gradient_text'>Zavier</span>...
      </h1>

      <div className='mt-5 flex flex-col gap-3'>
        <p>
          but a lot of people call me "Zav". I'm a computer science student at New York University with
          many interests. From to cars, to robotics, to hardware and software - I want to combine
          these along with my other interests in art, fashion, music, and sports! 
        </p>
        <p>
          In my free-time, I like to rock climb, cook and/or bake, play video games, and watch videos and/or
          TV. One show I've been watching a lot recently is "The Blacklist"!! I started watching it a few weeks
          after the Spring 2024 semester ended and I'm currently on season 4! My favorite character is Aram Mojtabi
          - such a wholesome dude!
        </p>
        <p>
          Also love cars. My dream car is a "GTR R34 VSpec-II NUR". You can't ever go wrong with the iconic Skyline
          Blue or Midnight Purple colorway either! Enough about my hobbies and interests though! These are some skills
          I have that I use when building all of my projects...
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div key={skill.name} className='w-32 h-32 btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>
          Experiences
        </h3>
          <div className='mt-5 flex flex-col gap-3'>
            <p>
              Now, you're probably wondering how I got here... lemme break it down for you! <span className='text-sm'>
              (I used mergesort to sort my skills and experiences lol. Yes, I know JS has a built in sort
              function, but I wanted to see if I would be able to sort on my own)
            </span>
            </p>
            
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.name}
                  date={experience.data}
                  icon={
                    <div className='flex items-center justify-center w-full h-full'>
                      <img 
                      src={experience.icon}
                      alt={experience.name}
                      className='w-[60%] h-[60%] object-contain'
                      />
                    </div>}
                  iconStyle={{
                    background: 'experience.iconBg',
                  }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: 'experience.iconBg',
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {experience.name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      {/* CTA */}
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default About;
