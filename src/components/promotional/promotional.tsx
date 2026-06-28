//React
import { useRef } from "react";
//MUI
import { Box, Typography, IconButton, Container } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//components
import Disclaimer from "../misc/disclaimer";
import PriceTicker from "../misc/priceTicker";
//assets
import { PromotionalFlightDeals } from "../../constants/constants";
//theme components
import { flexBetween, flexAlignCenter, carouselButton } from "../../theme/theme";



/*
    Promotion component typing. This interface is intended to be extendable so that
    it can be used in different formats for different layouts of content. For example,
    the component is currently setup to display 'Flight Deals', but would include optional
    props to allow for different content layouts.

    The idea behind this design is to limit the creation of a component for each type of
    promotional carousel on the site, and to re-use existing component design.
*/
interface PromotionalProps
{
    heading: string,
    disclaimer: boolean
}

const CARD_GAP = 16;



/*
    This component is the main promotional carousel content display. It is designed to be
    extendable and re-usable for different content layouts via the type 'PromotionalProps'.

    The main feature of this component is the carousel which is incremented and decremented by two
    buttons on the top-right.

    The cateogry heading is sent in as a prop from an object resource (constants.ts).
*/
function Promotional ({ heading, disclaimer }: PromotionalProps)
{
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") =>
    {
        const track = trackRef.current;
        if (!track) return;
        // Measure the rendered card width so paging stays correct at any
        // screen size, then page by the number of whole cards on screen so
        // no partially-clipped card is ever left visible.
        const firstCard = track.firstElementChild as HTMLElement | null;
        const cardWidth = firstCard ? firstCard.offsetWidth : track.clientWidth;
        const step = cardWidth + CARD_GAP;
        const visibleCards = Math.max(1, Math.round((track.clientWidth + CARD_GAP) / step));
        const maxScroll = track.scrollWidth - track.clientWidth;

        if (direction === "right")
        {
            // At (or past) the end → loop back to the first card.
            if (track.scrollLeft >= maxScroll - 1)
            {
                track.scrollTo({ left: 0, behavior: "smooth" });
                return;
            }
            track.scrollBy({ left: step * visibleCards, behavior: "smooth" });
        }
        else
        {
            // At the start → loop to the end.
            if (track.scrollLeft <= 1)
            {
                track.scrollTo({ left: maxScroll, behavior: "smooth" });
                return;
            }
            track.scrollBy({ left: -step * visibleCards, behavior: "smooth" });
        }
    };

    /*
        The component contains use of multiple MUI components systems including
        the built in arrow buttons (Chevron)
    */
    return(
        <Box component="section" sx={{ py: 4 }}>
            <Container>
                <Box sx={{ ...flexBetween, mb: 2 }}>
                    <Typography variant="h3" component="h2">
                        {heading}
                    </Typography>

                    <Box sx={{ ...flexAlignCenter, gap: 1 }}>
                        <IconButton
                            aria-label="Previous deals"
                            onClick={() => scroll("left")}
                            sx={carouselButton}
                        >
                            <ChevronLeftIcon />
                        </IconButton>

                        <IconButton
                            aria-label="Next deals"
                            onClick={() => scroll("right")}
                            sx={carouselButton}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{ position: "relative" }}>
                    <Box
                        ref={trackRef}
                        sx={{
                            display: "flex",
                            gap: `${CARD_GAP}px`,
                            overflow: "hidden",
                            scrollSnapType: "x mandatory",
                            scrollBehavior: "smooth",
                        }}
                    >
                        {PromotionalFlightDeals.map((deal, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            borderRadius: 2,
                            overflow: "hidden",
                            // Responsive: 1 card on mobile, 2 on small, 3 on
                            // medium+, each sized so whole cards fill the row.
                            flex: {
                                xs: "0 0 100%",
                                sm: `0 0 calc((100% - ${CARD_GAP}px) / 2)`,
                                md: `0 0 calc((100% - ${2 * CARD_GAP}px) / 3)`,
                            },
                            height: 160,
                            scrollSnapAlign: "start",
                        }}
                    >
                        <Box
                            component="img"
                            src={deal.path}
                            alt={deal.route}
                            sx={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                        />

                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                color: "common.white",
                                background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0) 55%)",
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 1 }}>
                                {[deal.route, deal.quality].map((text, i) => (
                                    <Typography
                                        key={i}
                                        variant="body1"
                                        sx={{
                                            display: "inline-block",
                                            textTransform: "uppercase",
                                            textAlign: "center",
                                            bgcolor: "primary.main",
                                            color: "primary.contrastText",
                                            px: 1,
                                            py: 0.25,
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                ))}
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "stretch", flexWrap: "wrap", gap: 0.5 }}>
                                <PriceTicker text={"RETURN FROM"} label vAlign="top" hAlign="left" />
                                <PriceTicker text={"$"} />
                                {String(deal.price).split("").map((char, charIndex) => (
                                    <PriceTicker key={charIndex} text={char} />
                                ))}
                                <PriceTicker text={"PER PERSON"} label hAlign="left" />
                            </Box>
                        </Box>

                    </Box>
                        ))}
                    </Box>
                </Box>

                {disclaimer && <Disclaimer text={"Displayed fares exclude Online Booking Fee & Merchant Fee. Fees are applied once at checkout."} />}
            </Container>
        </Box>
    )
}

export default Promotional;
