import React from "react";
import {Grid, Typography} from "@mui/material";
import Planet from "Components/Background/Planet";
import Meteor from "Components/Background/Meteor";
import Stars from "Components/Background/Stars";
import {useMousePosition} from "Hook/useMousePosition";
import Stack from "../../Components/Cards/Stack";

const AboutMe = () => {
    const position = useMousePosition();

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: "100vh"}} gap={8}>
            <Grid item container position="relative" xs={'auto'}>
                <Grid item>
                    <img src="assets/avatar/about_avatar.png" alt={""} style={{width: "25vw"}}/>
                </Grid>
                <Grid item sx={{
                    position: "absolute",
                    height: "100%",
                    width: "100%"
                }}>

                    <svg
                        v-fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{width: "100%", height: "100%"}}
                    >
                        <Planet x={(-position.x / 40) - 1500} y={(position.y / 40) + 700} sizex={2000} sizey={1500}/>
                        <Planet x={(position.x / 40) + 350} y={(position.y / 40) - 600} sizex={1500} sizey={1500}/>
                        <Stars x={(-position.x / 100) + 250} y={(position.y / 60) + 200} sizex={200} sizey={500}/>
                        <Meteor x={(-position.x / 20) - 600} y={(-position.y / 20) + 200} sizex={800} sizey={100}/>
                        <Meteor x={(position.x / 200) - 100} y={(-position.y / 200) + 1100} sizex={1700} sizey={100}/>
                        <Meteor x={(-position.x / 120) + 20} y={(-position.y / 120) + 300} sizex={2000} sizey={100}/>
                    </svg>
                </Grid>

            </Grid>
            <Grid item container xs={3.5}
                  gap={5}
                  sx={{
                      padding: "1.5rem",
                      paddingLeft: "3rem",
                      paddingRight: "3rem",
                      borderRadius: "3rem",
                      border: "2px solid #e5e7ff",
                      background: "radial-gradient(50% 50% at 50% 50%, rgba(180, 180, 180, 0.20) 0%, rgba(255, 255, 255, 0.09) 100%)",
                      backdropFilter: "blur(9.949999809265137px)"
                  }}
            >
                <Grid item xs={12}>
                    <Typography fontWeight={"bold"} fontSize={"1.8rem"}> Hi, I’m Dinath 👋🏾 </Typography>
                </Grid>
                <Grid container item xs={12} gap={2}>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.8rem"} color={"#"}>
                            Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget.
                            Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                            auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.8rem"}>
                            Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget.
                            Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                            auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} gap={2}>
                    <Grid item xs={12}>
                        <Typography fontSize={"1.2rem"}>
                            Stack
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} gap={1} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/spring_boot.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/java.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/react.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/vuejs.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/jira.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/docker.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/postgresql.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/jenkins.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/figma.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Stack img={"assets/stack/git.svg"}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} gap={2}>
                    <Grid item xs={12}>
                        <Typography fontSize={"1.2rem"}>
                            Stack
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.8rem"}>
                            Français - English - Tamil
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default AboutMe;