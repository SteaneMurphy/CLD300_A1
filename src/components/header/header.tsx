//MUI
import { AppBar, Toolbar, Box, Typography, Container } from "@mui/material";
//components
import { TopHeaderLinks, BottomHeaderLinks, BottomHeaderContactLinks } from '../../constants/constants.ts';
import HeaderLinks from "./headerLinks.tsx";
//assets
import mainLogo from '../../assets/mainLogo.svg';
import captainAvatar from '../../assets/captainAvatarLogo.png';
//theme components
import { flexCenter, flexBetween } from "../../theme/theme.ts";


/*
    This component utilises the following MUI components:

    - Appbar
    - Toolbar
    - Container
    - Box
    - Typography

    A the following custom component:

    - HeaderLinks

    The component is the site header which contains the main logo, text and navigation links for the
    FlightCentre site. Each link is generated at runtime by a loop function (map) within the HeaderLinks
    component (explained further there).
*/
function Header ()
{
    return (
        <AppBar>
            <Toolbar sx={{ py: 1.5 }}>
              <Container sx={flexBetween}>

                {/* Main Logo */}
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "top" }}>
                    <Box
                        sx={{
                            ...flexCenter,
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            overflow: "hidden",
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src={captainAvatar}
                            alt="captain avatar"
                            width={40}
                            height={40}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Box>
                    <Box>
                        <img src={mainLogo} alt="main logo" height={20} />
                        <Typography variant="body1">Your centre for travel</Typography>
                    </Box>
                </Box>

                {/* Top Links */}
                <HeaderLinks links={TopHeaderLinks} />
              </Container>
            </Toolbar>

            <Toolbar sx={{ py: 1 }}>
              <Container sx={flexBetween}>

                {/* Bottom Links */}
                <HeaderLinks links={BottomHeaderLinks} />
                <HeaderLinks links={BottomHeaderContactLinks} />
              </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
