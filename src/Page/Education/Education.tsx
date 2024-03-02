import React from "react";
import {Grid, Typography} from "@mui/material";
import EducationProfile from "Components/Cards/EducationProfile/EducationProfile";


const Education = () => {
    return (
        <>
            <Grid item sx={{position: "absolute", zIndex: "-1"}}>
                <img src={"assets/snake/snake-1.svg"} alt={""}/>
            </Grid>
            <Grid container sx={{height: "100vh", padding: "50px"}} gap={8}>

                <Grid container item xs={12} sx={{height: "25%"}}>
                    <Grid item xs={12}>
                        <Typography fontSize={"6rem"}>Education</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography fontSize={"0.8rem"}>Lorem ipsum dolor sit amet consectetur. Convallis et sed at
                            commodo
                            nulla pulvinar
                            eget.
                            Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                            auctor
                            enim. Elit massa orci nullam cras tristique nunc phasellus blandit.</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} gap={4} justifyContent={"center"} alignItems={"center"}
                      sx={{height: "75%"}}>
                    <Grid item container gap={20} xs={12} justifyContent={"center"} alignItems={"center"}
                    >
                        <Grid item container xs={4}
                              gap={5}
                              sx={{
                                  padding: "3rem",
                                  paddingLeft: "3rem",
                                  paddingRight: "3rem",
                                  borderRadius: "3.5rem",
                                  border: "0.5px solid #e5e7ff",
                                  background: "radial-gradient(50% 50% at 50% 50%, rgba(209, 216, 255, 0.20) 0%, rgba(224, 229, 255, 0.20) 100%)",
                                  backdropFilter: "blur(12.699999809265137px)"
                              }}
                        >

                            <Grid item xs={12}>
                                <Typography fontSize={"2rem"}>Lycee W.A Mozart</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography fontSize={"0.8rem"}> Lorem ipsum dolor sit amet consectetur. Convallis et
                                    sed at
                                    commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum integer.
                                    Id
                                    mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique nunc
                                    phasellus blandit. </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <EducationProfile/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={8}
                          sx={{backgroundColor: "#D2D8FC", borderRadius: "3.5rem", padding: "0.2rem"}}>
                        <Grid item xs={'auto'}
                              sx={{backgroundColor: "#8D95FF", borderRadius: "3.5rem", padding: "0.3rem"}}> </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>

    );
}

export default Education;