import React from "react";
import {Grid} from "@mui/material";
import Home from "Components/SubPage/Home";
import AboutMe from "Components/SubPage/AboutMe";
import Education from "Components/SubPage/Education";
import Experience from "Components/SubPage/Experience";
import PersonalProject from "Components/SubPage/PersonalProject";
import Footer from "../../Components/SubPage/Footer";


const App = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Home/>
            </Grid>
            <Grid item xs={12}>
                <AboutMe/>
            </Grid>
            <Education/>
            <Grid item xs={12} justifyContent={"center"} alignItems={"center"}>
                <Experience/>
            </Grid>
            <Grid item xs={12}>
                <PersonalProject/>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    );
}

export default App;