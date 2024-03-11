import React, {useState} from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import EducationProfile from "Components/SubPage/Education/Components/EducationProfile/EducationProfile";
import {useMotionValueEvent, useScroll} from "framer-motion"
import EducationInfo from "./Components/EducationInfo";
import Slidebar from "./Components/Slidebar";
import theme from "../../../theme";


const Education = () => {
    const [progressBarLength, setProgressBarLength] = useState<number>(0);
    const [imageNumber, setImageNumber] = useState<number>(1);
    const ref = React.useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["100vh end", "end 100%"],
    });
    const progressBar = document.querySelector('#root')
    const [hookedYPosition, setHookedYPosition] = React.useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // @ts-ignore
        setHookedYPosition(latest * (progressBar.offsetWidth * 0.6));
        // @ts-ignore
        setProgressBarLength(progressBar.offsetWidth * 0.6);
        setImageNumber(hookedYPosition > progressBarLength * 0.75 ? 3 : (hookedYPosition > progressBarLength * 0.25 ? 2 : 1));
    })

    const isScreenSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid item container xs={12}
              ref={ref}
              sx={{height: "400vw", marginTop: "4rem", marginBottom: "4rem"}}
        >
            <Grid item container xs={12} className={"sticky-element"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                      position: "sticky",
                      height: "100vh",
                      top: "-1px",
                      zIndex: "-1",
                      backgroundImage: "url(assets/my-noise.png)",
                  }}
            >
                <Grid item sx={{position: "absolute", zIndex: "-1", left: "0%"}}>
                    <img src={"assets/snake/snake-1.svg"} alt={""}/>
                </Grid>
                <Grid container item xs={11}>
                    <Grid container item xs={12}
                          alignItems={"center"}
                          sx={{height: "100%", padding: "10px"}}
                          gap={2}
                    >

                        <Grid item container xs={12}
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={6}
                              sx={{height: "auto"}}
                              ref={ref}
                        >
                            <Grid item container justifyContent={"center"} gap={6} alignItems={"flex-end"}>
                                <Grid item container md={6} sm={11} xs={11} justifyContent={"center"}
                                      alignItems={"center"}>
                                    <Grid item xs={'auto'}>
                                        <Typography fontFamily={"Bright"}
                                                    color={imageNumber === 1 ? "#5D68FF" : (imageNumber === 2 ? "#FF5D5D" : "#0F1727")}
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
                                            Education.
                                        </Typography>
                                    </Grid>
                                    {isScreenSmallerThanMD &&
                                        <>
                                        </>
                                    }
                                    {!isScreenSmallerThanMD &&
                                        <EducationInfo imageNumber={imageNumber}/>
                                    }
                                </Grid>
                                <Grid item xs={'auto'}>
                                    <EducationProfile imageNumber={imageNumber}/>
                                </Grid>
                            </Grid>

                            <Grid item container xs={12} justifyContent={"center"} alignItems={"center"}>
                                <Slidebar first={progressBarLength * 0.25}
                                          second={progressBarLength * 0.75}
                                          length={progressBarLength}
                                          hookedYPosition={hookedYPosition}
                                          imageNumber={imageNumber}/>
                            </Grid>

                        </Grid>
                        {isScreenSmallerThanMD &&
                            <EducationInfo imageNumber={imageNumber}/>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default Education;