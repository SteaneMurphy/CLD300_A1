import { AppBar, Toolbar, Box, Typography, Link, Container } from "@mui/material";
import mainLogo from '../../assets/mainLogo.svg';
import captainAvatar from '../../assets/captainAvatarLogo.png';
import { TopHeaderLinks, BottomHeaderLinks, BottomHeaderContactLinks } from '../../constants/constants.ts';
import type { LinkFormat } from "../../constants/constants.ts";
import theme from "../../theme/theme.ts";

function Header () 
{
    return (
        <AppBar position="static" sx={{ paddingTop: 2, paddingBottom: 5 }}>

            <Toolbar disableGutters sx={{ minHeight: 0, py: 1.5 }}>
              <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Main Logo */}
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "top"}}>
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            overflow: "hidden",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
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
                        <Typography>Your centre for travel</Typography>
                    </Box>
                </Box>

                {/* Top Links */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    {TopHeaderLinks.map((link:LinkFormat, index: number) =>
                        <Link key={index} href={link.url} sx={{ color: theme.palette.primary.contrastText, textDecorationColor: theme.palette.primary.contrastText }}>
                            {link.icon && (
                            <img src={link.icon} alt={`${link.text} icon`} height={20} />
                            )}
                            {link.text}
                        </Link>
                    )}
                </Box>
              </Container>
            </Toolbar>

            <Toolbar disableGutters sx={{ minHeight: 0, py: 1 }}>
              <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Bottom Links */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    {BottomHeaderLinks.map((link:LinkFormat, index: number) =>
                        <Link key={index} href={link.url} sx={{ color: theme.palette.primary.contrastText, textDecorationColor: theme.palette.primary.contrastText }}>
                            {link.icon && (
                            <img src={link.icon} alt={`${link.text} icon`} height={20} />
                            )}
                            {link.text}
                        </Link>
                    )}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    {BottomHeaderContactLinks.map((link:LinkFormat, index: number) =>
                        <Link key={index} href={link.url} sx={{ color: theme.palette.primary.contrastText, textDecorationColor: theme.palette.primary.contrastText }}>
                            {link.icon && (
                            <img src={link.icon} alt={`${link.text} icon`} height={20} />
                            )}
                            {link.text}
                        </Link>
                    )}
                </Box>
              </Container>
            </Toolbar>

        </AppBar>
    )
}

export default Header;