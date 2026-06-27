import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import smallLogo from '../../assets/smallLogo.svg';
import { 
    FooterHeadings,
    FooterCategories,
    SocialMediaLinks,
    IconGooglePlay,
    IconAppleStore,
    LargeCaptainAvatar } from "../../constants/constants";

import type { FooterHeadingsFormat, LinkFormat, SocialMediaFormat } from "../../constants/constants";

function Footer ()
{
    return(
        <Box>
            {/* Footer Links */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 4,
                }}
            >
                {FooterHeadings.map((heading: FooterHeadingsFormat, index: number) => (
                    <Box
                        key={index}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                    >
                        <Typography>{heading.text}</Typography>

                        {FooterCategories[index].map((link: LinkFormat, i: number) => (
                            <Link href={link.url} key={i}>
                                {link.text}
                            </Link>
                        ))}
                    </Box>
                ))}
            </Box>

            {/* Social Media Links */}
            <Box sx={{ display: "flex", alignContent:"center" }} >
                <Box>
                    {SocialMediaLinks.map((icon: SocialMediaFormat, index: number) => 
                        <Link href={icon?.url} key={index}>
                            <img src={icon.icon} alt="social media icon" width={40}></img>
                        </Link>
                    )}
                </Box>
                <Box>
                    <Link href={IconAppleStore?.url}>
                        <img src={IconAppleStore.icon} width={133}></img>
                    </Link>
                    <Link href={IconGooglePlay?.url}>
                        <img src={IconGooglePlay.icon} width={150}></img>
                    </Link>
                    <Box
                        component="img"
                        src={LargeCaptainAvatar.path}
                        alt="avatar icon"

                        sx={{
                            position: "absolute",
                            right: 500,          // Shifts it slightly outside the row boundary to overlap beautifully
                            bottom: -10,         // Sits flush or below the alignment path
                            width: 90,           // Use explicit layout dimensions instead of layout-altering percentages
                            height: 90,
                            objectFit: 'contain',
                            pointerEvents: 'none' // Ensures users
                        }}
                    />
                </Box>
            </Box>

            <Divider />
        </Box>
    )
}

export default Footer;