import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const DISCLAIMER_TEXT =
    "Displayed fares exclude Online Booking Fee & Merchant Fee. Fees are applied once at checkout."

function Disclaimer()
{
    return(
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 0.75,
                mt: 1.5,
                p: 1.5,
                bgcolor: "accent.main",
                borderRadius: "12px",
            }}
        >
            <InfoOutlinedIcon sx={{ fontSize: "1rem", mt: "1px" }} />
            <Typography sx={{ fontSize: "0.75rem", lineHeight: 1.5 }}>
                {DISCLAIMER_TEXT}
            </Typography>
        </Box>
    )
}

export default Disclaimer;
