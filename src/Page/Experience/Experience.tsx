import React from "react";
import {Grid, Typography} from "@mui/material";
import ExperienceCard from "../../Components/Cards/ExperienceCard";

const Experience = () => {
    return (
        <Grid container gap={20}>
            <Grid container item xs={12}>
                <Grid item xs={'auto'}>
                    <Typography fontSize={"6rem"}>Experience</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography>Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar
                        eget.
                        Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                        auctor
                        enim. Elit massa orci nullam cras tristique nunc phasellus blandit.</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} gap={50} justifyContent={"center"} alignItems={"center"}>
                <ExperienceCard
                    deg={"10"}
                    title={"Back-End Developer"}
                    description={"Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit."}
                />
                <ExperienceCard
                    deg={"-10"}
                    title={"Java Developer"}
                    description={"Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit."}
                />
                <ExperienceCard
                    deg={"13"}
                    title={"Student Tutor"}
                    description={"Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit."}
                />
                t
            </Grid>
        </Grid>
    )
}

export default Experience;