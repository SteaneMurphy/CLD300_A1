//React
import { useState } from 'react';
//MUI
import {
    Box,
    Container,
    Stack,
    Button,
    Typography,
    Switch,
    Divider,
    IconButton,
} from '@mui/material';
//assets
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KingBedIcon from '@mui/icons-material/KingBed';
//theme components
import { cardSurface } from '../../theme/theme';

/*
    Temporary constant values. The functionality for the drop-down menu on this search bar has not
    been implemented. The values are for looks. A functional site would have multiple selectable
    values in a drop-down component, which would be updated in using either local or global state.
*/
const TRIP_OPTIONS = ['Return', '1 traveller', 'Economy'];



/*
    This component acts as the main flight searchbar. The component functionality is not complete as
    it is a very complex component. Missing functionality includes drop-down menus for each clickable
    input, and a toggle to change the search type from flights to accomodation. Building out this
    component further would take too long for the scope of this assignment.
*/
function FlightSearchBar ()
{
    const [addStay, setAddStay] = useState(false);                                                              //proposed state for changing searchbar type

    return (
        <Container sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ ...cardSurface, p: { xs: 2, md: 3 } }}>
                
                {/* Top options row */}
                <Stack
                    direction="row"
                    sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mb: 2 }}
                >
                    <Stack direction="row" spacing={{ xs: 2, md: 4 }} sx={{ flexWrap: 'wrap' }}>
                        {TRIP_OPTIONS.map((label) => (
                            <Button
                                key={label}
                                disableRipple
                                endIcon={<KeyboardArrowDownIcon />}
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    textDecoration: 'underline',
                                    textUnderlineOffset: 4,
                                    px: 0,
                                    minWidth: 0,
                                    '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Stack>

                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <KingBedIcon sx={{ color: 'success.main', fontSize: 20 }} />
                        <Typography sx={{ color: 'success.main', fontWeight: 600 }}>
                            Add a stay and save
                        </Typography>
                        <Switch
                            checked={addStay}
                            onChange={(e) => setAddStay(e.target.checked)}
                            color="success"
                            slotProps={{ input: { 'aria-label': 'Add a stay and save' } }}
                        />
                    </Stack>
                </Stack>

                {/* Search row */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    sx={{ alignItems: 'stretch' }}
                >
                    {/* Input pill */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        sx={{
                            alignItems: 'stretch',
                            flexGrow: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 2,
                            px: 2,
                            py: 1,
                        }}
                    >
                        {/* Origin */}
                        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flex: 1, minWidth: 0 }}>
                            <FlightTakeoffIcon sx={{ color: 'text.secondary' }} />
                            <Typography sx={{ color: 'text.primary', fontWeight: 500 }} noWrap>
                                Cairns, Australia
                            </Typography>
                        </Stack>

                        {/* Swap */}
                        <Stack sx={{ justifyContent: 'center', px: 1 }}>
                            <IconButton
                                aria-label="Swap origin and destination"
                                sx={{
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: 'background.default',
                                    '&:hover': { bgcolor: 'background.default', color: 'primary.main' },
                                }}
                            >
                                <SwapHorizIcon />
                            </IconButton>
                        </Stack>

                        {/* Destination */}
                        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flex: 1, minWidth: 0 }}>
                            <LocationOnIcon sx={{ color: 'text.secondary' }} />
                            <Typography sx={{ color: 'text.secondary' }} noWrap>
                                Where to?
                            </Typography>
                        </Stack>

                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ mx: 2, display: { xs: 'none', sm: 'block' } }}
                        />

                        {/* Dates */}
                        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flex: 1, minWidth: 0 }}>
                            <CalendarMonthIcon sx={{ color: 'text.secondary' }} />
                            <Typography sx={{ color: 'text.primary', fontWeight: 500 }} noWrap>
                                Fri, 3 July - Sun, 5 July
                            </Typography>
                        </Stack>
                    </Stack>

                    {/* Search button */}
                    <Button variant="cta" sx={{ py: { xs: 1.5, md: 0 } }}>
                        Search flights
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default FlightSearchBar;
