import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";
import mainLogo from '../../assets/mainLogo.svg';
import captainAvatar from '../../assets/captainAvatarLogo.png';
import { TopHeaderLinks, BottomHeaderLinks, BottomHeaderContactLinks } from '../../constants/constants.ts';
import type { LinkFormat } from "../../constants/constants.ts";
import React from "react";

function Header () 
{
    return (
        <AppBar position="fixed">

            <Toolbar>
                {/* Main Logo */}
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "top"}}>
                    <Box sx={{ borderRadius: 50 }}>
                        <img src={captainAvatar} alt="captain avatar" height={40} width={40} />
                    </Box>
                    <Box>
                        <img src={mainLogo} alt="main logo" height={20} />
                        <Typography>Your centre for travel</Typography>
                    </Box>
                </Box>

                {/* Top Links */}
                <Box>
                    {TopHeaderLinks.map((link:LinkFormat, index: number) => 
                        <React.Fragment key={index}>
                            {link.icon && (
                            <img src={link.icon} alt={`${link.text} icon`} height={20} />
                            )}
                            
                            <Link href={link.url}>
                            {link.text}
                            </Link>
                        </React.Fragment>
                    )}
                </Box>
            </Toolbar>

            <Toolbar>
                {/* Bottom Links */}
                <Box>
                    {BottomHeaderLinks.map((link:LinkFormat, index: number) =>
                        <React.Fragment key={index}>
                            {link.icon && (
                            <img src={link.icon} alt={`${link.text} icon`} height={20} />
                            )}
                            
                            <Link href={link.url}>
                            {link.text}
                            </Link>
                        </React.Fragment>
                    )}
                </Box>

                <Box>
                    {BottomHeaderContactLinks.map((link:LinkFormat, index: number) => 
                        <React.Fragment key={index}>
                            {link.icon && (
                            <img src={link.icon} alt={`${link.text} icon`} height={20} />
                            )}
                            
                            <Link href={link.url}>
                            {link.text}
                            </Link>
                        </React.Fragment>
                    )}
                </Box>
            </Toolbar>

        </AppBar>
    )
}

export default Header;