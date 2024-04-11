import React from "react";
import {Grid} from "@mui/material";
import HomeBanner from "Components/SubPage/Home/Components/HomeBanner";

const Home = () => {

    return (
        <Grid container
              justifyContent={"center"}
              alignItems="stretch"
              direction={"column"}
              sx={{
                  height: "100vh",
                  padding: {xs: "0rem", sm: "0rem", md: "1rem", lg: "1rem", xl: "1rem"}
              }}
        >
            <Grid item xs>
                <HomeBanner/>
            </Grid>
        </Grid>
    );
}

export default Home;