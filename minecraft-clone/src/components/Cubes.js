import { useStore } from "../hooks/useStore";


export const Cubes = () =>
{
    const [cubes] = useStore((state) => [
        state.cubes
    ]);

    console.log(cubes);
    return cubes.map(({ key, position, texture }) =>
    {
        return (
            <Cube key={key} position={position} />
        );
    });
};