import React from 'react';
import { useStore } from '../hooks/useStore';


const Menu = () =>
{
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld]);

    return (
        <div>Menu</div>
    )
}

export default Menu;