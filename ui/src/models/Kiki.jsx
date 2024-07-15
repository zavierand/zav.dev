// import dependencies
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// import model
import kikiModel from '../assets/3d/kiki_and_jiji.glb';

const Kiki = (props) => {
    const kiki = useGLTF(kikiModel);
    const kikiRef = useRef();

    // this will animate Kiki to fly in a figure 8 pattern
    useFrame(({ clock }) => {
        const t = clock.elapsedTime * 0.3; // Slowing down the movement by reducing the speed
        const a = 1.5; // Tighter figure 8
        const x = a * Math.sin(t);
        const y = Math.sin(t * 2) * 0.2 + 1; // Lowering Kiki
        const z = a * Math.sin(t) * Math.cos(t);

        kikiRef.current.position.set(x, y, z);

        // Update rotation to face the direction of movement
        const nextT = t + 0.01; // Small increment to calculate the next position
        const nextX = a * Math.sin(nextT);
        const nextZ = a * Math.sin(nextT) * Math.cos(nextT);
        kikiRef.current.lookAt(nextX, y, nextZ);
    });

    return (
        <mesh ref={kikiRef} {...props}>
            <primitive object={kiki.scene} />
        </mesh>
    );
};

export default Kiki;