import React, { useEffect, useState } from 'react';
import { useStore, useKeyboard } from '../hooks/useStore';


const TextureSelector = () =>
{
    const [visible, setVisible] = useState(false);
    const [activeTexture] = useStore((state) => [state.texture]);
    const actions = useKeyboard();

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