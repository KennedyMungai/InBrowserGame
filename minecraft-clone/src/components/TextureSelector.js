import React, { useEffect, useState } from 'react';
import { useStore, useKeyboard } from '../hooks/useStore';
import
{
    dirtImg,
    grassImg,
    glassImg,
    woodImg,
    logImg
} from '../images/images';


const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg
};


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
        const pressedTexture = Object.entries(textures).find(([k, v]) => v);

        if (pressedTexture)
        {
            setTexture(pressedTexture[0]);
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
        <div className='absolute centered texture-selector'>
            {Object.entries(images).map(([k, src]) =>
            {
                return (
                    <img
                        src={src}
                        key={k}
                        alt={k}
                        className={`${k === activeTexture ? 'active' : ''}`}
                    />
                )
            })}
        </div>
    )
}

export default TextureSelector;