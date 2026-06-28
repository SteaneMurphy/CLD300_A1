//MUI
import { Box, Container, Divider, Link, Typography } from "@mui/material";
//components
import FooterLinks from "./footerLinks";
//assets
import {
    FooterHeadings,
    FooterCategories,
    SocialMediaLinks,
    IconGooglePlay,
    IconAppleStore,
    LargeCaptainAvatar, 
    SmallLogo } from "../../constants/constants";
import type { SocialMediaFormat } from "../../constants/constants";
//theme components
import { flexBetween, flexAlignCenter } from "../../theme/theme";



/*
    This component acts as the site footer. Similar to the 'header.tsx' component, it populates its
    links via its subcomponent 'footerLinks.tsx'. Further explanation in that component.

    The component also populates the social media and copyright informational as well. The 'map' function
    is used to loop through an array of social media icons (url: blank). The MUI component used for this
    is a 'Link' component with an attatched image set by 'href'.

    The bottom text informational is just simple text, using the typography component.
*/
function Footer ()
{
    return(
        <Box component="footer" sx={{ bgcolor: "accent.main", py: { xs: 5, md: 7 } }}>
          <Container>
            
            {/* Footer Logo */}
            <Box component="img" src={SmallLogo.path} sx={{ width: 150, paddingBottom: 5 }} />

            {/* Footer Links */}
            <FooterLinks headings={FooterHeadings} categories={FooterCategories} />

            {/* Social Media + App badges */}
            <Box sx={{ ...flexBetween, position: 'relative', flexWrap: 'wrap', gap: 3 }}>
                <Box sx={{ ...flexAlignCenter, gap: 1.5 }}>
                    {SocialMediaLinks.map((icon: SocialMediaFormat, index: number) =>
                        <Link
                            href={icon?.url}
                            key={index}
                            sx={{ display: 'inline-flex', opacity: 0.85, '&:hover': { opacity: 1 } }}
                        >
                            <Box component="img" src={icon.icon} alt="social media icon" sx={{ width: 32, height: 32 }} />
                        </Link>
                    )}
                </Box>

                <Box sx={{ ...flexAlignCenter, gap: 1.5 }}>
                    <Link href={IconAppleStore?.url} sx={{ display: 'inline-flex' }}>
                        <Box component="img" src={IconAppleStore.icon} alt="Download on the App Store" sx={{ height: 40, width: 'auto' }} />
                    </Link>
                    <Link href={IconGooglePlay?.url} sx={{ position: 'relative', display: 'inline-flex' }}>
                        <Box component="img" src={IconGooglePlay.icon} alt="Get it on Google Play" sx={{ height: 40, width: 'auto' }} />

                        <Box
                            component="img"
                            src={LargeCaptainAvatar.path}
                            alt=""
                            aria-hidden="true"
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                bottom: '100%',
                                transform: 'translateX(-50%)',
                                width: 90,
                                height: 90,
                                objectFit: 'contain',
                                pointerEvents: 'none',
                                display: { xs: 'none', md: 'block' },
                            }}
                        />
                    </Link>
                </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Bottom bar */}
            <Typography variant="body2">
                © {new Date().getFullYear()} Flight Centre Travel Group Limited. All rights reserved.
            </Typography>
          </Container>
        </Box>
    )
}

export default Footer;
