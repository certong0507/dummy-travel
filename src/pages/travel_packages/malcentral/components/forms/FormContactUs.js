import React from "react"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import Schema from "src/pages/travel_packages/malcentral/components/schemas/Schema"

export default function FormContactUs() {
    const { control, handleSubmit, trigger } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            subject: "",
            package: "",
            noOfPeople: "",
            message: "",
        },
        resolver: yupResolver(Schema),
        mode: "all",
    })

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            direction="row"
            className="mt-2"
        >
            <Grid item xs={12} sm={6} md={6}>
                <InputTableTextControl control={control} name="name" label="Name" />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <InputTableTextControl control={control} name="phoneNumber" label="Phone No." />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <InputTableTextControl control={control} name="email" label="Email" />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <InputTableTextControl control={control} name="subject" label="Subject" />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <InputTableTextControl control={control} name="package" label="Package" />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <InputTableTextControl control={control} name="noOfPeople" label="No. of People" />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <InputTableTextControl
                    control={control}
                    multiline
                    rows={4}
                    name="message"
                    label="Message"
                />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Button
                    disableRipple
                    onClick={handleSubmit}
                    autoFocus
                    variant="contained"
                    size="medium"
                    fullWidth
                >
                    Submit Form
                </Button>
            </Grid>
        </Grid>
    )
}
