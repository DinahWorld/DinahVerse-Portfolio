import React from "react";
import {Grid} from "@mui/material";

interface StackProps {
    img: string
}

const Stack = (props: StackProps) => {
    return (
        <Grid container alignItems={"center"} justifyContent={"center"} sx={{
            width: "4rem",
            height: "4rem",
            padding: "0.8rem",
            borderRadius: "1.4rem",
            border: "1px solid #e5e7ff",
            backdropFilter: "blur(9.949999809265137px)"
        }}>
            <img src={props.img} alt={""} style={{width: "100%"}}/>
        </Grid>
    );
};

export default Stack