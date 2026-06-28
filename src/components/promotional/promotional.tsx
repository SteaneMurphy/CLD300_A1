//React
import { useRef } from "react";
//MUI
import { Box, Typography, IconButton, Container, Link } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//components
import Disclaimer from "../misc/disclaimer";
import PriceTicker from "../misc/priceTicker";
//assets
import type { PromotionalFormat } from "../../constants/constants";
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
    disclaimer: boolean,
    content: PromotionalFormat[],
    longForm?: boolean,
    porthole?: boolean,
    priceTicker?: boolean
}

const CARD_GAP = 16;



/*
    This component is the main promotional carousel content display. It is designed to be
    extendable and re-usable for different content layouts via the type 'PromotionalProps'.

    The main feature of this component is the carousel which is incremented and decremented by two
    buttons on the top-right.

    The cateogry heading is sent in as a prop from an object resource (constants.ts).
*/
function Promotional ({ heading, disclaimer, content, longForm, porthole, priceTicker }: PromotionalProps)
{
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") =>
    {
        const track = trackRef.current;
        if (!track) return;
        /*
            This code takes the current indexed cards width and calculates the offset so that it fits
            inside the carousel correctly. This tells the carousel how far to scroll so that the component cards
            line up correctly and don't overlap the edges.

            It works by taking the card width and hardcoded 'CARD_GAP' to calulate the step required for one card.
            The value calculated by the step calculation is used to then determine how many cards should be visible.
        */
        const firstCard = track.firstElementChild as HTMLElement | null;
        const cardWidth = firstCard ? firstCard.offsetWidth : track.clientWidth;
        const step = cardWidth + CARD_GAP;
        const visibleCards = Math.max(1, Math.round((track.clientWidth + CARD_GAP) / step));
        const maxScroll = track.scrollWidth - track.clientWidth;

        if (direction === "right")
        {
            /*
                If when the user clicks right, the 'maxScroll' variable is lower than the
                current scrollLeft, the container has reached the last visible cards.

                It then scrolls the cards back to the first-most card, otherwise it scrolls
                by another step.
            */
            if (track.scrollLeft >= maxScroll - 1)
            {
                track.scrollTo({ left: 0, behavior: "smooth" });
                return;
            }
            track.scrollBy({ left: step * visibleCards, behavior: "smooth" });
        }
        else
        {
            /*
                Same as above but in reverse when the user clicks the left button
            */
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
        the built in arrow buttons (Chevron).

        There is conditional rendering depending on what parameters were set to
        true in the component when rendered.

        - porthole: turns the card into a circle (not yet implemented)
        - longForm: creates a long retangular card
        - default: creates a standard sized card
        - priceTicker: renders the PriceTicker component
        - disclaimer: renders a disclaimer with given text

        For example, when setting 'longForm' to true, the height of the card is
        adjusted to 400px, and if the parameter 'priceTicker' is set to false, it
        does not render the pricing components of this component. This is determined
        by the '&&' operator which only renders the JSX following a truthy parameter.
    */
    return(
        <Box component="section" sx={{ py: 4 }}>
            <Container>
                <Box sx={{ ...flexBetween, mb: 2 }}>
                    <Typography variant="h3" component="h2">
                        {heading}
                    </Typography>

                    <Box sx={{ ...flexAlignCenter, gap: 1 }}>
                        <Link
                            href="#"
                            underline="always"
                            sx={{
                                mr: 1,
                                fontWeight: 600,
                                color: "text.primary",
                                whiteSpace: "nowrap",
                                textDecorationColor: (theme) => theme.palette.text.primary,
                                "&:hover": { textDecorationColor: (theme) => theme.palette.text.primary },
                            }}
                        >
                            See all
                        </Link>

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
                        {content.map((deal, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            borderRadius: 2,
                            overflow: "hidden",
                            flex: {
                                xs: "0 0 100%",
                                sm: `0 0 calc((100% - ${CARD_GAP}px) / 2)`,
                                md: longForm
                                    ? `0 0 calc((100% - ${3 * CARD_GAP}px) / 4)`
                                    : `0 0 calc((100% - ${2 * CARD_GAP}px) / 3)`,
                            },
                            height: longForm ? 400 : 160,
                            scrollSnapAlign: "start",
                        }}
                    >
                        <Box
                            component="img"
                            src={deal.path}
                            alt={deal.route}
                            sx={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                        />

                        {priceTicker && (
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
                        )}

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
