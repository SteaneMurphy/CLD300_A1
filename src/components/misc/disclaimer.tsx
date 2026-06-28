//MUI
import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface DisclaimerFormat
{
    text: string;
}



/*
    This component is a re-usable disclaimer component that can be popped into other components
    when a disclaimer is required. The layout is standardised by the design system and simply needs
    the disclaimer text sent in as a prop when populated.

    For this assignment, the text was hardcoded, in production, this text would be pulled from a 
    constants file linked to the specific promotion and populated automatically.
*/
function Disclaimer({text}: DisclaimerFormat)
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
            <Typography variant="body2">
                {text}
            </Typography>
        </Box>
    )
}

export default Disclaimer;
