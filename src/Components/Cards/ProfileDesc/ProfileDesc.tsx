import React from "react";
import {Grid, Typography} from "@mui/material";


interface ProfileDescProps {
    desc: string
}

const ProfileDesc = (props: ProfileDescProps) => {
    return (
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
    );
}

export default ProfileDesc;