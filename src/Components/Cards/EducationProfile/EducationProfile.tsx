import React, {CSSProperties} from "react";
import {Grid} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface EducationProfileProps {
    imageNumber: number;
}

const EducationProfile: React.FC<EducationProfileProps> = ({imageNumber}) => {
    let imagePath = "";
    let containerSx: SxProps<Theme> = {};
    let imgSx: CSSProperties = {};

    switch (imageNumber) {
        case 1:
            imagePath = "assets/aboutMe/mini.png";
            containerSx = {
                width: "380px",
                height: "450px",
                position: "relative",
                backgroundColor: "rgba(179, 191, 255, 0.49)",
                borderRadius: "3.2em",
                backgroundImage: "url(assets/noise/blue.png)",
                backgroundSize: "cover",

            };
            imgSx = {
                position: "absolute",
                width: "100%",
                bottom: "0",
                left: "-20%"
            }
            break;
        case 2:
            imagePath = "assets/aboutMe/young.png";
            containerSx = {
                width: "380px",
                height: "450px",
                position: "relative",
                backgroundColor: "rgba(255, 188, 179, 0.49)",
                borderRadius: "3.2em",
                backgroundImage: "url(assets/noise/red.png)",
                backgroundSize: "contain"


            };
            imgSx = {
                position: "absolute",
                width: "110%",
                bottom: "-1%",
                left: "10%"
            }

            break;
        case 3:
            imagePath = "assets/aboutMe/adult.png";
            containerSx = {
                width: "380px",
                height: "450px",
                position: "relative",
                backgroundColor: "rgba(0, 0, 0, 0.49)",
                borderRadius: "3.2em",
                backgroundImage: "url(assets/noise/black.png)",
                backgroundSize: "contain"
            };
            imgSx = {
                position: "absolute",
                width: "120%",
                bottom: "0",
                left: "-20%"
            }

            break;
        default:
            containerSx = {
                width: "500px",
                height: "600px",
                position: "relative",
                backgroundColor: "rgba(179, 191, 255, 0.49)",
                borderRadius: "3.2em",
                backgroundImage: "assets/noise/blue.png",
                backgroundSize: "contain"

            };
            imgSx = {
                position: "absolute",
                width: "120%",
                bottom: "0",
                left: "-20%"
            }

            imagePath = "assets/aboutMe/mini.png";
            break;
    }

    return (

        <Grid container sx={containerSx}>
            <img style={imgSx} src={imagePath}/>
        </Grid>
    );
};

export default EducationProfile;