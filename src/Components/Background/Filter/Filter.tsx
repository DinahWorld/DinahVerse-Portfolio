import React from "react";
import {BackgroundProps} from "Interface/BackgroundProps";

const Filter: React.FC<BackgroundProps> = (props: BackgroundProps) => {
    let pos = props.x + ' ' + props.y + ' ' + props.sizex + ' ' + props.sizey;

    return (
        <svg viewBox={pos} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_62_2)">
                <path
                    d="M94.6492 320.615C94.6492 196.074 195.609 95.1145 320.149 95.1145V95.1145C444.689 95.1145 545.649 196.074 545.649 320.615V320.615C545.649 445.155 444.689 546.115 320.149 546.115V546.115C195.609 546.115 94.6492 445.155 94.6492 320.615V320.615Z"
                    fill="#4E4C99" fillOpacity="0.08"/>
            </g>
            <defs>
                <filter id="filter0_f_62_2" x="0.449173" y="0.914505" width="639.4" height="639.4"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="47.1" result="effect1_foregroundBlur_62_2"/>
                </filter>
            </defs>
        </svg>

    );
}

export default Filter;