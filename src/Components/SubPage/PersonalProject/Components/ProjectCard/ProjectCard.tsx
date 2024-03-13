import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {getSvgPath} from "figma-squircle";
import {motion} from "framer-motion";

interface ProjectCardProps {
    title: string;
    stack: string;
    img: string;
    github: string;
    number: number;
    url: string;
}

const svgPath = getSvgPath({
    width: 16 * 26,
    height: 16 * 16,
    cornerRadius: 50,
    cornerSmoothing: 1,
})

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    transition={{type: "spring", stiffness: 200, damping: 18}}
                    animate={{
                        cursor: "pointer"
                    }}
                    variants={{
                        visible: {scale: 0.9, rotate: 0},
                        hidden: {scale: 0, rotate: props.number === 1 ? -10 : 10}
                    }}
                    whileHover={{scale: 1}}
                    whileTap={{scale: 0.9}}
                    onClick={() => window.open(props.url)}
        >

            <Grid item container xs={'auto'}
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction="column"
                  gap={1}
            >
                <Grid item container xs={'auto'}
                      direction="column"
                      position="relative"
                >
                    <Grid item xs={'auto'}>
                        <Box component={"img"} src={props.img} sx={{
                            width: {xs: "26rem", sm: "26rem", md: "26rem"},
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
        </motion.div>

    );
}

export default ProjectCard;