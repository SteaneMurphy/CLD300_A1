import { useEffect, useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { HeroOverlays } from '../../constants/constants';

const SLIDE_MS = 5000;
const FADE_MS = 800;

function Hero ()
{
    const [index, setIndex] = useState(0);

    useEffect(() => {
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
                height: { xs: 360, sm: 440, md: 520 },
                overflow: 'hidden',
                bgcolor: 'secondary.dark',
            }}
        >
            {/* Full-bleed background images (crossfade) */}
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
                        transition: `opacity ${FADE_MS}ms ease-in-out`,
                    }}
                />
            ))}

            {/* Overlay graphic, aligned to the page gutters */}
            <Container sx={{ position: 'relative', height: '100%' }}>
                <Box sx={{ position: 'relative', height: '100%' }}>
                    {HeroOverlays.map((slide, i) => (
                        <Box
                            key={i}
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
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

            {/* Slide indicators */}
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                }}
            >
                {HeroOverlays.map((_, i) => (
                    <Box
                        key={i}
                        role="button"
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setIndex(i)}
                        sx={{
                            width: i === index ? 26 : 10,
                            height: 10,
                            borderRadius: 5,
                            bgcolor: i === index ? 'primary.main' : 'rgba(255,255,255,0.7)',
                            cursor: 'pointer',
                            transition: 'all 250ms ease',
                            '&:hover': { bgcolor: i === index ? 'primary.main' : 'rgba(255,255,255,0.95)' },
                        }}
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default Hero;
