import React from "react";
import {Grid, Typography} from "@mui/material";

const PersonalProject = () => {
    return (
        <Grid container sx={{padding: "50px"}} gap={8}>
            <Grid container item direction={"row"} xs={12} sx={{height: "25%"}}>
                <Grid item xs={'auto'}>
                    <Typography fontSize={"6rem"}>Personal Project</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography>Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar
                        eget.
                        Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                        auctor
                        enim. Elit massa orci nullam cras tristique nunc phasellus blandit.</Typography>
                </Grid>
            </Grid>

            <Grid container item justifyContent={"center"} alignItems={"center"} gap={16}>
                {/*DIMOVR*/}
                <Grid item container xs={'auto'} direction={"column"} justifyContent={"center"} alignItems={"center"}
                      gap={2}>
                    <Grid item container xs={'auto'} position="relative">
                        <Grid item xs={'auto'}>
                            <img src={"assets/background/kda.png"} alt={""}
                                 style={{width: "30vw", borderRadius: "3rem"}}/>
                        </Grid>
                        <Grid item xs={'auto'} sx={{
                            position: "absolute",
                            height: "100%",
                            top: "-20%",
                            left: "-5%"
                        }}>
                            <img src={"assets/avatar/DimoVR.png"} alt={""}
                                 style={{width: "24vw", borderRadius: "3rem"}}/>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={'auto'}>
                            <Typography fontSize={"0.5rem"}>
                                UNITY - BLENDER - VUEJS - SPRING BOOT - POSTGRESQL - FIGMA
                            </Typography>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Typography fontSize={"1.2rem"}>
                                DimoVR : An VR Classroom
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/*SASIA*/}
                <Grid item container xs={'auto'} direction={"column"} justifyContent={"center"} alignItems={"center"}
                      gap={2}>
                    <Grid item container xs={'auto'}
                          position="relative"
                          sx={{width: "28vw", height: "19vw", borderRadius: "3rem", backgroundColor: "#FFDCC7"}}
                    >
                        <Grid item xs={'auto'} sx={{
                            position: "absolute",
                            height: "100%",
                            top: "-10%",
                            left: "-25%"
                        }}>
                            <img src={"assets/avatar/flower.png"} alt={""}
                                 style={{width: "24vw", borderRadius: "3rem"}}/>
                        </Grid>
                        <img src={"assets/avatar/Sasia.png"} alt={""}
                             style={{
                                 borderRadius: "3rem",
                                 objectPosition: "right",
                                 width: "28vw",
                                 height: "19vw",
                                 objectFit: "contain"
                             }}
                        />

                    </Grid>
                    <Grid item container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={'auto'}>
                            <Typography fontSize={"0.5rem"}>
                                REACTJS - SPRING BOOT - DEVOPS - POSTGRESQL - FIGMA
                            </Typography>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Typography fontSize={"1.2rem"}>
                                Sasia : MarketPlace
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default PersonalProject;