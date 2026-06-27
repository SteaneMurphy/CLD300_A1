import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import type { OverlayFormat } from '../../constants/constants'; 
import { HeroOverlays } from '../../constants/constants';

function Hero ()
{
    const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setHeroIndex(prev => (prev + 1) % HeroOverlays.length);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return(
        <Box sx={{ position: 'relative', width: 400, height: 400 }}>
            {HeroOverlays[heroIndex].hero && (
                <Box
                    component="img"
                    src={HeroOverlays[heroIndex].hero}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            )}
            <Box
                component="img"
                src={HeroOverlays[heroIndex].overlay}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </Box>
    )   
}

export default Hero;