import React from "react";
import {Button, Grid} from "@mui/material";
import DinAvatar from "../../Components/Navbar/DinAvatar/DinAvatar";

const Navbar = () => {
    return (
        <Grid container justifyContent="space-between" alignItems={"center"}>
            <Grid item xs={"auto"}>
                <DinAvatar/>
            </Grid>
            <Grid item container xs={"auto"} gap={2}>
                <Grid item xs={"auto"}>
                    <Button variant="contained">Contained</Button>
                </Grid>
                <Grid item xs={"auto"}>
                    <Button variant="contained">Contained</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Navbar;