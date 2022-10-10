import React, { useEffect } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import Button from "@mui/material/Button"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { RiMap2Line, RiMoneyDollarCircleLine, RiFlightTakeoffFill } from "react-icons/ri"
import { TiDocumentText } from "react-icons/ti"
import { BsImages, BsCurrencyDollar } from "react-icons/bs"

import FormContactUs from "src/pages/travel_packages/malcentral/components/forms/FormContactUs"

export default function DialogTravalePackageDetails({ isOpen, handleClose, item }) {
    const {
        tourTitle,
        banner,
        tourCode,
        pdfLink,
        tourFareLink,
        flightDetailsLink,
        termAndConditionLink,
        photoGalleryLink,
    } = item

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Dialog open={isOpen} onClose={handleClose} maxWidth="md">
            <DialogTitle className="m-auto d-flex">
                <Typography variant="h5" color="primary">
                    {tourTitle}
                </Typography>
                <Typography
                    variant="caption"
                    component="div"
                    className="mx-2 d-flex align-items-lg-center"
                >
                    (Tour Code: <b>{tourCode}</b>)
                </Typography>
            </DialogTitle>

            <DialogContent>
                <CardMedia
                    component="img"
                    // sx={{ width: "100%" }}
                    height="300px"
                    image={banner}
                    alt={tourCode}
                />

                <Box className="mt-4 mb-5 d-flex justify-content-center">
                    <a
                        className="text-decoration-none text-white"
                        href={pdfLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Button variant="outlined" disableElevation disableRipple>
                            <RiMap2Line className="mx-1" size="1.4rem" />
                            <Typography variant="subtitle1">Itinerary</Typography>
                        </Button>
                    </a>

                    <a
                        className="text-decoration-none text-white mx-2"
                        href={tourFareLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Button variant="outlined" disableElevation disableRipple>
                            <BsCurrencyDollar size="1.1em" />
                            <Typography variant="subtitle1">Tour Fare</Typography>
                        </Button>
                    </a>

                    <a
                        className="text-decoration-none text-white"
                        href={flightDetailsLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Button variant="outlined" disableElevation disableRipple>
                            <RiFlightTakeoffFill className="mx-1" size="1.4rem" />
                            <Typography variant="subtitle1">Flight Details</Typography>
                        </Button>
                    </a>

                    <a
                        className="text-decoration-none text-white mx-2"
                        href={termAndConditionLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Button variant="outlined" disableElevation disableRipple>
                            <TiDocumentText className="mx-1" size="1.4rem" />
                            <Typography variant="subtitle1">Terms & Conditions</Typography>
                        </Button>
                    </a>

                    <a
                        className="text-decoration-none text-white"
                        href={photoGalleryLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Button variant="outlined" disableElevation disableRipple>
                            <BsImages className="mx-1" size="1.1rem" />
                            <Typography variant="subtitle1">Photo Gallery</Typography>
                        </Button>
                    </a>
                </Box>

                <Box className="m-4">
                    <Typography variant="h4" className="text-center mb-4">
                        Need An Enquiry From Us?
                    </Typography>
                    <FormContactUs />
                </Box>
            </DialogContent>
        </Dialog>
    )
}
