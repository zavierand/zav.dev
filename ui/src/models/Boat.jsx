import React from 'react';
import { useGLTF } from '@react-three/drei';
import boatScene from '../assets/3d/3d_daily_ghibli.glb'

const Boat = (props) => {
  const boat = useGLTF(boatScene);

  return (
    <mesh>
        <primitive object={boat.scene} {...props}/>
    </mesh>
  )
}

export default Boat;