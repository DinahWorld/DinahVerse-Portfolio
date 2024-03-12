import React from "react";
import {Avatar} from "@mui/material";
import {motion} from "framer-motion"

const DinAvatar = () => {
    return (
        <motion.div
            onClick={() => window.open('https://linkedin.com/in/dinath-sh')}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: "spring", stiffness: 100, damping: 10}}
            animate={{
                width: "100%",
                cursor: "pointer"
            }}
        >
            <Avatar alt="Dinath Sunthararajah" src={"assets/avatar/avatar.png"} sx={{width: "50px", height: "50px"}}/>
        </motion.div>
    );
}

export default DinAvatar;