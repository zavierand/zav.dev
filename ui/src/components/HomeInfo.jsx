import React from 'react';
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
    <div className='header'>
        <p className='font-medium sm:text-xl text-center text-4xl sm:text-xl leading-snug text-center py-8 px-12 bg-[#43495c] rounded-2xl text-[#a5d5d7] shadow-xl mx-5'>
          {text}
        </p>
        <Link 
          to={link}
          className='text-xl sm:text-xl bg-[#a5d5d7] text-[#43495c] py-4 px-8 rounded-2xl shadow-lg hover:bg-'>
          {btnText}
        </Link>
    </div>
)

const renderData = {
    1: (
        <h1 className='text-2xl sm:text-xl leading-snug text-center py-4 px-8 bg-[#a5d5d7] rounded-2xl text-[#43495c] shadow-xl mx-5'>
        Yurr, I'm <span className='font-bold'>Zavier</span> 🤘🏾
        <br/> 
        </h1>
    ),
    2: (
        <InfoBox 
            text={`I\'m currently a senior at NYU studying computer science!`}
            link={'/about'}
            btnText='Learn more about me!'
        />
    ),
    3: (
        <InfoBox
            text={`Think this is pretty cool, huh? Check out some other cool stuff I\'ve made!`} 
            link='/projects'
            btnText='Check out my projects!'
            />
    ),      
    4: (
        <InfoBox 
            text={`Did you like anything you saw? Send me a message!`}
            link='/contact'
            btnText='We can chat about coffee and cars, and throw some tech in there too'
        />
    ),
};

 
const HomeInfo = ({ currentStage }) => {
  return renderData[currentStage];
}

export default HomeInfo;