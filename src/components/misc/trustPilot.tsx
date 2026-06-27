import { Typography, Box } from "@mui/material"
import { TrustPilotStars, TrustPilotLogo } from "../../constants/constants"

function TrustPilot ()
{
    return(
        <Box sx={{ display: "flex", alignItems: "center"}}>
            <Typography>Excellent</Typography>
            <img src={TrustPilotStars.path} alt="trust pilot stars" height={40} width={40}></img>
            <Typography>4.6 out of 5</Typography>
            <img src={TrustPilotLogo.path} alt="trust pilot logo" height={40} width={40}></img>
        </Box>
    )
}

export default TrustPilot;