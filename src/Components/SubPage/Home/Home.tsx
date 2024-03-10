import React from "react";
import {Grid} from "@mui/material";
import Navbar from "Components/Navbar";
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
            <Grid item xs={'auto'} className={classes.navbar}>
                <Navbar/>
            </Grid>
            <Grid item xs
                  sx={{
                      padding: {xs: "0rem", sm: "0rem", md: "1rem"},
                  }}
            >
                <HomeBanner/>
            </Grid>
        </Grid>
    );
}

export default Home;