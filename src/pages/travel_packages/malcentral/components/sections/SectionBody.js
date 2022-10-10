import React from "react"
import Grid from "@mui/material/Grid"

import EAEMUC from "src/assets/images/malcentral/EAEMUC.jpeg"
import EEEPRG from "src/assets/images/malcentral/EEEPRG.jpeg"
import EIMFCO from "src/assets/images/malcentral/EIMFCO.jpeg"
import ENSARN from "src/assets/images/malcentral/ENSARN.jpeg"
import ESCARN from "src/assets/images/malcentral/ESCARN.jpeg"
import ESFNCE from "src/assets/images/malcentral/ESFNCE.jpeg"
import ESIZRH from "src/assets/images/malcentral/ESIZRH.jpeg"
import ESPBCN from "src/assets/images/malcentral/ESPBCN.jpeg"
import CardTravelPackage from "src/pages/travel_packages/malcentral/components/cards/CardTravelPackage"

export default function SectionBody() {
    const tourPackages = [
        {
            banner: EAEMUC,
            tourTitle: "Jewels of Romantic Alpine Europe",
            tourCaption: "10 DAYS 8 NIGHTS",
            tourCode: "EAEMUC",
            link: "https://malcentral.com.my/amazing-europe/jewel-of-romantic-alpine-europe/",
            pdfLink:
                "https://malcentral.com.my/wp-content/uploads/2022/09/Jewel-of-Romantic-Alpine-Europe.pdf",
            tourFareLink:
                "https://malcentral.com.my/wp-content/uploads/2022/09/1-Farelist-Romantic-Alpine-Europe.pdf",
            flightDetailsLink:
                "https://malcentral.com.my/wp-content/uploads/2022/09/1A-MUCFRA-Flight-Details.pdf",
            termAndConditionLink: "https://malcentral.com.my/wp-content/uploads/2022/09/MCT-TC.pdf",
            photoGalleryLink:
                "https://drive.google.com/file/d/1mrKPWUOnZP68s99eJD8qVbXt7YU9zgKV/view",
        },
        {
            banner: ESIZRH,
            tourTitle: "Swiss Indulgence & Stunning Lake Como",
            tourCaption: "9 DAYS 7 NIGHTS",
            tourCode: "ESIZRH",
            link: "https://malcentral.com.my/amazing-europe/swiss-indulgence/",
            pdfLink: "https://malcentral.com.my/wp-content/uploads/2022/08/Swiss-Indulgence.pdf",
            tourFareLink: "https://malcentral.com.my/wp-content/uploads/2022/09/2-Farelist-Swiss-Indulgence-Stunning-Lake-Como.pdf",
            flightDetailsLink: "https://malcentral.com.my/wp-content/uploads/2022/09/2A-ZRHMXP-Flight-Details.pdf",
            termAndConditionLink: "https://malcentral.com.my/wp-content/uploads/2022/09/MCT-TC.pdf",
            photoGalleryLink: "https://drive.google.com/file/d/1hnXViCrICMTvbOCHoa4cadmjafyDJ28k/view",
        },
        {
            banner: ESFNCE,
            tourTitle: "Southern France - Riviera, Provence & the Alps",
            tourCaption: "9 DAYS 7 NIGHTS",
            tourCode: "ESFNCE",
            link: "https://malcentral.com.my/amazing-europe/southern-france-riviera-provence-the-alps/",
            pdfLink: "https://malcentral.com.my/wp-content/uploads/2022/08/Southern-France.pdf",
            tourFareLink: "https://malcentral.com.my/wp-content/uploads/2022/09/3-Farelist-Southern-France-Riviera-Provence-the-Alps.pdf",
            flightDetailsLink: "https://malcentral.com.my/wp-content/uploads/2022/09/3A-NCEGVA-Flight-Details.pdf",
            termAndConditionLink: "https://malcentral.com.my/wp-content/uploads/2022/09/MCT-TC.pdf",
            photoGalleryLink: "https://drive.google.com/file/d/1lXyOIQ7rkFc0yFwqSq_hrJRPdFPiOPd0/view",
        },
        {
            banner: EIMFCO,
            tourTitle: "The Italian Masterpiece  - La Vita Bella",
            tourCaption: "9 DAYS 7 NIGHTS",
            tourCode: "EIMFCO",
            link: "https://malcentral.com.my/amazing-europe/italian-masterpiece-la-vita-bella/",
            pdfLink: "https://malcentral.com.my/wp-content/uploads/2022/08/Italian-Masterpiece-La-Vita-Bella.pdf",
            tourFareLink: "https://malcentral.com.my/wp-content/uploads/2022/09/4-Farelist-The-Italian-Masterpiece-La-Vita-Bella.pdf",
            flightDetailsLink: "https://malcentral.com.my/wp-content/uploads/2022/09/4A-FCOMXP-Flight-Details.pdf",
            termAndConditionLink: "https://malcentral.com.my/wp-content/uploads/2022/09/MCT-TC.pdf",
            photoGalleryLink: "https://drive.google.com/file/d/1CKiE2OfeioT-J21sFEUwJPKTEsEz_ncM/view",
        },
        {
            banner: ESPBCN,
            tourTitle: "Vibrant Spain & Portugal",
            tourCaption: "11 DAYS 9 NIGHTS",
            tourCode: "ESPBCN",
            link: "https://malcentral.com.my/amazing-europe/vibrant-spain-portugal/",
            pdfLink: "https://malcentral.com.my/wp-content/uploads/2022/09/Vibrant-Spain-Portugal.pdf",
            tourFareLink: "https://malcentral.com.my/wp-content/uploads/2022/09/5-Farelist-Vibrant-Spain-Portugal.pdf",
            flightDetailsLink: "https://malcentral.com.my/wp-content/uploads/2022/09/5A-BCNMAD-Flight-Details.pdf",
            termAndConditionLink: "https://malcentral.com.my/wp-content/uploads/2022/09/MCT-TC.pdf",
            photoGalleryLink: "https://drive.google.com/file/d/1r5lioqxDIpfE95HlzswRkS-wiz3QHwt5/view",
        },
        {
            banner: EEEPRG,
            tourTitle: "Enchanting Vibes of Eastern Europe",
            tourCaption: "11 DAYS 9 NIGHTS",
            tourCode: "EEEPRG",
            link: "https://malcentral.com.my/amazing-europe/enchanting-vibes-of-eastern-europe/",
            pdfLink: "https://malcentral.com.my/wp-content/uploads/2022/08/Enchanting-Vibes-of-Eastern-Europe.pdf",
            tourFareLink: "https://malcentral.com.my/wp-content/uploads/2022/09/6-Farelist-Enchanting-Vibes-of-Eastern-Europe.pdf",
            flightDetailsLink: "https://malcentral.com.my/wp-content/uploads/2022/09/6A-PRGBUD-Flight-Details.pdf",
            termAndConditionLink: "https://malcentral.com.my/wp-content/uploads/2022/09/MCT-TC.pdf",
            photoGalleryLink: "https://drive.google.com/file/d/1yDLXxk6ozhCGuQ6mCEE_ijJbkuBVGTAW/view",
        },
        {
            banner: ENSARN,
            tourTitle: "Arctic Norway & Sweden - 'Northern Lights' Splendour",
            tourCaption: "10 DAYS 8 NIGHTS",
            tourCode: "ENSARN",
            link: "https://malcentral.com.my/amazing-europe/arctic-norway-sweden-northern-lights-splendour/",
            pdfLink: "https://malcentral.com.my/wp-content/uploads/2022/08/Arctic-Norway-Sweden-Northern-Lights-Splendour.pdf",
            tourFareLink: "https://malcentral.com.my/wp-content/uploads/2022/09/7-Farelist-Arctic-Norway-Sweden-Northern-Lights-Splendour.pdf",
            flightDetailsLink: "https://malcentral.com.my/wp-content/uploads/2022/09/7A-ARNOSL-Flight-Details.pdf",
            termAndConditionLink: "https://malcentral.com.my/wp-content/uploads/2022/09/MCT-TC.pdf",
            photoGalleryLink: "https://drive.google.com/file/d/1q_dSmc7CqBa0L39JmspICadw8Pfjr1df/view",
        },
        {
            banner: ESCARN,
            tourTitle: "Magical Scandinavia - Fjords & Capital",
            tourCaption: "11 DAYS 9 NIGHTS",
            tourCode: "ESCARN",
            link: "https://malcentral.com.my/amazing-europe/magical-scandinavia/",
            pdfLink: "https://malcentral.com.my/wp-content/uploads/2022/08/Magical-Scandinavia.pdf",
            tourFareLink: "https://malcentral.com.my/wp-content/uploads/2022/09/8-Farelist-Magical-Scandinavia-Fjords-Capitals.pdf",
            flightDetailsLink: "https://malcentral.com.my/wp-content/uploads/2022/09/8A-ARNCPH-Flight-Details.pdf",
            termAndConditionLink: "https://malcentral.com.my/wp-content/uploads/2022/09/MCT-TC.pdf",
            photoGalleryLink: "https://drive.google.com/file/d/1NnAVNkr9eCRw9PNYrU0MoXNYzwoRiHTa/view",
        },
    ]
    return (
        <Grid container columnSpacing={3} columns={{ sm: 12, md: 12, lg: 12 }}>
            {tourPackages?.map((item, index) => (
                <Grid item key={index} sm={6} md={3} lg={3} className="w-100">
                    <CardTravelPackage item={item} />
                </Grid>
            ))}
        </Grid>
    )
}
