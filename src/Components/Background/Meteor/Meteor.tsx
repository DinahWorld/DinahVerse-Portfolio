import React from "react";
import {BackgroundProps} from "Interface/BackgroundProps";

const Meteor: React.FC<BackgroundProps> = (props: BackgroundProps) => {
    let pos = props.x + ' ' + props.y + ' ' + props.sizex + ' ' + props.sizey;

    return (
        <svg viewBox={pos} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M13.1932 234.419L342.981 0L61.5557 284.06C60.4446 285.36 59.2405 286.574 57.9553 287.694L56.6089 289.053L56.4895 288.903C49.1326 294.641 39.4796 297.447 29.5004 295.899C10.4604 292.943 -2.5569 275.253 0.425361 256.385C1.84463 247.406 6.63181 239.779 13.3121 234.569L13.1932 234.419Z"
                  fill="url(#paint0_linear_3872_408)"/>
            <defs>
                <linearGradient id="paint0_linear_3872_408" x1="36.9423" y1="252.272" x2="349.68" y2="-18.0017"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B2BFFF"/>
                    <stop offset="0.785" stop-color="white" stop-opacity="0.68"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

export default Meteor;