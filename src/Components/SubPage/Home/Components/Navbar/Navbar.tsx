import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import DinAvatar from "Components/Navbar/DinAvatar/DinAvatar";

const Navbar = () => {
    return (
        <Grid container justifyContent="space-between" alignItems={"center"}>
            <Grid item container xs={"auto"} gap={2} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={"auto"}>
                    <DinAvatar/>
                </Grid>
                <Grid item xs={"auto"}>
                    <Typography lineHeight={1}>
                        This Portfolio is 100% done by me <br/>
                        From Figma to Coding it
                    </Typography>
                </Grid>
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