import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import DialogTravalePackageDetails from "src/pages/travel_packages/malcentral/components/dialogs/DialogTravalePackageDetails"

export default function CardTravelPackage({ item }) {
    const { banner, tourCode, tourCaption, tourTitle, link } = item
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <DialogTravalePackageDetails
                isOpen={isOpen}
                item={item}
                handleClose={() => setIsOpen(false)}
            />
            <Card className="mb-4">
                <CardMedia component="img" height="140" image={banner} alt={tourCode} />
                <CardContent className="text-center p-3">
                    <Typography variant="caption" color="text.secondary">
                        {tourCaption}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        className="mt-2 mb-2"
                        sx={{ minHeight: "40px", lineHeight: "1.2" }}
                    >
                        {tourTitle}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Tour Code: {tourCode}
                    </Typography>
                </CardContent>
                <CardActions className="pb-3">
                    <Button
                        variant="contained"
                        size="small"
                        className="mx-auto"
                        onClick={() => setIsOpen(true)}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
