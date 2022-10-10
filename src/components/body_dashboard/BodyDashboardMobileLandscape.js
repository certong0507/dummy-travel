import React, { Suspense } from "react"
import Grid from "@mui/material/Grid"
import { Outlet } from "react-router-dom"
import { CSpinner, CContainer } from "@coreui/react"

import { MobileLandscapeView } from "src/utils/functions"
import { AppSidebar } from "src/components"

export default function BodyDashboardMobileLandscape() {
    return (
        <MobileLandscapeView>
            <CContainer className="mt-5">
                <Grid container columns={{ lg: 12 }}>
                    <Grid item lg={6}>
                        <AppSidebar />
                    </Grid>
                    <Grid item lg={6}>
                        <Suspense fallback={<CSpinner color="rgb(237, 247, 237)" />}>
                            <Outlet />
                        </Suspense>
                    </Grid>
                </Grid>
            </CContainer>
        </MobileLandscapeView>
    )
}
