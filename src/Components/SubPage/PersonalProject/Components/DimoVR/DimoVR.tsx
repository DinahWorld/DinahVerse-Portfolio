import React from "react";
import {Box, Grid, Typography} from "@mui/material";

const DimoVR = () => {
    return (
        <Grid item container xs={'auto'}
              justifyContent={"center"}
              alignItems={"center"}
              direction="column"
              gap={2}

        >
            <Grid item container xs={'auto'}
                  direction="column"
                  position="relative"

            >
                <Grid item xs={'auto'}>
                    <Box component={"img"} src={"assets/background/kda.png"} alt={""}
                         sx={{
                             width: {xs: "22rem", sm: "30rem", md: "40vw", lg: "40vw", xl: "36rem"},
                             height: {xs: "16rem", sm: "24rem", md: "24rem"},
                             borderRadius: "3rem"
                         }}/>
                </Grid>
                <Grid item xs={'auto'}
                      sx={{
                          position: "absolute",
                          height: "100%",
                          top: {xs: "-12%", sm: "-20%", md: "-20%"},
                          left: "-10%"
                      }}>
                    <Box component={"img"} src={"assets/avatar/DimoVR.png"} alt={""}
                         sx={{
                             zIndex: "1",
                             width: {xs: "20rem", sm: "32rem", md: "32rem"},
                             borderRadius: "3rem"
                         }}/>
                </Grid>
            </Grid>
            <Grid item container xs={'auto'}
                  direction="column"
                  justifyContent={"center"}
                  alignItems={"center"}
            >
                <Grid item xs={'auto'}>
                    <Typography fontSize={"0.6rem"}>
                        UNITY - BLENDER - VUEJS - SPRING BOOT - POSTGRESQL - FIGMA
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography fontSize={"1.2rem"}>
                        DimoVR : An VR Classroom
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DimoVR;