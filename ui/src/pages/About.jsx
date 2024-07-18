// import dependencies
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import destructured objects (and functions) from data/index.js
import { mergeSort, experiences, skills } from '../data/';

// import components
import CTA from '../components/CTA.jsx';

const About = () => {
  // sort skills
  mergeSort(skills, 0, skills.length - 1);
  return (
    <section className='max-container pt-20'>
      <h1 className='text-4xl font-bold text-gray-800'>
        Yo, I'm <span className='blue-gradient_text'>Zavier</span>...
      </h1>

      <div className='mt-5 flex flex-col gap-3'>
        <p>
          but a lot of people call me "Zav". I'm a computer science student at New York University with
          many interests. From to cars, to robotics, to software and hardware - I want to combine
          these along with my other interests in fashion, music, and sports! 
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
              Now, you're probably wondering how I got here... lemme break it down for you!
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
