import React from "react";
import {Grid} from "@mui/material";
import HomeBanner from "Components/SubPage/Home/Components/HomeBanner";
import useStyles from "./Home.styles";

const Home = () => {
    const {classes} = useStyles();

    return (
        <Grid container className={classes.home}
              justifyContent={"center"}
              alignItems="stretch"
              direction={"column"}
        >
            <Grid item xs>
                <HomeBanner/>
            </Grid>
        </Grid>
    );
}

export default Home;