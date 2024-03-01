import React from "react";
import {Grid, Typography} from "@mui/material";
import Planet from "Components/Background/Planet";
import Meteor from "Components/Background/Meteor";
import Stars from "Components/Background/Stars";
import {getSvgPath} from "figma-squircle";
import {useMousePosition} from "Hook/useMousePosition";
import Filter from "Components/Background/Filter/Filter";


const svgPath = getSvgPath({
    width: 2060,
    height: 2060,
    cornerRadius: 80,
    cornerSmoothing: 1,
    preserveSmoothing: true,
})


const HomeBanner = () => {
    const position = useMousePosition();

    return (

        <Grid container sx={{
            backgroundColor: "#000018",
            borderRadius: "1.625rem",
            height: "100%"
        }}>

            <Grid item sx={{position: "absolute", bottom: "8%", left: "8%"}}>
                <Typography fontWeight={"bold"} color={"white"} fontSize={"3rem"}>Hi, I’m Dinath. <br/>A Full-Stack
                    Developper</Typography>
                <Typography color={"white"} fontSize={"1rem"}>Welcome to my DinahVerse</Typography>
            </Grid>
            <svg v-fill='none' xmlns='http://www.w3.org/2000/svg' style={{width: "100%"}}>
                npm <Planet x={(-position.x / 60) - 1000} y={(position.y / 80) - 1200} sizex={1} sizey={2000}/>
                <Filter x={(position.x / 60) - 1100} y={(position.y / 80) - 1100} sizex={1} sizey={2000}/>
                <Meteor x={(-position.x / 200) - 1000} y={(-position.y / 200) - 1200} sizex={1} sizey={1600}/>
                <Stars x={(-position.x / 100) + 250} y={(position.y / 60)} sizex={300} sizey={500}/>
                <Planet x={(position.x / 40) + 600} y={(position.y / 60) - 50} sizex={100} sizey={800}/>
                <Filter x={(position.x / 20) + 500} y={(position.y / 60) - 50} sizex={100} sizey={800}/>
                <Meteor x={(position.x / 10) + 100} y={(position.y / 30) - 80} sizex={100} sizey={400}/>
                <Meteor x={(-position.x / 15) - 1900} y={(position.y / 30) - 400} sizex={100} sizey={3000}/>
            </svg>
        </Grid>
    );
}

export default HomeBanner;