import {useEffect, useState} from 'react';

export const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const setFromEvent = (e: any) =>
            setPosition({
                x: e.clientX - window.innerWidth / 2,
                y: e.clientY - window.innerHeight / 2,
            });
        window.addEventListener('mousemove', setFromEvent);

        return () => {
            window.removeEventListener('mousemove', setFromEvent);
        };
    }, []);

    return position;
};