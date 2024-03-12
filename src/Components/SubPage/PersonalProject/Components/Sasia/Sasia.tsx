import React from "react";
import {Box, Grid, Typography} from "@mui/material";

const Sasia = () => {
    return (
        <Grid item container xs={'auto'}
              direction="column"
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              sx={{
                  zIndex: "-1"
              }}
        >
            <Grid item container xs={'auto'}
                  position="relative"
                  sx={{
                      width: {xs: "22rem", sm: "30rem", md: "40vw", lg: "40vw", xl: "36rem"},
                      height: {xs: "16rem", sm: "24rem", md: "24rem",},
                      borderRadius: "3rem",
                      backgroundColor: "#FFDCC7"
                  }}
            >
                <Grid item xs={'auto'}
                      sx={{
                          position: "absolute",
                          height: "100%",
                          top: "-10%",
                          left: {xs: "-16%", sm: "-20%", md: "-20%"},
                      }}>

                </Grid>
                <Box component={"img"} src={"assets/avatar/Sasia.png"} alt={""}
                     sx={{
                         borderRadius: "3rem",
                         objectPosition: "right",
                         width: {xs: "22rem", sm: "38rem", md: "100%", lg: "38rem"},
                         height: {xs: "16rem", sm: "24rem", md: "24rem", lg: "24rem"},
                         objectFit: "cover"
                     }}
                />
            </Grid>
            <Grid item container xs={12}

                  direction="column"
                  justifyContent={"center"}
                  alignItems={"center"}
            >

                <Grid item xs={'auto'}>
                    <Typography fontSize={"0.6rem"}>
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