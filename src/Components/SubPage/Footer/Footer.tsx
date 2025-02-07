import React, { useMemo } from "react";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import theme from "../../../theme";
import { motion } from "framer-motion";
import CustomStars from "../../Background/CustomStars/CustomStars";
import Stars from "../../Background/Stars";
import Meteor from "../../Background/Meteor";
import Filter from "../../Background/Filter";
import { useMousePosition } from "../../../Hook/useMousePosition";

const Footer = () => {
    const isScreenSmallerThanSM = useMediaQuery(theme.breakpoints.down('sm'));
    const position = useMousePosition();

    const memoizedValues = useMemo(() => {
        const x = position.x;
        const y = position.y;

        return {
            customStars1: { x: (x / 15) - 1400, y: (y / 20) - 300, sizex: 3500, sizey: 2000 },
            customStars2: { x: (x / 20) - 900, y: (y / 20) - 1800, sizex: 7000, sizey: 2000 },
            customStars3: { x: (-x / 20) - 6500, y: (y / 30) - 1500, sizex: 9000, sizey: 2000 },
            stars: { x: (-x / 100) + 250, y: (y / 60), sizex: 300, sizey: 500 },
            filter1: { x: (x / 60) - 1100, y: (y / 80) - 1100, sizex: 100, sizey: 2000 },
            filter2: { x: (x / 20) + 500, y: (y / 60) - 50, sizex: 100, sizey: 800 },
            meteor: { x: (-x / 8) - 1900, y: (y / 8) - 400, sizex: 100, sizey: 3000 },
        };
    }, [position]);

    return (
        <Grid container sx={{ marginTop: "8rem" }} justifyContent={"center"} alignItems={"center"}>
            <Grid item container xs={12} sx={{ height: "100vh", backgroundColor: "#000018" }}>
                <Grid container xs={12} justifyContent={"center"} alignItems={"center"} columnGap={8} sx={{ zIndex: "1" }}>
                    <Grid item container xs={'auto'} gap={1} direction={"column"}>
                        <Grid item container xs={'auto'} gap={1} direction={"column"}>
                            <Grid item container xs={'auto'}>
                                <Typography fontWeight={"bold"} fontSize={"2rem"} color={"white"} lineHeight={1.3}>
                                    LET’S TALK !
                                </Typography>
                                <Grid item xs={12}>
                                    <Divider sx={{ bgcolor: "white", borderBottomWidth: 5 }} />
                                </Grid>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <Typography color={"white"} fontSize={"1rem"}>
                                    dinath.sh@outlook.fr
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={'auto'} gap={1}>
                            <Grid item container xs={'auto'} alignItems={"center"} justifyContent={"center"}>
                                <motion.button initial="hidden"
                                               whileInView="visible"
                                               viewport={{ once: true }}
                                               transition={{ type: "spring", stiffness: 100, damping: 10 }}
                                               variants={{
                                                   visible: { scale: 1 },
                                                   hidden: { scale: 0 }
                                               }}
                                               onClick={() => window.open('https://linkedin.com/in/dinath-sh')}
                                               animate={{
                                                   width: "3.2rem",
                                                   height: "3.2rem",
                                                   padding: "0.6rem",
                                                   borderRadius: "1rem",
                                                   backgroundColor: "white",
                                                   cursor: "pointer"
                                               }}
                                               whileHover={{ scale: 1.1 }}
                                               whileTap={{ scale: 0.9 }}
                                >
                                    <Box component={"img"} src={"assets/stack/linkedin.svg"} style={{ width: "100%" }} />
                                </motion.button>
                            </Grid>
                            <Grid item container xs={'auto'} alignItems={"center"} justifyContent={"center"}>
                                <motion.button initial="hidden"
                                               whileInView="visible"
                                               viewport={{ once: true }}
                                               transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                               variants={{
                                                   visible: { scale: 1 },
                                                   hidden: { scale: 0 }
                                               }}
                                               onClick={() => window.open('https://github.com/DinahWorld')}
                                               animate={{
                                                   width: "3.2rem",
                                                   height: "3.2rem",
                                                   padding: "0.6rem",
                                                   borderRadius: "1rem",
                                                   backgroundColor: "white",
                                                   cursor: "pointer"
                                               }}
                                               whileHover={{ scale: 1.1 }}
                                               whileTap={{ scale: 0.9 }}
                                >
                                    <Box component={"img"} src={"assets/stack/github-dinath.svg"} style={{ width: "100%" }} />
                                </motion.button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {!isScreenSmallerThanSM &&
                        <Grid item container xs={'auto'}>
                            <Box component={"img"} src={"assets/avatar/Dinath.png"} style={{ borderRadius: "1.2rem", width: "100%" }} />
                        </Grid>
                    }
                </Grid>
                <Grid container sx={{ position: "absolute", width: "98%", height: "98%" }}>
                    <svg fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: "100%" }}>
                        <CustomStars {...memoizedValues.customStars1} />
                        <CustomStars {...memoizedValues.customStars2} />
                        <CustomStars {...memoizedValues.customStars3} />
                        <Stars {...memoizedValues.stars} />
                        <Filter {...memoizedValues.filter1} />
                        <Filter {...memoizedValues.filter2} />
                        <Meteor {...memoizedValues.meteor} />
                    </svg>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;