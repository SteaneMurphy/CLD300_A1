import { Box, Divider, Typography } from "@mui/material"

interface PriceTickerProps
{
    text: string
    label?: boolean
    vAlign?: "top" | "center"
    hAlign?: "left" | "center" | "right"
}

function PriceTicker({ text, label = false, vAlign, hAlign }: PriceTickerProps)
{
    const verticalAlign = vAlign ?? (label ? "top" : "center");
    const horizontalAlign = hAlign ?? "center";
    return(
        <Box
            sx={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                width: 36,
                height: 52,
                bgcolor: "common.white",
                borderRadius: 0.5,
                overflow: "hidden",
            }}
        >
            {/* split-flap seam spanning the full width of the tile */}
            <Divider
                sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "50%",
                }}
            />

            {horizontalAlign !== "left" && (
                <Divider orientation="vertical" sx={{ height: 6, alignSelf: "center", mx: 0.5 }} />
            )}

            <Box
                sx={{
                    position: "relative",
                    flex: 1,
                    alignSelf: "stretch",
                    display: "flex",
                    alignItems: verticalAlign === "top" ? "flex-start" : "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    sx={{
                        position: "relative",
                        width: "100%",
                        fontWeight: label ? 700 : 800,
                        fontSize: label ? "0.5rem" : "2.25rem",
                        lineHeight: 1.1,
                        textAlign: horizontalAlign,
                        pl: horizontalAlign === "left" ? "2px" : 0,
                        pt: verticalAlign === "top" ? 0.5 : 0,
                        color: "primary.main",
                    }}
                >
                    {text}
                </Typography>
            </Box>

            <Divider orientation="vertical" sx={{ height: 6, alignSelf: "center", mx: 0.5 }} />
        </Box>
    )
}

export default PriceTicker;
