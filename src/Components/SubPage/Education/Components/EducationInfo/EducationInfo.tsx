import {Grid, Typography} from "@mui/material";
import React from "react";

interface EducationInfoProps {
    imageNumber: number;
}

const EducationInfo: React.FC<EducationInfoProps> = ({imageNumber}) => {
    let bgColor = "";
    let school = "";
    let schoolAddr = "";
    let schoolGrade = "";
    let textColor = "";
    let schoolDesc = "";

    switch (imageNumber) {
        case 1:
            textColor = "#5D68FF"
            schoolGrade = "High School Diploma"
            schoolAddr = "Le Blanc-Mesnil, Paris, France"
            school = "Lycee W.A Mozart";
            bgColor = "radial-gradient(50% 50% at 50% 50%, rgba(209, 216, 255, 0.20) 0%, rgba(224, 229, 255, 0.20) 100%)";
            schoolDesc = "Earned High School Diploma in Computer Science, showing strong base for IT software dev."
            break;
        case 2:
            textColor = "#FF5D5D";
            schoolGrade = "Bachelor of Science in Computer Science"
            schoolAddr = "Saint-Denis, Paris, France"
            school = "Universite Paris VIII";
            bgColor = "radial-gradient(50% 50% at 50% 50%, rgba(255, 209, 209, 0.20) 0%, rgba(255, 224, 224, 0.20) 100%)";
            schoolDesc = "Graduated with Bachelor in Computer Science from Univ Paris VIII, mastering software and algorithms."
            break;
        case 3:
            textColor = "#0F1727";
            schoolGrade = "Master of Science in Computer Science"
            schoolAddr = "Paris, France"
            school = "Epitech Technology";
            bgColor = "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.20) 0%, rgba(199, 199, 199, 0.20) 100%)";
            schoolDesc = "Epitech Paris Master's in Computer Science, plus work-study, readies me for software engineering."
            break;
    }
    return (
        <Grid item container xs={12}
              gap={3}
              sx={{
                  padding: "2rem",
                  borderRadius: "3.5rem",
                  border: "0.5px solid #e5e7ff",
                  background: `${bgColor}`,
                  backdropFilter: "blur(12px)"
              }}
        >

            <Grid container item xs={12}>
                <Grid item xs={12}>
                    <Typography lineHeight={1.1}
                                fontSize={"2rem"}
                                sx={{
                                    fontSize: {
                                        xs: "1.6rem",
                                        sm: "2rem",
                                        md: "2rem",
                                    }
                                }}
                                fontWeight={"bold"}
                                color={`${textColor}`}
                    >
                        {school}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography fontSize={"0.8rem"}
                                fontWeight={"bold"}
                                color={`${textColor}`}
                    >
                        {schoolGrade}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={"0.7rem"}
                                fontStyle={"italic"}
                                color={`${textColor}`}
                    >
                        {schoolAddr}
                    </Typography>
                </Grid>

            </Grid>

            <Grid item xs={12}>
                <Typography fontSize={"0.8rem"}>
                    {schoolDesc}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default EducationInfo;