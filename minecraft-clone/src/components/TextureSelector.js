import React, { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';


const TextureSelector = () =>
{
    const [visible, setVisible] = useState(false);
    const [activeTexture] = useStore((state) => [state.texture]);

    useEffect(() =>
    {
        const visibilityTimeout = setTimeout(() =>
        {
            setVisible(false);
        }, 2000)
    }, [activeTexture]);


    return (
        <div>TextureSelector</div>
    )
}

export default TextureSelector;