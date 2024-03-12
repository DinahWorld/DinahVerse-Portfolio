import React, {useEffect} from "react";
import {Box, Grid, Theme} from "@mui/material";
import {SxProps} from "@mui/system";

interface EducationProfileProps {
    imageNumber: number;
}

function preloadImage(src: string) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function () {
            resolve(img)
        }
        img.onerror = img.onabort = function () {
            reject(src)
        }
        img.src = src
    })
}

const EducationProfile: React.FC<EducationProfileProps> = ({imageNumber}) => {
    const meImg: string[] = [
        "assets/aboutMe/mini.png",
        "assets/aboutMe/young.png",
        "assets/aboutMe/adult.png",
        "assets/noise/blue.png",
        "assets/noise/red.png",
        "assets/noise/black.png"
    ]

    useEffect(() => {
        let isCancelled = false

        async function effect() {
            if (isCancelled) {
                return
            }

            const imagesPromiseList: Promise<any>[] = []
            for (const i of meImg) {
                imagesPromiseList.push(preloadImage(i))
            }

            await Promise.all(imagesPromiseList)

            if (isCancelled) {
                return
            }
        }

        effect()

        return () => {
            isCancelled = true
        }
    },)

    let imagePath = "";
    let imgSx: SxProps<Theme> = {};
    let bgColor = "";
    let bgImg = "";

    switch (imageNumber) {
        case 1:
            bgColor = "rgba(179, 191, 255, 0.49)";
            // @ts-ignore
            imagePath = meImg.at(0);
            // @ts-ignore
            bgImg = "url(" + meImg.at(3) + ")";
            imgSx = {
                position: "absolute",
                width: "100%",
                bottom: "0",
                left: "-20%",
            }
            break;
        case 2:
            bgColor = "rgba(255, 188, 179, 0.49)";
            // @ts-ignore
            imagePath = meImg.at(1);
            // @ts-ignore
            bgImg = "url(" + meImg.at(4) + ")";
            imgSx = {
                position: "absolute",
                width: "100%",
                bottom: "-2px",
                left: "10%"
            }
            break;
        case 3:
            bgColor = "rgba(0, 0, 0, 0.49)";
            // @ts-ignore
            imagePath = meImg.at(2);
            // @ts-ignore
            bgImg = "url(" + meImg.at(5) + ")";
            imgSx = {
                position: "absolute",
                width: {xs: "100%", sm: "100%", md: "120%", lg: "120%", xl: "120%"},
                bottom: "0",
                left: "-20%"
            }

            break;
    }

    return (

        <Grid item container
              xs={'auto'}
              sx={{
                  width: {xs: 300, sm: 300, md: 300, lg: 400, xl: 400},
                  height: {xs: 300, sm: 300, md: 300, lg: 500, xl: 500},
                  position: "relative",
                  backgroundColor: `${bgColor}`,
                  borderRadius: "5rem",
                  backgroundImage: `${bgImg}`,
                  backgroundSize: "cover",
              }}>

            <Box component="img" sx={imgSx} src={imagePath} loading={"eager"}/>
        </Grid>
    );
};

export default EducationProfile;