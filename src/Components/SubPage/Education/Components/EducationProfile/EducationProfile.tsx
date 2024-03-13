import React, {useEffect} from "react";
import {Box, Grid} from "@mui/material";

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
        "assets/aboutMe/circle_mini.png",
        "assets/aboutMe/circle_young.png",
        "assets/aboutMe/circle_adult.png",
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

    switch (imageNumber) {
        case 1:
            // @ts-ignore
            imagePath = meImg.at(0);
            break;
        case 2:
            // @ts-ignore
            imagePath = meImg.at(1);
            break;
        case 3:
            // @ts-ignore
            imagePath = meImg.at(2);
            break;
    }

    return (

        <Grid item container xs={'auto'} sx={{
            width: {xs: 300, sm: 300, md: 400, lg: 500},
            height: {xs: 300, sm: 300, md: 400, lg: 500},
            position: "relative"
        }
        }>
            <Box component="img" sx={{
                position: "absolute",
                top: {xs: "-2rem", sm: "-3rem", md: "-5rem", lg: "-7rem"},
                left: {xs: "-2.8rem", sm: "-3.8rem", md: "-3rem", lg: "-4rem"},
                width: {xs: "22rem", sm: "25rem", md: "30rem", lg: "38rem"},
                height: {xs: "22rem", sm: "25rem", md: "30rem", lg: "38rem"},
                objectFit: "contain",
            }} src={imagePath} loading={"eager"}/>
        </Grid>
    );
};

export default EducationProfile;