// import dependencies
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import skyScene from '../assets/3d/stylized_clouds.glb';

const Clouds = (props) => {
    const clouds = useGLTF(skyScene);

    return (
        <mesh>
            <primitive object={clouds.scene} {...props}/>
        </mesh>
    )
}

export default Clouds;
