import React, {useState} from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import EducationProfile from "Components/SubPage/Education/Components/EducationProfile/EducationProfile";
import {useMotionValueEvent, useScroll} from "framer-motion"
import EducationInfo from "./Components/EducationInfo";
import Slidebar from "./Components/Slidebar";
import theme from "../../../theme";


const Education = () => {
    const progressBar = document.querySelector('#root');
    // @ts-ignore
    const [progressBarLength, setProgressBarLength] = useState<number>(progressBar.offsetWidth * 0.6);
    const [imageNumber, setImageNumber] = useState<number>(1);
    const ref = React.useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["100vh end", "end 100%"],
    });
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
              sx={{
                  minHeight: {xs: "400vw", sm: "400vw", md: "200vw"},
                  marginTop: "4rem",
                  marginBottom: "4rem",
                  zIndex: "-3"
              }}
        >
            <Grid item container xs={12} className={"sticky-element"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                      position: "sticky",
                      height: "100vh",
                      top: {xs: "0px", sm: "0rem", md: "-2rem", lg: "-3rem", xl: "-3rem"},
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
                          gap={{xs: 1, sm: 2, md: 2}}
                    >

                        <Grid item container xs={12}
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={{xs: 2, sm: 6, md: 6}}
                              sx={{height: "auto"}}
                              ref={ref}>
                            <Grid item container
                                  justifyContent={"center"}
                                  alignItems={"flex-end"}>
                                <Grid item container md={6} sm={11} xs={11} justifyContent={"center"}
                                      alignItems={"center"}>
                                    <Grid item xs={"auto"} sm={"auto"} md={12}>
                                        <Typography fontFamily={{xs: "Kotori Rose", sm: "Kotori Rose", md: "Bright"}}
                                                    fontWeight={{xs: "bold", sm: "bold", md: "normal"}}
                                                    textAlign={{xs: "center", sm: "center", md: "start"}}
                                                    lineHeight={1}
                                                    color={
                                                        imageNumber === 1 ? "#5D68FF" : (imageNumber === 2 ? "#FF5D5D" : "#0F1727")
                                                    }
                                                    sx={{
                                                        fontSize: {
                                                            xs: "4.2rem",
                                                            sm: "4.2rem",
                                                            md: "4.6rem",
                                                            lg: "5.5rem",
                                                            xl: "5.5rem"
                                                        }
                                                    }}
                                        >
                                            Education
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