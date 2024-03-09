import {Grid} from "@mui/material";
import React from "react";

interface SlidebarProps {
    imageNumber: number;
    hookedYPosition: number;
}


const Slidebar: React.FC<SlidebarProps> = ({imageNumber, hookedYPosition}) => {
    let mainColor = "";
    let secondColor = "";

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
        default:
            mainColor = "#7A7B80";
            secondColor = "#FFFFFF";
            break;
    }

    return (
        <>
            <Grid item xs={12}
                  className={"progress-bar"}
                  sx={{
                      width: "60vw",
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
        </>
    )
}

export default Slidebar;