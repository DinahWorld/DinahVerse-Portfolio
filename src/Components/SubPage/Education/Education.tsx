import React, {useState} from "react";
import {Grid, Typography} from "@mui/material";
import EducationProfile from "Components/SubPage/Education/Components/EducationProfile/EducationProfile";
import {useMotionValueEvent, useScroll} from "framer-motion"
import EducationInfo from "./Components/EducationInfo";
import Slidebar from "./Components/Slidebar";


const Education = () => {
    const [progressBarLength, setProgressBarLength] = useState<number>(0);
    const ref = React.useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["300vh end", "end 400vw"],
    });
    const progressBar = document.querySelector('#root')


    const [hookedYPosition, setHookedYPosition] = React.useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        // @ts-ignore
        setHookedYPosition(latest * (progressBar.offsetWidth * 0.6));
        // @ts-ignore
        setProgressBarLength(progressBar.offsetWidth * 0.6);
    })


    return (
        <Grid item container xs={12} sx={{height: "400vh"}}>

            <Grid item container xs={12} className={"sticky-element"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                      position: "sticky",
                      height: "100vh",
                      top: "-1px",
                      backgroundImage: "url(assets/my-noise.png)",
                  }}
            >
                <Grid item sx={{position: "absolute", zIndex: "-1", left: "0%"}}>
                    <img src={"assets/snake/snake-1.svg"} alt={""}/>
                </Grid>
                <Grid container item xs={11}

                >
                    <Grid container item xs={12}
                          alignItems={"center"}
                          sx={{height: "100%", padding: "10px"}}
                    >

                        <Grid item container xs={12}
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={6}
                              sx={{height: "auto"}}
                        >
                            <Grid item container justifyContent={"center"} gap={6} alignItems={"center"}>
                                <Grid item container
                                      md={6} sm={10} xs={10}
                                      justifyContent={"center"}
                                      alignItems={"center"}
                                >
                                    <Grid item xs={12}>
                                        <Typography fontWeight={"bold"}
                                                    sx={{
                                                        fontSize: {
                                                            xs: "3.2rem",
                                                            sm: "5rem",
                                                            md: "5.6rem",
                                                            lg: "6rem",
                                                            xl: "6rem"
                                                        }
                                                    }}
                                        >
                                            Education
                                        </Typography>
                                    </Grid>
                                    <EducationInfo
                                        imageNumber={hookedYPosition > progressBarLength * 0.75 ? 3 : (hookedYPosition > progressBarLength * 0.25 ? 2 : 1)}/>
                                </Grid>
                                <Grid item xs={'auto'}>
                                    <EducationProfile
                                        imageNumber={hookedYPosition > progressBarLength * 0.75 ? 3 : (hookedYPosition > progressBarLength * 0.25 ? 2 : 1)}/>
                                </Grid>
                            </Grid>

                            <Grid item container xs={12} justifyContent={"center"} alignItems={"center"}>
                                <Grid item container xs={'auto'}>
                                    <Slidebar
                                        first={progressBarLength * 0.25}
                                        second={progressBarLength * 0.75}
                                        length={progressBarLength}
                                        hookedYPosition={hookedYPosition}
                                        imageNumber={hookedYPosition > progressBarLength * 0.75 ? 3 : (hookedYPosition > progressBarLength * 0.25 ? 2 : 1)}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default Education;