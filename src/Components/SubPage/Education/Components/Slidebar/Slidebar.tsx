import {Grid} from "@mui/material";
import React from "react";

interface SlidebarProps {
    imageNumber: number;
    hookedYPosition: number;
    first: number;
    second: number;
    length: number;
}


const Slidebar: React.FC<SlidebarProps> = ({length, first, second, imageNumber, hookedYPosition}) => {
    let mainColor = "";
    let secondColor = "";
    let firstN = first - 30;
    let secondN = second - 60;
    let lengthN = length - 90;

    switch (imageNumber) {
        case 1:
            mainColor = "#D2D8FC";
            secondColor = "#8D95FF";
            break;
        case 2:
            mainColor = "#F7D7D7";
            secondColor = "#FF8C8C";
            break;
        case 3:
            mainColor = "#7A7B80";
            secondColor = "#FFFFFF";
            break;
    }

    return (
        <>

            <Grid container className={"progress-bar"} sx={{width: "60vw"}}>
                <Grid container item xs={12}>

                    <div style={{
                        position: "relative",
                        left: "-10px",
                        fontSize: "0.7rem"
                    }}>
                        2016
                    </div>
                    <div style={{
                        position: "relative",
                        left: `${firstN}px`,
                        fontSize: "0.7rem"

                    }}>
                        2019
                    </div>
                    <div style={{
                        position: "relative",
                        left: `${secondN}px`,
                        fontSize: "0.7rem"
                    }}>
                        2022
                    </div>
                    <div style={{
                        position: "relative",
                        left: `${lengthN}px`,
                        fontSize: "0.7rem"
                    }}>
                        2024
                    </div>

                </Grid>
                <Grid item xs={12}
                      className={"progress-bar"}
                      sx={{
                          backgroundColor: `${mainColor}`,
                          borderRadius: "3.5rem"
                      }}
                >
                    <div style={{
                        backgroundColor: `${secondColor}`,
                        height: '10px',
                        width: "10px",
                        borderRadius: "2em",
                        position: "relative",
                        left: `${hookedYPosition}px`
                    }}/>
                </Grid>
            </Grid>
        </>
    )
}

export default Slidebar;