//React
import { useEffect, useState } from 'react';
//MUI
import { Box, Container } from '@mui/material';
//assets
import { HeroOverlays } from '../../constants/constants';
//theme components
import { flexCenter } from '../../theme/theme';

/*
    These values control the time inbetween changing the hero image and the
    time for the fade effect to last. (MS = milliseconds)
*/
const SLIDE_MS = 5000;
const FADE_MS = 800;



/*
    This component is the Hero or banner image at the top of the page. It is a carousel based
    component containing a large image and a smaller image overlay.

    The carousel:

    - This functionality utilises the React 'useState' hook to record and retrieve the current
      hero image index. A timer is run (setInterval) and when triggered, increments to the next
      hero image component, this in turn calls the 'setIndex' function which updates what index
      is currently being used by the 'useState' hook. Lastly, 'clearInterval' is triggered to reset
      the timer.

    - The hero image index is created and stored in the 'constants.ts' file. The reasoning for this
      is explained in 'HeaderLinks.tsx' (readibility, ease-of-use, central imports).

    - The 'useEffect' hook is also used to catch changes to the component. When the hero index is changed
      the hook is triggered and refreshes the component, displaying the new hero image and overlay. This
*/
function Hero ()
{
    const [index, setIndex] = useState(0);                                  //hero index state

    useEffect(() => {                                                       //carousel timer and index update hook
        const id = setInterval(() => {
            setIndex(prev => (prev + 1) % HeroOverlays.length);
        }, SLIDE_MS);
        return () => clearInterval(id);
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 460, sm: 560, md: 660 },
                overflow: 'hidden',
                bgcolor: 'secondary.dark',
            }}
        >
            {/* Main Hero image */}
            {HeroOverlays.map((slide, i) => (
                <Box
                    key={i}
                    component="img"
                    src={slide.hero}
                    alt=""
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: i === index ? 1 : 0,
                        transition: `opacity ${FADE_MS}ms ease-in-out`,     //FADE_MS value used here to determine the fade-out speed
                    }}
                />
            ))}

            {/* Overlay image */}
            <Container sx={{ position: 'relative', height: '100%' }}>
                <Box sx={{ position: 'relative', height: '100%' }}>
                    {HeroOverlays.map((slide, i) => (
                        <Box
                            key={i}
                            sx={{
                                ...flexCenter,
                                position: 'absolute',
                                inset: 0,
                                opacity: i === index ? 1 : 0,
                                transition: `opacity ${FADE_MS}ms ease-in-out`,
                                pointerEvents: 'none',
                            }}
                        >
                            <Box
                                component="img"
                                src={slide.overlay}
                                alt=""
                                sx={{
                                    width: { xs: '95%', sm: '88%', md: '82%' },
                                    maxWidth: 1000,
                                    height: 'auto',
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;
