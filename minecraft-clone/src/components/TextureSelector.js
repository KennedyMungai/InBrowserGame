import React, { useEffect, useState } from 'react';
import { useStore, useKeyboard } from '../hooks/useStore';


const TextureSelector = () =>
{
    const [visible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);
    const {
        dirt,
        grass,
        glass,
        wood,
        log,
    } = useKeyboard();

    useEffect(() =>
    {
        const pressedTexture = [dirt, grass, glass, wood, log];

        if (pressedTexture)
        {
            setTexture(pressedTexture);
        }
    }, [setTexure, dirt, grass, glass, wood, log]);


    useEffect(() =>
    {
        const visibilityTimeout = setTimeout(() =>
        {
            setVisible(false);
        }, 2000);

        setVisible(true);

        return () =>
        {
            clearTimeout(visibilityTimeout);
        };
    }, [activeTexture]);


    return visible && (
        <div className='absolute centered'>TextureSelector</div>
    )
}

export default TextureSelector;