import React from "react";
import {Box, Grid, Theme} from "@mui/material";
import {SxProps} from "@mui/system";

interface EducationProfileProps {
    imageNumber: number;
}

const EducationProfile: React.FC<EducationProfileProps> = ({imageNumber}) => {
    let imagePath = "";
    let imgSx: SxProps<Theme> = {};
    let bgColor = "";
    let bgImg = "";

    switch (imageNumber) {
        case 1:
            bgColor = "rgba(179, 191, 255, 0.49)";
            bgImg = "url(assets/noise/blue.png)";
            imagePath = "assets/aboutMe/mini.png";
            imgSx = {
                position: "absolute",
                width: "100%",
                bottom: "0",
                left: "-20%",
            }
            break;
        case 2:
            bgColor = "rgba(255, 188, 179, 0.49)";
            bgImg = "url(assets/noise/red.png)";
            imagePath = "assets/aboutMe/young.png";
            imgSx = {
                position: "absolute",
                width: "100%",
                bottom: "-2px",
                left: "10%"
            }
            break;
        case 3:
            bgColor = "rgba(0, 0, 0, 0.49)";
            bgImg = "url(assets/noise/black.png)";
            imagePath = "assets/aboutMe/adult.png";
            imgSx = {
                position: "absolute",
                width: {xs: "100%", sm: "100%", md: "120%", lg: "120%", xl: "120%"},
                bottom: "0",
                left: "-20%"
            }

            break;
    }

    return (

        <Grid item container
              xs={'auto'}
              sx={{
                  width: {xs: 300, sm: 300, md: 300, lg: 400, xl: 400},
                  height: {xs: 300, sm: 300, md: 300, lg: 500, xl: 500},
                  position: "relative",
                  backgroundColor: `${bgColor}`,
                  borderRadius: "5rem",
                  backgroundImage: `${bgImg}`,
                  backgroundSize: "cover",
              }}>

            <Box component="img" sx={imgSx} src={imagePath} loading={"eager"}/>
        </Grid>
    );
};

export default EducationProfile;