import React from "react";
import {Grid, Typography} from "@mui/material";
import DimoVR from "./Components/DimoVR";
import Sasia from "./Components/Sasia";
import ProjectCard from "./Components/ProjectCard";

const PersonalProject = () => {

    return (

        <Grid container gap={5} sx={{marginTop: "10rem"}}>
            <Grid container justifyContent={"center"}>
                <Grid container item xs={11}
                      justifyContent={"center"}
                      alignItems={"center"}
                >
                    <Grid item container
                          xs={12}
                          justifyContent={"center"}
                          alignItems={"center"}
                          columnGap={{xs: 2, sm: 2, md: 4, lg: 16}}
                          rowGap={8}
                    >
                        <Grid item container
                              xs={12}
                              alignItems={"flex-end"}
                        >
                            <Grid item xs>
                                <Typography color={"#4A42A9"}
                                            lineHeight={1}
                                            fontFamily={"Bright"}
                                            sx={{
                                                fontSize: {
                                                    xs: "4rem",
                                                    sm: "5rem",
                                                    md: "6rem",
                                                    lg: "6rem",
                                                    xl: "6rem"
                                                }
                                            }}
                                >
                                    Personal <br/> Project
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography fontSize={{xs: "0.6rem", sm: "0.8rem", md: "0.8rem"}}
                                            color={"#4A42A9"}
                                >
                                    Dimovr, an ambitious school project, allows me to hone my skills in leadership
                                    and
                                    project management. Alongside this, I'm passionately pursuing Sasia, a personal
                                    project that lets me explore full-stack development and develop my abilities in
                                    back-end, front-end, design, and DevOps.
                                </Typography>
                            </Grid>
                        </Grid>
                        <DimoVR/>
                        <Sasia/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item
                  xs={12}
                  justifyContent={"center"}
                  alignItems={"center"}
            >
                <Grid container item
                      xs={12}
                      justifyContent={"center"}
                      alignItems={"center"}
                      columnGap={10}
                      rowGap={4}

                >
                    <Grid item xs={'auto'}>
                        <Typography fontFamily={"Bright"}
                                    fontSize={{xs: "2rem", sm: "2rem", md: "3rem"}}>
                            Other Projects
                        </Typography>
                    </Grid>

                    <Grid container item
                          xs={12}
                          justifyContent={"center"}
                          alignItems={"center"}
                          columnGap={10}
                          rowGap={4}
                    >

                        <ProjectCard stack={"REACTJS - MUI - FIGMA"}
                                     title={"DinahWorld : My First Portfolio"}
                                     img={"assets/projects/dinahworld.png"}
                                     github={"assets/stack/dinahworld.svg"}
                                     number={0}
                                     url={"https://dinahworld.github.io/DinahWorld-Portfolio/"}
                        />

                        <ProjectCard stack={"VUEJS - C# - POSTGRESQL - FIGMA"}
                                     title={"Epic Road Trip"}
                                     img={"assets/projects/epic_road_trip.png"}
                                     github={"assets/stack/epic.svg"}
                                     number={1}
                                     url={"https://github.com/DinahWorld/Epic-Road-Trip"}
                        />

                        <ProjectCard stack={"Javascript - Canvas"}
                                     title={"University Fighter VIII"}
                                     img={"assets/projects/uf8.png"}
                                     github={"assets/stack/uf8.svg"}
                                     number={0}
                                     url={"https://github.com/DinahWorld/University-Fighter-VIII"}
                        />

                        <ProjectCard stack={"Java - JavaFX"}
                                     title={"2048"}
                                     img={"assets/projects/2048.png"}
                                     github={"assets/stack/2048.svg"}
                                     number={1}
                                     url={"https://github.com/DinahWorld/2048-p8"}
                        />

                        <ProjectCard stack={"Python - Django - BeautifulSoup - Figma"}
                                     title={"DinaPriceScraping"}
                                     img={"assets/projects/dinapricescraper.png"}
                                     github={"assets/stack/price.svg"}
                                     number={0}
                                     url={"https://github.com/DinahWorld/DinaPriceScraping-p8"}
                        />

                        <ProjectCard stack={"Java - Android Studio"}
                                     title={"DinaTouch"}
                                     img={"assets/projects/dinatouch.png"}
                                     github={"assets/stack/touch.svg"}
                                     number={1}
                                     url={"https://github.com/DinahWorld/DinaTouch-p8"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PersonalProject;