import React, { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';


const TextureSelector = () =>
{
    const [visible, setVisible] = useState(false);
    const [activeTexture] = useStore((state) => [state.texture]);

    return (
        <div>TextureSelector</div>
    )
}

export default TextureSelector;