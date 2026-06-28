import { Typography, Box } from "@mui/material"
import { TrustPilotStars, TrustPilotLogo } from "../../constants/constants"

function TrustPilot ()
{
    return(
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 1,
                py: 2,
                bgcolor: "accent.main",
            }}
        >
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
