import React from 'react';
import { useBox } from '@react-three/cannon';
import * as textures from '../images/textures';


const Cube = ({ position, texture }) =>
{
    const ref = useBox(() => ({
        type: 'Static',
        position
    }));

    const [addCube] = useStore((state) => [state.addCube]);

    const activeTexture = textures[texture + 'Texture'];

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" map={activeTexture} />
        </mesh>
    )
}

export default Cube;