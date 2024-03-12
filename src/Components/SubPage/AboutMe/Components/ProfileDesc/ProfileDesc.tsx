import React from "react";
import {Grid, Typography} from "@mui/material";
import {motion} from "framer-motion";


interface ProfileDescProps {
    desc: string
}

const ProfileDesc = (props: ProfileDescProps) => {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: "spring", stiffness: 100, damping: 10}}
            animate={{}}
        >
            <Grid item xs={'auto'} sx={{
                paddingLeft: "1.2rem",
                paddingRight: "1.2rem",
                paddingBottom: "0.3rem",
                paddingTop: "0.3rem",
                borderRadius: "3.5rem",
                border: "1px solid #DFDAFF"
            }}>
                <Typography fontSize={"12px"} color={'white'}>{props.desc}</Typography>
            </Grid>
        </motion.div>
    );
}

export default ProfileDesc;