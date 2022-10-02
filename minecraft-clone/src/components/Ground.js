import { usePlane } from '@react-three/cannon';
import React from 'react';
import { RepeatWrapping } from 'three';
import { groundTexture } from '../images/textures';


const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [0,0,0],
        position: [0,0,0]
    }));

    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(100,100);

    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
    );
}

export default Ground