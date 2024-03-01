import React from "react";
import {Grid, Slider, Typography} from "@mui/material";
import EducationProfile from "Components/Cards/EducationProfile/EducationProfile";


const Education = () => {
    return (
        <Grid container sx={{height: "100vh", padding: "50px"}} gap={8}>
            <Grid container item xs={12} sx={{height: "25%"}}>
                <Grid item xs={12}>
                    <Typography fontSize={"6rem"}>Education</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontSize={"0.8rem"}>Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo
                        nulla pulvinar
                        eget.
                        Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                        auctor
                        enim. Elit massa orci nullam cras tristique nunc phasellus blandit.</Typography>
                </Grid>
            </Grid>
            <Grid item container xs={12} gap={4} justifyContent={"center"} alignItems={"center"} sx={{height: "75%"}}>
                <Grid item container gap={20} xs={12} justifyContent={"center"} alignItems={"center"}
                >
                    <Grid item container xs={4}
                          gap={5}
                          sx={{
                              padding: "3rem",
                              paddingLeft: "3rem",
                              paddingRight: "3rem",
                              borderRadius: "3rem",
                              border: "2px solid #e5e7ff",
                              background: "radial-gradient(50% 50% at 50% 50%, rgba(180, 180, 180, 0.20) 0%, rgba(255, 255, 255, 0.09) 100%)",
                              backdropFilter: "blur(9.949999809265137px)"
                          }}
                    >

                        <Grid item xs={12}>
                            <Typography fontSize={"2rem"}>Lycee W.A Mozart</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography fontSize={"0.8rem"}> Lorem ipsum dolor sit amet consectetur. Convallis et sed at
                                commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum integer. Id
                                mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique nunc
                                phasellus blandit. </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <EducationProfile/>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default Education;