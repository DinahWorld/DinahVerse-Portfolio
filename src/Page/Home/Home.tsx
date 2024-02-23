import React from "react";
import {Grid} from "@mui/material";
import Navbar from "Containers/Navbar";
import HomeBanner from "Containers/HomeBanner";

const Home = () => {
    return (
        <Grid container sx={{height: "98vh", padding: "10px"}} justifyContent={"center"} alignItems="stretch"
              direction={"column"} gap={2}>
            <Grid item xs={'auto'} sx={{paddingLeft: "20px", paddingRight: "20px"}}>
                <Navbar/>
            </Grid>
            <Grid item xs>
                <HomeBanner/>
            </Grid>
        </Grid>
    );
}

export default Home;