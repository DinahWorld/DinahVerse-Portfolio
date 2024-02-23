import React from "react";
import {Grid} from "@mui/material";
import Home from "Page/Home/Home";

const App = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Home/>
            </Grid>

        </Grid>
    );
}

export default App;