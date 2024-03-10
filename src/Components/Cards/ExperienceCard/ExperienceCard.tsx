import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import StackIcon from "../StackIcon";
import {getSvgPath} from "figma-squircle";
import theme from "../../../theme";

interface EducationCardProps {
    title: string,
    description: string,
    deg: string,
    url: string,
    job: number,
    company: string,
    date: string,

}

const svgPath = getSvgPath({
    width: 400,
    height: 400,
    cornerRadius: 80,
    cornerSmoothing: 1,
})

const svgPathLittle = getSvgPath({
    width: 64,
    height: 64,
    cornerRadius: 14,
    cornerSmoothing: 1,
})

const ExperienceCard = (props: EducationCardProps) => {
    const isScreenLowerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    const stack = () => {
        switch (props.job) {
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
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/eclipse.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/pi.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/iot.svg"}/>
                        </Grid>
                    </Grid>
                );
            case 3:
                return (
                    <Grid item container xs={12} gap={2}>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/tutor.svg"}/>
                        </Grid>
                        <Grid item xs={'auto'}>
                            <StackIcon img={"assets/stack/java.svg"}/>
                        </Grid>
                    </Grid>
                );
        }

    }

    return (
        <Grid container item xs={12} gap={{xs: 4, sm: 4, md: 10}} justifyContent={"center"} alignItems={"center"}>
            <Grid item container
                  order={props.job === 2 ? 2 : 1}
                  xs={11}
                  sm={11}
                  md={5}
                  sx={{
                      padding: "3rem",
                      paddingRight: "3rem",
                      borderRadius: "3.5rem",
                      border: "0.5px solid #e5e7ff",
                      background: "radial-gradient(50% 50% at 50% 50%, rgba(209, 216, 255, 0.20) 0%, rgba(224, 229, 255, 0.20) 100%)",
                      backdropFilter: "blur(12.699999809265137px)"
                  }}
                  gap={2}
            >
                <Grid item container xs={12}>
                    <Grid item xs={12}>
                        <Typography lineHeight={1.1} fontSize={"1.3rem"} fontWeight={"bold"}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography lineHeight={1.1} fontSize={"0.8rem"}>
                            {props.company}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography lineHeight={1.1} fontSize={"0.6rem"} fontStyle={"italic"}>
                            {props.date}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Typography fontSize={"0.9rem"} sx={{
                        whiteSpace: "break-spaces"
                    }}>
                        {props.description}
                    </Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item container xs={'auto'}>
                        {stack()}
                    </Grid>
                    {isScreenLowerThanMD &&
                        <Grid item xs={'auto'} border={2}>
                            <Box component="img"
                                 src={props.url}
                                 sx={{
                                     objectFit: "cover",
                                     clipPath: `path('${svgPathLittle}')`,
                                     width: "4rem",
                                     height: "4rem",
                                     transition: "transform 0.3s ease-in-out",
                                     "&:hover": {
                                         transform: "scale(1.1)",
                                     },
                                 }}/>
                        </Grid>
                    }
                </Grid>

            </Grid>
            {!isScreenLowerThanMD &&

                <Grid item xs={'auto'}
                      order={props.job === 2 ? 1 : 2}
                >
                    <Box component="img"
                         src={props.url}
                         alt={""}
                         sx={{
                             transform: "rotate(" + props.deg + "deg)",
                             objectFit: "cover",
                             clipPath: `path('${svgPath}')`,
                             height: 400,
                             width: 400
                         }}/>
                </Grid>
            }
        </Grid>
    );
}

export default ExperienceCard;