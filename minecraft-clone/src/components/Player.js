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

    const vel = useRef([ 0, 0, 10]);

    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = p);
    }, [api.velocity]);
    

    useFrame(() => {
        camera.position.copy(new Vector3(vel.current[0], vel.current[1], vel.current[1]));
    });

    return (
        <mesh ref={ref}>
        </mesh>
    )
}

export default Player