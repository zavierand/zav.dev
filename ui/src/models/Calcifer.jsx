// import dependencies
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

// import model
import calciferModel from '../assets/3d/calcifer_-_howls_moving_castle.glb';

const Calcifer = (props) => {
    const calcifer = useGLTF(calciferModel);

    useEffect(() => {

    }, []);
  return (
    <mesh {...props} >
        <primitive object={calcifer.scene} />
    </mesh>
  )
}

export default Calcifer;