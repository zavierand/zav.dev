import React, { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';

import Clouds from '../models/Clouds.jsx';
import Howl from '../models/Howl.jsx';
import Boat from '../models/Boat.jsx';
import SpiritedAway from '../models/SpiritedAway.jsx';

import Loader from '../components/Loader.jsx';

/**
 * 
<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center '>
POPUP 
</div>
 * 
*/

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);

    const spiritedAwaySize = () => {
        // spirited away vars
        let screenPos = [0, -1, 0];
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
            screenScale = [-3, 3, 4];
        }

        return [screenPos, screenScale, screenRot];
    };

    const [pos, scale, rot] = spiritedAwaySize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
            <OrbitControls />
          <directionalLight position={[1, 1, 1]} intensity={2} />
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
          <Howl 
            position={[-3, 3, -4]}
            scale={[0.15, 0.15, 0.15]}
            rotation={[0, 180, 0]}/>
          <Clouds 
            renderOrder={-1}
            position={[0, 0, -7]}
            scale={[2, 2, 2]}
          />
          <Boat 
            position={[0, -1.21, 2.57]}
            scale={[0.02, 0.02, 0.02]}
            rotation={[0, -80, 0]}
          />
          <SpiritedAway 
            renderOrder={1}
            position={pos}
            scale={scale}
            rotation={rot}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home;