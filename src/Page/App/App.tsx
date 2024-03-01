import React from "react";
import {Grid} from "@mui/material";
import Home from "Page/Home";
import AboutMe from "Page/AboutMe";
import Education from "Page/Education";
import Experience from "Page/Experience";
import PersonalProject from "Page/PersonalProject";

const App = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Home/>
            </Grid>
            <Grid item xs={12}>
                <AboutMe/>
            </Grid>
            <Grid item xs={12}>
                <Education/>
            </Grid>
            <Grid item xs={12}>
                <Experience/>
            </Grid>
            <Grid item xs={12}>
                <PersonalProject/>
            </Grid>
        </Grid>
    );
}

export default App;