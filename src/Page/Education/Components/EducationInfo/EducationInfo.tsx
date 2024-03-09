import {Grid, Typography} from "@mui/material";
import React from "react";

interface EducationInfoProps {
    imageNumber: number;
}


const EducationInfo: React.FC<EducationInfoProps> = ({imageNumber}) => {
    let bgColor = "";
    let school = "";
    switch (imageNumber) {
        case 1:
            school = "Lycée W.A Mozart";
            bgColor = "radial-gradient(50% 50% at 50% 50%, rgba(209, 216, 255, 0.20) 0%, rgba(224, 229, 255, 0.20) 100%)";
            break;
        case 2:
            school = "Université Paris VIII";
            bgColor = "radial-gradient(50% 50% at 50% 50%, rgba(255, 209, 209, 0.20) 0%, rgba(255, 224, 224, 0.20) 100%)";
            break;
        case 3:
            school = "Epitech Paris";
            bgColor = "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.20) 0%, rgba(199, 199, 199, 0.20) 100%)";
            break;
        default:
            school = "Lycée W.A Mozart";
            bgColor = "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.20) 0%, rgba(199, 199, 199, 0.20) 100%)";
            break;
    }
    return (
        <Grid item container xs={12}
              borderColor={"red"}
              gap={5}
              sx={{
                  padding: "3rem",
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                  borderRadius: "3.5rem",
                  border: "0.5px solid #e5e7ff",
                  background: `${bgColor}`,
                  backdropFilter: "blur(12px)"
              }}
        >

            <Grid item xs={12}>
                <Typography fontSize={"2rem"}>{school}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography fontSize={"0.8rem"}>
                    Lorem ipsum dolor sit amet consectetur. Convallis
                    et
                    sed at
                    commodo nulla pulvinar eget. Varius consequat interdum platea lacus dictum
                    integer.
                    Id
                    mauris duis parturient vitae auctor enim. Elit massa orci nullam cras tristique
                    nunc
                    phasellus blandit.
                </Typography>
            </Grid>
        </Grid>
    );
}

export default EducationInfo;