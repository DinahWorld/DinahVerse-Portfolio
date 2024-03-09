import React from "react";
import {Grid, Typography} from "@mui/material";
import StackIcon from "../StackIcon";

interface EducationCardProps {
    title: string,
    description: string,
    deg: string,
    url: string,
    job: number,
}

const stack = (job: number) => {
    switch (job) {
        case 1:
            return (
                <Grid item container xs={12} gap={2}>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/spring_boot.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/java.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/jira.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/jenkins.svg"}/>
                    </Grid>
                </Grid>
            );
        case 2:
            return (
                <Grid item container xs={12} gap={2}>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/java.svg"}/>
                    </Grid>
                </Grid>
            );
        case 3:
            return (
                <></>
            );
    }

}
const EducationCard = (props: EducationCardProps) => {


    return (
        <Grid container item xs={10} gap={10} justifyContent={"center"} alignItems={"center"}>
            <Grid item container
                  border={2}
                  xs={11}
                  sm={11}
                  md={5}
                  sx={{
                      padding: "3rem",
                      paddingLeft: "3rem",
                      paddingRight: "3rem",
                      borderRadius: "3.5rem",
                      border: "0.5px solid #e5e7ff",
                      background: "radial-gradient(50% 50% at 50% 50%, rgba(209, 216, 255, 0.20) 0%, rgba(224, 229, 255, 0.20) 100%)",
                      backdropFilter: "blur(12.699999809265137px)"
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
                {stack(props.job)}
            </Grid>
            <Grid item xs={'auto'}>
                <img src={props.url}
                     alt={""}
                     style={{
                         transform: "rotate(" + props.deg + "deg)",
                         objectFit: "cover",
                         borderRadius: "3rem",
                         height: "13rem",
                         width: "24rem"
                     }}/>
            </Grid>
        </Grid>
    );
}

export default EducationCard;