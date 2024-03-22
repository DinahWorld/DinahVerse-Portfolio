import React from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import Planet from "Components/Background/Planet";
import Meteor from "Components/Background/Meteor";
import Stars from "Components/Background/Stars";
import {useMousePosition} from "Hook/useMousePosition";
import Filter from "Components/Background/Filter/Filter";
import CustomStars from "Components/Background/CustomStars/CustomStars";
import theme from "../../../../../theme";


const HomeBanner = () => {
    const position = useMousePosition();
    const isScreenSmallerThaSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <Grid container
              sx={{
                  backgroundColor: "#000018",
                  height: "100%",
                  borderRadius: {xs: "0rem", sm: "0rem", md: "3rem"}
              }}>

            <Grid item sx={{position: "absolute", bottom: {xs: "20%", sm: "20%", md: "8%"}, left: "8%"}}>
                <Grid item xs={'auto'}>
                    <Typography fontWeight={"bold"} color={"white"} fontSize={"3rem"}>
                        Hi, I’m Dinath. <br/>
                        A Full-Stack Engineer
                    </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                    <Typography color={"white"} fontSize={"1rem"}>
                        Welcome to my DinahVerse
                    </Typography>
                </Grid>

            </Grid>
            <svg fill='none' xmlns='http://www.w3.org/2000/svg' style={{width: "100%"}}>
                <CustomStars x={(position.x / 15) - 1400} y={(position.y / 20) - 300} sizex={3500} sizey={2000}/>
                <CustomStars x={(position.x / 20) - 900} y={(position.y / 20) - 1800} sizex={7000} sizey={2000}/>
                <CustomStars x={(-position.x / 20) - 6500} y={(position.y / 30) - 1500} sizex={9000} sizey={2000}/>
                <Stars x={(-position.x / 100) + 250} y={(position.y / 60)} sizex={300} sizey={500}/>
                {isScreenSmallerThaSM &&
                    <Planet x={(-position.x / 60) - 100} y={(position.y / 80) - 1200} sizex={100} sizey={2000}/>
                }
                {!isScreenSmallerThaSM &&
                    <Planet x={(-position.x / 60) - 1000} y={(position.y / 80) - 1200} sizex={100} sizey={2000}/>
                }
                <Meteor x={(-position.x / 40) - 1000} y={(position.y / 40) - 1200} sizex={100} sizey={1600}/>
                {isScreenSmallerThaSM &&
                    <Planet x={(position.x / 40) + 500} y={(position.y / 60) - 50} sizex={80} sizey={800}/>
                }
                {!isScreenSmallerThaSM &&
                    <Planet x={(position.x / 40) + 600} y={(position.y / 60) - 50} sizex={80} sizey={800}/>
                }
                <Filter x={(position.x / 60) - 1100} y={(position.y / 80) - 1100} sizex={100} sizey={2000}/>
                <Filter x={(position.x / 20) + 500} y={(position.y / 60) - 50} sizex={100} sizey={800}/>
                <Meteor x={(-position.x / 8) - 1900} y={(position.y / 8) - 400} sizex={100} sizey={3000}/>

                {isScreenSmallerThaSM &&
                    <Meteor x={(position.x / 10)} y={(position.y / 30) - 80} sizex={100} sizey={400}/>
                }
                {!isScreenSmallerThaSM &&
                    <Meteor x={(position.x / 10) + 100} y={(position.y / 30) - 80} sizex={100} sizey={400}/>
                }
            </svg>
        </Grid>
    );
}

export default HomeBanner;