import React from "react";
import {Box, Divider, Grid, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Grid container sx={{marginTop: "8rem"}} justifyContent={"center"} alignItems={"center"}>
            <Grid item container xs={12}
                  sx={{
                      height: "60vh",
                      backgroundColor: "#000018"
                  }}
            >
                <Grid container xs={12} justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Grid item container xs={'auto'} gap={2} direction={"column"}>
                        <Grid item container xs={'auto'} gap={1} direction={"column"}>
                            <Grid item container xs={'auto'}>
                                <Typography fontWeight={"bold"} fontSize={"2.8rem"} color={"white"} lineHeight={1.3}>
                                    Contact Me
                                </Typography>
                                <Grid item xs={12}>
                                    <Divider sx={{bgcolor: "white", borderBottomWidth: 9}}/>
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
                                      width: "2.5rem",
                                      height: "2.5rem",
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
                                      width: "2.5rem",
                                      height: "2.5rem",
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
                    <Grid item container xs={'auto'}>
                        <Box component={"img"} src={"assets/avatar/Dinath.png"} style={{width: "100%"}}/>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;