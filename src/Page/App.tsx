import React from "react";
import {Grid} from "@mui/material";
import Home from "Page/Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education";

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
        </Grid>
    );
}

export default App;