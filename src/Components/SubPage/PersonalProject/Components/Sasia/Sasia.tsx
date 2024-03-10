import React from "react";
import {Box, Grid, Typography} from "@mui/material";

const Sasia = () => {
    return (
        <Grid item container xs={'auto'}
              direction="column"
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}

        >
            <Grid item container xs={'auto'}
                  position="relative"

                  sx={{
                      width: "26rem",
                      height: "16rem",
                      borderRadius: "3rem",
                      backgroundColor: "#FFDCC7"
                  }}
            >
                <Grid item xs={'auto'}
                      sx={{
                          position: "absolute",
                          height: "100%",
                          top: "-10%",
                          left: "-20%"
                      }}>
                    <Box component="img" src={"assets/avatar/flower.png"} alt={""}
                         sx={{
                             width: "21rem",
                             borderRadius: "3rem"
                         }}/>
                </Grid>
                <img src={"assets/avatar/Sasia.png"} alt={""}
                     style={{
                         borderRadius: "3rem",
                         objectPosition: "right",
                         width: "26rem",
                         height: "16rem",
                         objectFit: "contain"
                     }}
                />
            </Grid>
            <Grid item container xs={12}

                  direction="column"
                  justifyContent={"center"}
                  alignItems={"center"}
            >

                <Grid item xs={'auto'}>
                    <Typography fontSize={"0.5rem"}>
                        REACTJS - SPRING BOOT - DEVOPS - POSTGRESQL - FIGMA
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography fontSize={"1.2rem"}>
                        Sasia : MarketPlace
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Sasia;