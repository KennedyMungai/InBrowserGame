import { useSphere } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import React, { useRef } from 'react';


const Player = () => {
    const { camera } = useThree();
    const [ref] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0]
    }));

    const pos = useRef([ 0, 0, 0]);

    return (
        <mesh ref={ref}>
        </mesh>
    )
}

export default Player