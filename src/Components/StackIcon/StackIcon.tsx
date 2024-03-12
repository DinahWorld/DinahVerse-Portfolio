import React from "react";
import {Grid} from "@mui/material";
import {motion} from "framer-motion";

interface StackProps {
    img: string
}

const StackIcon = (props: StackProps) => {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.8}}
            transition={{type: "spring", stiffness: 200, damping: 5}}
            animate={{}}
        >
            <Grid container alignItems={"center"} justifyContent={"center"} sx={{
                width: "3.8rem",
                height: "3.8rem",
                padding: "0.8rem",
                borderRadius: "1.4rem",
                border: "1px solid #e5e7ff",
                backdropFilter: "blur(9.949999809265137px)",
            }}>
                <img src={props.img} alt={""} style={{width: "100%"}}/>
            </Grid>
        </motion.div>
    );
};

export default StackIcon;