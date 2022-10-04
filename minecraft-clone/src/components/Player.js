import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { Vector3 } from 'three';
import useKeyboard from '../hooks/useKeyboard';


const JUMP_FORCE = 7.5;


const Player = () => {
    const { moveBackward, moveForward, moveLeft, moveRight, jump } = useKeyboard();

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

        const direction = Vector3();
        const frontVector = Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        );
        const sideVector = Vector3(
            (moveRight ? 1 : 0) - (moveLeft ? 1 : 0),
            0,
            0,
        );
        
        if (jump && Math.abs(vel.current[1]) < 0.05) {
            api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
        }
    });

    return (
        <mesh ref={ref}>
        </mesh>
    )
}

export default Player