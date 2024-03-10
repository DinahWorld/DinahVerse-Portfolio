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
                             width: "26rem",
                             height: "16rem",
                             borderRadius: "3rem"
                         }}/>
                </Grid>
                <Grid item xs={'auto'}
                      sx={{
                          position: "absolute",
                          height: "100%",
                          top: "-20%",
                          left: "-5%"
                      }}>
                    <Box component={"img"} src={"assets/avatar/DimoVR.png"} alt={""}
                         style={{
                             width: "22rem",
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
                    <Typography fontSize={"0.5rem"}>
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