import React from "react";
import {Grid} from "@mui/material";
import Navbar from "Containers/Navbar";
import HomeBanner from "Containers/HomeBanner";
import useStyles from "./Home.styles";

const Home = () => {
    const {classes} = useStyles();

    return (
        <Grid container className={classes.home} justifyContent={"center"} alignItems="stretch"
              direction={"column"} gap={2}>
            <Grid item xs={'auto'} className={classes.navbar}>
                <Navbar/>
            </Grid>
            <Grid item xs>
                <HomeBanner/>
            </Grid>
        </Grid>
    );
}

export default Home;