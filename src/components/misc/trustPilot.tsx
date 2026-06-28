//MUI
import { Typography, Box } from "@mui/material"
//assets
import { TrustPilotStars, TrustPilotLogo } from "../../constants/constants"
//theme components
import { flexCenter } from "../../theme/theme"


/*
    This component is the TrustPilot marketing box below the hero component. It comprises of some icons and
    simple typography components.
*/
function TrustPilot ()
{
    return(
        <Box sx={{ ...flexCenter, flexWrap: "wrap", gap: 1, py: 2, bgcolor: "accent.main" }}>
            <Typography sx={{ fontWeight: 700, fontSize: "0.9375rem", lineHeight: 1, color: "text.primary" }}>
                Excellent
            </Typography>
            <Box
                component="img"
                src={TrustPilotStars.path}
                alt="Trustpilot rating: 4.6 out of 5 stars"
                sx={{ height: 28, width: "auto", display: "block" }}
            />
            <Typography sx={{ fontSize: "0.8125rem", lineHeight: 1, color: "text.secondary" }}>
                <Box component="span" sx={{ fontWeight: 700 }}>4.6</Box> out of 5 stars
            </Typography>
            <Box
                component="img"
                src={TrustPilotLogo.path}
                alt="Trustpilot"
                sx={{ height: 22, width: "auto", display: "block" }}
            />
        </Box>
    )
}

export default TrustPilot;
