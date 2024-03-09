import React from "react";
import {Grid, useMediaQuery, useTheme} from "@mui/material";
import AboutMePicture from "Components/Cards/AboutMePicture";
import AboutMeInfo from "Components/Cards/AboutMeInfo";
import AboutMeBackground from "Components/Background/AboutMeBackground";

const AboutMe = () => {
    const theme = useTheme()
    const isScreenGreaterThaMD = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <AboutMeBackground/>
            <Grid container justifyContent={"center"} alignItems={"center"} sx={{height: "100vh"}} gap={8}>
                {isScreenGreaterThaMD &&
                    <Grid item container position="relative" xs={'auto'}>
                        <AboutMePicture/>
                    </Grid>
                }
                <Grid item container md={6} sm={10} lg={5} xs={10}
                      gap={5}
                      sx={{
                          height: "80%",
                          padding: "1.5rem",
                          paddingLeft: "3rem",
                          paddingRight: "3rem",
                          borderRadius: "3rem",
                          border: "2px solid #e5e7ff",
                          background: "radial-gradient(50% 50% at 50% 50%, rgba(180, 180, 180, 0.20) 0%, rgba(255, 255, 255, 0.09) 100%)",
                          backdropFilter: "blur(9.949999809265137px)"
                      }}
                >
                    <AboutMeInfo/>
                </Grid>
            </Grid>
        </>
    );
}

export default AboutMe;