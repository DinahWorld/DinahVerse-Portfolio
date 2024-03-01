import React from "react";
import {Grid, Typography} from "@mui/material";

interface EducationCardProps {
    title: string,
    description: string,
    deg: string
}

const EducationCard = (props: EducationCardProps) => {
    return (
        <Grid container item xs={12} gap={24} justifyContent={"center"} alignItems={"center"}>
            <Grid item container xs={4}
                  sx={{
                      padding: "3rem",
                      paddingLeft: "3rem",
                      paddingRight: "3rem",
                      borderRadius: "3rem",
                      border: "2px solid #e5e7ff",
                      backdropFilter: "blur(9.949999809265137px)"
                  }}
                  gap={4}
            >
                <Grid item xs={'auto'}>
                    <Typography fontSize={"1.6rem"}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={"0.9rem"}>
                        {props.description}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={'auto'}>
                <img src={"assets/experience/blank.png"} alt={""}
                     style={{transform: "rotate(" + props.deg + "deg)", width: "30vw"}}/>
            </Grid>
        </Grid>
    );
}

export default EducationCard;