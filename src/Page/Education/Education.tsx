import React, {useEffect, useRef, useState} from "react";
import {Grid, Typography} from "@mui/material";
import EducationProfile from "Components/Cards/EducationProfile/EducationProfile";


const Education = () => {
    const [width, setWidth] = useState<number>(0);
    const [progressBarMiddle, setProgressBarMiddle] = useState<number>(0);
    const [height, setHeight] = useState<number>(250);
    const scrollYRef = useRef<number>(0);
    const progressBar = document.querySelector('.progress-bar')

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const stickyElements = document.querySelector('.sticky-element');
        const progressBar = document.querySelector('.progress-bar')
        const body = document.querySelector('.about-me')
        const elementCSSTop = parseInt(
            window.getComputedStyle(stickyElements as Element, null)
                .getPropertyValue('top')
        );

        // @ts-ignore
        const progressWidth = progressBar.offsetWidth;
        // @ts-ignore
        setProgressBarMiddle(progressWidth / 2);
        setHeight(progressWidth)
        // @ts-ignore
        const isSticky = stickyElements.getBoundingClientRect().top === elementCSSTop;
        console.log(isSticky)


        if (isSticky) {
            // @ts-ignore
            let step = 8;

            // @ts-ignore
            const scrollDirection = scrollY > scrollYRef.current ? 'down' : 'up';
            setWidth(prevWidth => {
                let newWidth = prevWidth;
                if (scrollDirection === 'down') {
                    // @ts-ignore
                    newWidth = Math.min(progressWidth, prevWidth + step);
                } else if (scrollDirection === 'up') {
                    newWidth = Math.max(0, prevWidth - step);
                }

                return newWidth;
            });
            scrollYRef.current = scrollY;
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Grid item xs={12} sx={{height: "200vh"}}>
            <Grid item xs={12} className={"sticky-element"} sx={{
                position: "sticky",
                top: "-1px",
                backgroundImage: "url(assets/my-noise.png)",
            }}>
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
                        <Grid item container gap={20} xs={12} justifyContent={"center"} alignItems={"center"}>
                            <Grid item container xs={8} md={4}
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
                                    <Typography fontSize={"2rem"}>Lycée W.A Mozart</Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography fontSize={"0.8rem"}>
                                        Lorem ipsum dolor sit amet consectetur. Convallis
                                        et
                                        sed at
                                        commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum
                                        integer.
                                        Id
                                        mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique
                                        nunc
                                        phasellus blandit.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <EducationProfile
                                    imageNumber={width > progressBarMiddle ? 3 : (width > progressBarMiddle / 2 ? 2 : 1)}/>
                            </Grid>
                        </Grid>
                        <Grid item container xs={8}
                              sx={{backgroundColor: "#D2D8FC", borderRadius: "3.5rem", padding: "0.2rem"}}>
                            <Grid item xs={12}
                                  className={"progress-bar"}
                                  sx={{backgroundColor: "#8D95FF", borderRadius: "3.5rem", padding: "0.3rem"}}>
                                <div style={{
                                    backgroundColor: 'blue',
                                    height: '10px',
                                    width: "10px",
                                    borderRadius: "2em",
                                    position: "relative",
                                    left: `${width}px`
                                }}/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default Education;