import {motion} from 'framer-motion';
import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = () => {
    const scrollToBottom = () => {
        const windowHeight = window.innerHeight * 20
        window.scrollTo(0, windowHeight)
    }

    return (
        <motion.div
            whileHover={{scale: 1}}
            whileTap={{scale: 0.8}}
            transition={{type: "spring", stiffness: 100, damping: 10}}
            animate={{
                scale: 0.9,
                width: "100%",
            }}
        >
            <div className="container">
                <button onClick={scrollToBottom} className="btn rounded">
                    <span className="text-green">Let's Talk</span>
                </button>
            </div>
        </motion.div>
    );
};

export default CustomButton;