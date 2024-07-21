import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import {  Sky } from '@react-three/drei';

// import models
import Clouds from '../models/Clouds.jsx';
import Kiki from '../models/Kiki.jsx';
import Boat from '../models/Boat.jsx';
import SpiritedAway from '../models/SpiritedAway.jsx';

// import assets
import { soundoff, soundon } from '../assets/icons';

// import components
import Loader from '../components/Loader.jsx';
import HomeInfo from '../components/HomeInfo.jsx';

// import audio
import howl from '../assets/audio/merry-go-round-of-life.mp3'

const Home = () => {
    // 
    const audioRef = useRef(new Audio(howl));
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
      if (isPlayingMusic) {
        audioRef.current.play()
      } else {
        audioRef.current.pause();
      }
    }, [isPlayingMusic])

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const spiritedAwaySize = () => {
        // spirited away vars
        let screenPos = [0, -0.5, 0];
        let screenScale = [0.15, 0.15, 0.15];
        let screenRot = [0, 0, 0];

        /*
        // sky vars
        let skyPos = [];
        let skyScale = [];
        let skyRot = [];
        
        // ponyo vars 
        */

        // 768 === size of screen, so we'll scale everything down if 
        if (window.innerWidth < 768) {
            screenScale = [2.5, 2.5, 2.5];
        } else {
            screenScale = [-3, 3, 3];
        }

        return [screenPos, screenScale, screenRot];
    };

    const [pos, scale, rot] = spiritedAwaySize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center '>
        { currentStage && <HomeInfo currentStage={currentStage} /> }
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight 
            position={[1, 1, 1]} 
            intensity={2} 
          />
          <ambientLight intensity={0.5}/>
          <hemisphereLight 
            skyColor={0xb1e1ff} 
            groundColor={0x000000} 
            intensity={1}
          />
          <Sky 
            distance={450000}
            sunPosition={[5, 1, 8]}
            inclination={-6}
            azimuth={0.25}
          />
          <Clouds 
            renderOrder={-1}
            position={[0, 0, -7]}
            scale={[2, 2, 2]}
            isRotating={isRotating}
          />
          <Kiki 
            position={[0, 1, 0]}
            scale={[0.3, 0.3, 0.3]}
            rotation={[0, -30, 0]}
          />
          <Boat 
            position={[0, -1.32, 2.715]}
            scale={[0.017, 0.017, 0.017]}
            rotation={[0, -80, 0.015]}
          />
          <SpiritedAway 
            renderOrder={1}
            position={pos}
            scale={scale}
            rotation={rot}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          >
          </SpiritedAway>
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home;