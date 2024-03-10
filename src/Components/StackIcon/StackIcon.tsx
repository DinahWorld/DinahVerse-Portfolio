import React from "react";
import {Grid} from "@mui/material";

interface StackProps {
    img: string
}

const StackIcon = (props: StackProps) => {
    return (
        <Grid container alignItems={"center"} justifyContent={"center"} sx={{
            width: "3.8rem",
            height: "3.8rem",
            padding: "0.8rem",
            borderRadius: "1.4rem",
            border: "1px solid #e5e7ff",
            backdropFilter: "blur(9.949999809265137px)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
                transform: "scale(1.2)",
            },

        }}>
            <img src={props.img} alt={""} style={{width: "100%"}}/>
        </Grid>
    );
};

export default StackIcon;