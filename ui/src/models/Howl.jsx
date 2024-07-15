import React from 'react'
import { useGLTF } from '@react-three/drei';
import howlScene from '../assets/3d/howls_moving_castle.glb';

const Howl = (props) => {
  const howl = useGLTF(howlScene);

  return (
    <mesh>
      <primitive object={howl.scene} {...props}/>
    </mesh>
  );
}

export default Howl;