import React, { useMemo } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Planet from "Components/Background/Planet";
import Meteor from "Components/Background/Meteor";
import Stars from "Components/Background/Stars";
import { useMousePosition } from "Hook/useMousePosition";
import Filter from "Components/Background/Filter/Filter";
import CustomStars from "Components/Background/CustomStars/CustomStars";
import theme from "theme";

const HomeBanner = () => {
    const position = useMousePosition();
    const isScreenSmallerThanSM = useMediaQuery(theme.breakpoints.down('sm'));

    const memoizedValues = useMemo(() => {
        const x = position.x;
        const y = position.y;

        return {
            customStars1: { x: (x / 20) - 900, y: (y / 20) - 1800 },
            customStars2: { x: (-x / 20) - 6500, y: (y / 30) - 1500 },
            stars: { x: (-x / 100) + 250, y: (y / 60) },
            planet1: { x: isScreenSmallerThanSM ? (-x / 60) - 100 : (-x / 60) - 1000, y: (y / 80) - 1200 },
            planet2: { x: isScreenSmallerThanSM ? (x / 40) + 500 : (x / 40) + 600, y: (y / 60) - 50 },
            meteor1: { x: (-x / 40) - 1000, y: (y / 40) - 1200 },
            meteor2: { x: (-x / 8) - 1900, y: (y / 8) - 400 },
            filter1: { x: (x / 60) - 1100, y: (y / 80) - 1100 },
            filter2: { x: (x / 20) + 500, y: (y / 60) - 50 },
        };
    }, [position, isScreenSmallerThanSM]);

    return (
        <Grid item container sx={{
            backgroundColor: "#000018",
            height: "100%",
            width: "100%",
            borderRadius: { xs: "0rem", sm: "0rem", md: "1rem" }
        }} xs={12}>
            <Grid container item xs={12} sx={{ position: "absolute", width: "97%", height: "97%", zIndex: "1" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"column"}>
                <Grid item xs={'auto'}>
                    <Typography fontWeight={"bold"} color={"white"} fontSize={"3rem"} textAlign={"center"}>
                        Hi, I’m Dinath. <br />
                        A Software Engineer
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography color={"white"} fontSize={"1rem"}>
                        Welcome to my DinahVerse
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container>
                <svg fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: "100%" }}>
                    <CustomStars {...memoizedValues.customStars1} sizex={7000} sizey={2000} />
                    <CustomStars {...memoizedValues.customStars2} sizex={9000} sizey={2000} />
                    <Stars {...memoizedValues.stars} sizex={300} sizey={500} />
                    <Planet {...memoizedValues.planet1} sizex={100} sizey={2000} />
                    <Meteor {...memoizedValues.meteor1} sizex={100} sizey={1600} />
                    <Planet {...memoizedValues.planet2} sizex={80} sizey={800} />
                    <Filter {...memoizedValues.filter1} sizex={100} sizey={2000} />
                    <Filter {...memoizedValues.filter2} sizex={100} sizey={800} />
                    <Meteor {...memoizedValues.meteor2} sizex={100} sizey={3000} />
                    <Meteor x={isScreenSmallerThanSM ? (position.x / 10) : (position.x / 10) + 100}
                            y={(position.y / 30) - 80} sizex={100} sizey={400} />
                </svg>
            </Grid>
        </Grid>
    );
}

export default HomeBanner;