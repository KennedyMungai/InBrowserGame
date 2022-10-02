import { usePlane } from '@react-three/cannon';
import React from 'react';


const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [0,0,0],
        position: [0,0,0]
    }));

    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' color='hotpink' />
        </mesh>
    );
}

export default Ground