import React from "react";
import {Grid, Typography} from "@mui/material";
import ExperienceCard from "../Experience/Component/ExperienceCard";

const Experience = () => {
    return (
        <Grid container item xs={12} justifyContent={"center"} alignItems={"center"}>

            <Grid container item gap={4} xs={11}>
                <Grid item sx={{position: "absolute", zIndex: "-1", left: "0%"}} xs={12}>
                    <img src={"assets/snake/snake-2.svg"} alt={""} style={{width: "100%"}}/>
                </Grid>
                <Grid container item xs={12} justifyContent={{xs: "center", sm: "start"}}>
                    <Grid item xs={'auto'}>
                        <Typography
                            fontFamily={"Bright"}
                            lineHeight={1}
                            color={"#bdb0eb"}
                            sx={{fontSize: {xs: "3.8rem", sm: "5rem", md: "6rem", lg: "6rem", xl: "6rem"}}}
                        >
                            Experience.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12} sm={12} md={6}>

                            <Typography fontSize={{xs: "0.6rem", sm: "0.8rem", md: "0.8rem"}}
                                        color={"#bdb0eb"}
                            >
                                I've gained practical software development experience through apprenticeships and
                                internships,
                                working on back-end and front-end projects in Java, JavaFX, and Spring Boot.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} gap={10} justifyContent={"center"} alignItems={"center"}>
                    <ExperienceCard
                        job={1}
                        url={"assets/experience/bnp.png"}
                        deg={10}
                        title={"Apprenticeship : Software Engineer"}
                        company={"BNP Paribas CIB"}
                        date={"2022/09 - Present"}
                        description={"" +
                            "- I am currently involved in a Big Data project, working on a monolithic application designed to process\n" +
                            "significant volumes of data for Business Analytics (BA).\n\n" +
                            "- My responsibilities encompass the implementation of new controllers and services, troubleshooting " +
                            "production issues, and optimizing a parser to reduce memory usage in the Java Virtual Machine (JVM).\n\n" +
                            "- Additionally, I have contributed to DevOps activities using Jenkins"
                        }
                    />
                    <ExperienceCard
                        job={2}
                        url={"assets/experience/chart.png"}
                        deg={-10}
                        company={"Laboratoire CHart"}
                        date={"2022/04 - 2022/07"}
                        title={"Internship : Software Engineer"}
                        description={"During my tenure as a Software Developer, I was immersed in Java development, specifically JavaFX.\n\n" +
                            "My primary responsibilities included crafting new user interface components using JavaFX, enhancing the user experience of existing applications, and optimizing software performance.\n\n" +
                            "This experience not only honed my Java and JavaFX skills but also exposed me to the broader spectrum of software development, user-centric design, and IoT implementation."
                        }
                    />
                    <ExperienceCard
                        job={3}
                        url={"assets/experience/p8.png"}
                        deg={13}
                        company={"Universite Paris VIII"}
                        date={"2021/09 - 2021/12"}
                        title={"Student Tutor : Computer Science"}
                        description={"During my role as a Student Tutor, I actively engaged in fostering students' comprehension of fundamental computer science concepts.\n" +
                            "This involved mentoring students to troubleshoot technical issues, providing valuable technical support for both hardware and software problems."}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Experience;