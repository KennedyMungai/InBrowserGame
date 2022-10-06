import create from 'zustand';
import { nanoid } from 'nanoid';


export const useStore = create((set) => (
    {
        texture: 'dirt',
        cubes: [],
        addCube: (x, y, z) =>
        {
            set((prev) => ({
                cubes: [
                    ...prev.cubes,
                    { key: }
                ]
            }))
        },
        removeCube: () => { },
        setTexture: () => { },
        saveWorld: () => { },
        resetWorld: () => { }
    }));