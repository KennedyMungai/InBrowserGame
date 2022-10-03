import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { Vector3 } from 'three';


const Player = () => {
    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0]
    }));

    const pos = useRef([ 0, 0, 0]);

    useEffect(() => {
        
    }, [api]);
    

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[1]));
    });

    return (
        <mesh ref={ref}>
        </mesh>
    )
}

export default Player