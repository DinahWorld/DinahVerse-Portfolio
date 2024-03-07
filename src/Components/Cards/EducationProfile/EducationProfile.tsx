import React, {CSSProperties} from "react";
import {Grid} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface EducationProfileProps {
    imageNumber: number;
}

const EducationProfile: React.FC<EducationProfileProps> = ({imageNumber}) => {
    let imagePath = "";
    let sx: SxProps<Theme> = {};
    let sxImg: CSSProperties = {};

    switch (imageNumber) {
        case 1:
            imagePath = "assets/aboutMe/mini.png";
            sx = {
                width: "300px",
                height: "400px",
                border: "3px solid black",
                position: "relative",
                backgroundColor: "rgba(0, 0, 0, 0.49)",
                borderRadius: "3.2em"
            };
            sxImg = {}
            break;
        case 2:
            imagePath = "assets/aboutMe/young.png";
            sx = {
                width: "300px",
                height: "400px",
                border: "3px solid black",
                position: "relative",
                backgroundColor: "rgba(0, 0, 0, 0.49)",
                borderRadius: "3.2em"
            };
            break;
        case 3:
            imagePath = "assets/aboutMe/adult.png";
            sx = {
                width: "300px",
                height: "400px",
                border: "3px solid black",
                position: "relative",
                backgroundColor: "rgba(0, 0, 0, 0.49)",
                borderRadius: "3.2em"
            };
            break;
        default:
            sx = {
                width: "300px",
                height: "400px",
                border: "3px solid black",
                position: "relative",
                backgroundColor: "rgba(0, 0, 0, 0.49)",
                borderRadius: "3.2em"
            };
            imagePath = "assets/aboutMe/mini.png";
            break;
    }

    return (

        <Grid container
              sx={sx}>
            <img
                style={{
                    position: "absolute",
                    width: "120%",
                    bottom: "0",
                    left: "-20%"
                }}
                src={imagePath}
                alt={`Education Image ${imageNumber}`}
            />
        </Grid>
    );
};

export default EducationProfile;