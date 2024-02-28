import React from "react";
import {Grid, Typography} from "@mui/material";
import Planet from "../../Components/Background/Planet";
import Meteor from "../../Components/Background/Meteor";
import Stars from "../../Components/Background/Stars";
import {useMousePosition} from "../../Hook/useMousePosition";

const AboutMe = () => {
    const position = useMousePosition();

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: "100vh"}} gap={4}>
            <Grid item container sx={{
                width: "360px",
                height: "55%",
                backgroundSize: "cover",
                backgroundImage: "url('images/about_avatar.png')",
                mask: "url('images/about_avatar.png')"
            }}>

                <svg v-fill='none' xmlns='http://www.w3.org/2000/svg' style={{width: "100%"}}>
                    <Planet x={(-position.x / 40) - 1500} y={(position.y / 40) + 700} sizex={2000} sizey={1500}/>
                    <Planet x={(position.x / 40) + 350} y={(position.y / 40) - 600} sizex={1500} sizey={1500}/>
                    <Stars x={(-position.x / 100) + 250} y={(position.y / 60) + 200} sizex={200} sizey={500}/>
                    <Meteor x={(-position.x / 20) - 600} y={(-position.y / 20) + 200} sizex={800} sizey={100}/>
                    <Meteor x={(position.x / 200) - 100} y={(-position.y / 200) + 1100} sizex={1700} sizey={100}/>
                    <Meteor x={(-position.x / 120) + 20} y={(-position.y / 120) + 300} sizex={2000} sizey={100}/>

                </svg>
            </Grid>
            <Grid item container xs={4} sx={{backgroundColor: "blue", height: "50%"}}>
                <Typography> Lorem ipsum </Typography>
            </Grid>
        </Grid>
    );
}

export default AboutMe;