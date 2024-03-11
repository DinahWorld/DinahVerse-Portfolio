import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {getSvgPath} from "figma-squircle";

interface ProjectCardProps {
    title: string;
    stack: string;
    img: string;
    github: string;
}

const svgPath = getSvgPath({
    width: 16 * 26,
    height: 16 * 16,
    cornerRadius: 50 - 5,
    cornerSmoothing: 1,
})

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Grid item container xs={'auto'}
              justifyContent={"center"}
              alignItems={"center"}
              direction="column"
              gap={2}
        >
            <Grid item container xs={'auto'}
                  direction="column"
                  position="relative"
            >
                <Grid item xs={'auto'}>
                    <Box component={"img"} src={props.img} style={{
                        width: "26rem",
                        height: "16rem",
                        clipPath: `path('${svgPath}')`,
                        borderRadius: "3rem"
                    }}/>
                </Grid>
            </Grid>
            <Grid item container xs={12} direction="row" justifyContent="space-between">
                <Grid item container xs={'auto'} direction="column">
                    <Grid item xs={'auto'}>
                        <Typography fontSize={"0.6rem"}>
                            {props.stack}
                        </Typography>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <Typography fontSize={"1.2rem"}>
                            {props.title}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProjectCard;