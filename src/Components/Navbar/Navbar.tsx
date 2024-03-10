import React from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import DinAvatar from "Components/Navbar/Components/DinAvatar/DinAvatar";
import CustomButton from "./Components/CustomButton";
import theme from "../../theme";

const Navbar = () => {
    const isScreenSmallerThaSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container justifyContent="space-between" alignItems={"center"}
              sx={{
                  padding: "1rem"
              }}>
            <Grid item container xs={"auto"} gap={2} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={"auto"}>
                    <DinAvatar/>
                </Grid>
                {!isScreenSmallerThaSM &&
                    <Grid item xs={"auto"}>
                        <Typography lineHeight={1}>
                            This Portfolio is 100% done by me <br/>
                            From Figma to Coding it
                        </Typography>
                    </Grid>
                }
            </Grid>
            <Grid item container xs={"auto"} gap={2}>
                <Grid item xs={"auto"}>
                    <CustomButton/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Navbar;