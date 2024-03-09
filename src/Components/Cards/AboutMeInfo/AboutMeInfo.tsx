import {Grid, Typography} from "@mui/material";
import StackIcon from "../StackIcon";
import React from "react";

const AboutMeInfo = () => {
    return (
        <>
            <Grid container item xs={12}>
                <Grid item xs={12}>
                    <Typography fontWeight={"bold"} fontSize={"1.8rem"}>Hi, I’m Dinath 👋🏾</Typography>
                </Grid>
                <Grid container item xs={12} gap={2}>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.8rem"} color={"#"}>
                            Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget.
                            Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                            auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontSize={"0.8rem"}>
                            Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget.
                            Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                            auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm gap={2}>
                <Grid item xs={12}>
                    <Typography fontSize={"1.2rem"}>
                        Stack
                    </Typography>
                </Grid>
                <Grid container item xs={12} gap={1} justifyContent={"start"} alignItems={"center"}>
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
                        <StackIcon img={"assets/stack/jira.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/docker.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/postgresql.svg"}/>
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
                </Grid>
            </Grid>
            <Grid container item xs={12} gap={2}>
                <Grid item xs={12}>
                    <Typography fontSize={"1.2rem"}>
                        Languages
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={"0.8rem"}>
                        Français - English - Tamil
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutMeInfo;