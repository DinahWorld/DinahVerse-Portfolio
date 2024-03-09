import Planet from "../Planet";
import Stars from "../Stars";
import Meteor from "../Meteor";
import CustomStars from "../CustomStars/CustomStars";
import {Grid} from "@mui/material";
import React from "react";
import {useMousePosition} from "Hook/useMousePosition";

const AboutMeBackground = () => {
    const position = useMousePosition();

    return (
        <Grid item sx={{
            position: "absolute",
            height: "100%",
            width: "100%"
        }}>
            <svg
                fill="none"
                style={{width: "100%", height: "100%"}}
            >
                <Planet x={(position.x / 70) + 200} y={(position.y / 70) - 800} sizex={2000} sizey={1500}/>
                <Planet x={(position.x / 50) - 1300} y={(position.y / 50) - 100} sizex={2000} sizey={1500}/>
                <Stars x={(-position.x / 60) + 250} y={(position.y / 60) + 200} sizex={1000} sizey={500}/>
                <Meteor x={(position.x / 100) - 600} y={(-position.y / 100) + 60} sizex={800} sizey={100}/>
                <Meteor x={(-position.x / 120) - 100} y={(-position.y / 100) + 300} sizex={2000} sizey={100}/>
                <CustomStars x={(position.x / 15) - 100} y={(position.y / 20) - 300} sizex={3500} sizey={2000}/>
                <CustomStars x={(position.x / 20) - 100} y={(position.y / 20) - 1800} sizex={7000} sizey={2000}/>
                <CustomStars x={(-position.x / 20) - 8000} y={(position.y / 30) - 3000} sizex={9000} sizey={2000}/>

            </svg>
        </Grid>
    )
}

export default AboutMeBackground;