import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = () => {
    const scrollToBottom = () => {
        const windowHeight = window.innerHeight * 20
        window.scrollTo(0, windowHeight)
    }

    return (
        <div className="container">
            <button onClick={scrollToBottom} className="btn rounded">
                <span className="text-green">Let's Talk</span>
            </button>
        </div>
    );
};

export default CustomButton;