import React from 'react';
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          {text}
        </p>
        <Link 
          to={link}
          className='neo-brutalism-white neo-btn'>
          {btnText}
        </Link>
    </div>
)

const renderData = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
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
            btnText={`(I\'m desperate)`}
        />
    ),
};

 
const HomeInfo = ({ currentStage }) => {
  return renderData[currentStage];
}

export default HomeInfo;