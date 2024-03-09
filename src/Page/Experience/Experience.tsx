import React from "react";
import {Grid, Typography} from "@mui/material";
import ExperienceCard from "../../Components/Cards/ExperienceCard";

const Experience = () => {
    return (
        <Grid container gap={20}>
            <Grid item sx={{position: "absolute", zIndex: "-1"}} xs={12}>
                <img src={"assets/snake/snake-2.svg"} alt={""} style={{width: "100%"}}/>
            </Grid>
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
            <Grid container item xs={12} gap={26} justifyContent={"center"} alignItems={"center"}>
                <ExperienceCard
                    job={1}
                    url={"assets/experience/bnp.png"}
                    deg={"10"}
                    title={"Back-End Java Developer"}
                    description={"Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit."}
                />
                <ExperienceCard
                    job={2}
                    url={"assets/experience/chart.png"}
                    deg={"-10"}
                    title={"Java Developer"}
                    description={"Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit."}
                />
                <ExperienceCard
                    job={3}
                    url={"assets/experience/p8.png"}
                    deg={"13"}
                    title={"Student Tutor"}
                    description={"Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique nunc phasellus blandit."}
                />
            </Grid>
        </Grid>
    )
}

export default Experience;