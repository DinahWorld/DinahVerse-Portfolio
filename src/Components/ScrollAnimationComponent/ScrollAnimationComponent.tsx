// ScrollAnimationComponent.tsx
import React, {useEffect, useRef, useState} from 'react';
import useStyles from './styles';

interface ScrollAnimationProps {
}

const ScrollAnimationComponent: React.FC<ScrollAnimationProps> = () => {
    const {classes} = useStyles();
    const [width, setWidth] = useState<number>(0);
    const scrollYRef = useRef<number>(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;

        const middleOfPage = 1980;

        if (scrollY >= middleOfPage) {
            const step = 1;

            const scrollDirection = scrollY > scrollYRef.current ? 'down' : 'up';

            setWidth(prevWidth => {
                let newWidth = prevWidth;
                if (scrollDirection === 'down') {
                    newWidth = Math.min(100, prevWidth + step);
                } else if (scrollDirection === 'up') {
                    newWidth = Math.max(0, prevWidth - step);
                }
                console.log(scrollDirection)

                return newWidth;
            });
            scrollYRef.current = scrollY;
        } else {
            setWidth(0);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{
            backgroundColor: 'blue',
            height: '10px',
            width: "10px",
            borderRadius: "2em",
            position: "relative",
            left: `${width}%`
        }}/>
    )
        ;
};

export default ScrollAnimationComponent;