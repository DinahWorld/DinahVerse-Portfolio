import React from "react";
import {Grid, Typography} from "@mui/material";

const PersonalProject = () => {
    return (
        <Grid container sx={{height: "100vh", padding: "50px"}} gap={8}>
            <Grid container item direction={"row"} xs={12} sx={{height: "25%"}}>
                <Grid item xs={'auto'}>
                    <Typography fontSize={"6rem"}>Personal Project</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography>Lorem ipsum dolor sit amet consectetur. Convallis et sed at commodo nulla pulvinar
                        eget.
                        Varius consequat interdum platea lacus dictum integer. Id mauris duis parturient vitae
                        auctor
                        enim. Elit massa orci nullam cras tristique nunc phasellus blandit.</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PersonalProject;