import create from 'zustand';


export const useStore = create((set) => (
    {
        texture: 'dirt',
        cubes: [],
        addCube: (x, y, z) => { },
        removeCube: () => { },
        setTexture: () => { },
        saveWorld: () => { },
        resetWorld: () => { }
    }));