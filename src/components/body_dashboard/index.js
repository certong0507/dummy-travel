import React from "react"
import BodyDashboardDesktop from "src/components/body_dashboard/BodyDashboardDesktop"
import BodyDashboardMobileLandscape from "src/components/body_dashboard/BodyDashboardMobileLandscape"
import BodyDashboardMobilePortrait from "src/components/body_dashboard/BodyDashboardMobilePortrait"
import BodyDashboardTablet from "src/components/body_dashboard/BodyDashboardTablet"

export default function index() {
    return (
        <>
            <BodyDashboardDesktop />
            <BodyDashboardMobileLandscape />
            <BodyDashboardMobilePortrait />
            <BodyDashboardTablet />
        </>
    )
}
