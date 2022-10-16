import React from 'react';
import { useBox } from '@react-three/cannon';
import * as textures from '../images/textures';
import { useStore } from '../hooks/useStore';


const Cube = ({ position, texture }) =>
{
    const ref = useBox(() => ({
        type: 'Static',
        position
    }));

    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);

    const activeTexture = textures[texture + 'Texture'];

    return (
        <mesh
            ref={ref}
            onClick={(e) =>
            {
                e.stopPropagation();
                const clickedFace = Math.floor(e.faceIndex / 2);
            }}
        >
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" map={activeTexture} />
        </mesh>
    )
}

export default Cube;