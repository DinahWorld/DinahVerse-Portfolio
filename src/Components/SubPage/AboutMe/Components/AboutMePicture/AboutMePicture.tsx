import {Grid, Typography} from "@mui/material";
import Planet from "Components/Background/Planet";
import Stars from "Components/Background/Stars";
import Meteor from "Components/Background/Meteor";
import ProfileDesc from "Components/SubPage/AboutMe/Components/ProfileDesc/ProfileDesc";
import React from "react";
import {useMousePosition} from "Hook/useMousePosition";

const AboutMePicture = () => {
    const position = useMousePosition();

    return (
        <>
            <Grid item xs={'auto'}>
                <img src="assets/avatar/about_avatar.png"
                     alt={""}
                     style={{
                         width: "38vw",
                         borderRadius: "3.5em",
                         height: "100%"
                     }}
                />
            </Grid>
            <Grid item sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                borderRadius: "3.5em"
            }}>
                <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{width: "100%", height: "100%"}}
                >
                    <Planet x={(-position.x / 40) - 2300} y={(position.y / 40) + 1300} sizex={3000} sizey={1500}/>
                    <Planet x={(position.x / 40) + 350} y={(position.y / 40) - 600} sizex={1500} sizey={1500}/>
                    <Stars x={(-position.x / 100) + 250} y={(position.y / 60) + 200} sizex={200} sizey={500}/>
                    <Meteor x={(-position.x / 20) - 600} y={(-position.y / 20) + 200} sizex={800} sizey={100}/>
                    <Meteor x={(position.x / 200) - 100} y={(-position.y / 200) + 1100} sizex={1700} sizey={100}/>
                    <Meteor x={(-position.x / 120) + 20} y={(-position.y / 120) + 300} sizex={2000} sizey={100}/>
                </svg>
            </Grid>
            <Grid item container gap={1} sx={{
                position: "absolute",
                bottom: 40,
                left: 30
            }}>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <Typography color={"white"}
                                    fontSize={"1.8rem"}
                                    fontWeight={"bold"}
                        >
                            SUNTHARARAJAH
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={"white"}
                                    fontSize={"1.6rem"}
                                    fontWeight={"bold"}
                        >
                            Dinath
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} gap={1.3}>
                    <ProfileDesc desc={"Spring Boot"}/>
                    <ProfileDesc desc={"ReactJS"}/>
                    <ProfileDesc desc={"Full Stack"}/>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutMePicture;