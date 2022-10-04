import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { Vector3 } from 'three';
import useKeyboard from '../hooks/useKeyboard';


const Player = () => {
    const actions = useKeyboard();
    console.log('actions' ,Object.entries(actions).filter(([k, v]) => v ));

    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1, 0]
    }));

    const pos = useRef([ 0, 0, 10]);

    useEffect(() => {
        api.position.subscribe((p) => pos.current = p);
    }, [api.position]);

    const vel = useRef([ 0, 0, 10]);

    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v);
    }, [api.velocity]);
    

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[0]));
        // api.velocity.set(0, 1, 0);
    });

    return (
        <mesh ref={ref}>
        </mesh>
    )
}

export default Player