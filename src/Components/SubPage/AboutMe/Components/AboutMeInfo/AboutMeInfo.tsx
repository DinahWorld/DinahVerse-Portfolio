import {Avatar, Grid, Typography, useMediaQuery} from "@mui/material";
import StackIcon from "../../../../StackIcon";
import React from "react";
import theme from "../../../../../theme";

const AboutMeInfo = () => {
    const isScreenLowerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Grid container item xs={12} gap={2}>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item xs={'auto'}>
                        <Typography fontWeight={"bold"} fontSize={"1.8rem"}>Hi, I’m Dinath 👋🏾</Typography>
                    </Grid>
                    {isScreenLowerThanMD &&
                        <Grid item xs={'auto'}>
                            <Avatar alt="Dinath Sunthararajah" src={"assets/avatar/avatar.png"}
                                    sx={{width: "50px", height: "50px"}}/>
                        </Grid>
                    }
                </Grid>
                <Grid container item xs={12} gap={2}>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.9rem"}>
                            <strong>I am Dinath Sunthararajah, a 22-year-old </strong>driven by an insatiable passion
                            for
                            technology and
                            innovation. Based in Paris, France, I have embraced a journey filled with challenges,
                            fueled
                            by a deep belief in the power of technological progress to transform the
                            world. <br/><br/>
                            <strong>Currently honing my skills and gaining valuable experience</strong>, I work as an
                            apprentice
                            back-end
                            developer at BNP Paribas CIB.
                            <br/><br/>
                            <strong>Starting from October 2024,</strong> I am embarking on a new chapter in my
                            professional journey
                            by
                            seeking a VIE (Volontariat International en Entreprise) opportunity. This program will
                            allow
                            me to broaden my horizons by immersing myself in a new culture and contributing to
                            meaningful projects.
                            <br/><br/>
                            <strong>Beyond the technological realm,</strong> I am an enthusiastic traveler, captivated
                            by the richness of
                            cultures and the beauty of Asian music.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm gap={2}>
                <Grid item xs={12}>
                    <Typography fontSize={"1.2rem"}
                                fontWeight={"bold"}
                    >
                        Skills
                    </Typography>
                </Grid>
                <Grid container item xs={12} gap={1} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/spring_boot.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/java.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/react.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/vuejs.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/postgresql.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/cassandra.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/spark.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/jira.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/docker.svg"}/>
                    </Grid>

                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/jenkins.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/figma.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/git.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/bash.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/unity.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/blender.svg"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} gap={1}>
                <Grid item xs={12}>
                    <Typography fontSize={"1.2rem"}
                                fontWeight={"bold"}
                    >
                        Languages
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={"0.9rem"}>
                        French - English - Tamil
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutMeInfo;