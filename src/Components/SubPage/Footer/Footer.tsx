import React from "react";
import {Box, Divider, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../../../theme";

const Footer = () => {
    const isScreenSmallerThanSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container sx={{marginTop: "8rem"}} justifyContent={"center"} alignItems={"center"}>
            <Grid item container xs={12}
                  sx={{
                      height: "100vh",
                      backgroundColor: "#000018",
                  }}
            >
                <Grid container xs={12} justifyContent={"center"} alignItems={"center"} columnGap={8}>
                    <Grid item container xs={'auto'} gap={1} direction={"column"}>
                        <Grid item container xs={'auto'} gap={1} direction={"column"}>
                            <Grid item container xs={'auto'}>
                                <Typography fontWeight={"bold"} fontSize={"2rem"} color={"white"} lineHeight={1.3}>
                                    LET’S TALK !
                                </Typography>
                                <Grid item xs={12}>
                                    <Divider sx={{bgcolor: "white", borderBottomWidth: 5}}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <Typography color={"white"} fontSize={"0.8rem"}>
                                    dinath.sh@outlook.fr
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={'auto'} gap={1}>
                            <Grid container alignItems={"center"} justifyContent={"center"}
                                  sx={{
                                      width: "2.4rem",
                                      height: "2.4rem",
                                      padding: "0.6rem",
                                      borderRadius: "0.8rem",
                                      backgroundColor: "white",
                                      transition: "transform 0.3s ease-in-out",
                                      "&:hover": {
                                          transform: "scale(1.2)",
                                      },
                                  }}
                            >
                                <Box component={"img"} src={"assets/stack/linkedin.svg"} style={{width: "100%"}}/>
                            </Grid>
                            <Grid container alignItems={"center"} justifyContent={"center"}
                                  sx={{
                                      width: "2.4rem",
                                      height: "2.4rem",
                                      padding: "0.6rem",
                                      borderRadius: "0.8rem",
                                      backgroundColor: "white",
                                      transition: "transform 0.3s ease-in-out",
                                      "&:hover": {
                                          transform: "scale(1.2)",
                                      },

                                  }}
                            >
                                <Box component={"img"} src={"assets/stack/github-dinath.svg"} style={{width: "100%"}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    {!isScreenSmallerThanSM &&
                        <Grid item container xs={'auto'}>
                            <Box component={"img"} src={"assets/avatar/Dinath.png"} style={{width: "100%"}}/>
                        </Grid>
                    }

                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;