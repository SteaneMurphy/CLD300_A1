import { Box, Container, Divider, Link, Typography } from "@mui/material";
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
        <Box component="footer" sx={{ bgcolor: "accent.main", py: { xs: 5, md: 7 } }}>
          <Container>
            {/* Footer Links */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                    gap: 4,
                }}
            >
                {FooterHeadings.map((heading: FooterHeadingsFormat, index: number) => (
                    <Box
                        key={index}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}
                    >
                        <Typography
                            sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', mb: 0.5 }}
                        >
                            {heading.text}
                        </Typography>

                        {FooterCategories[index].map((link: LinkFormat, i: number) => (
                            <Link
                                href={link.url}
                                key={i}
                                sx={{
                                    color: 'text.primary',
                                    fontSize: '0.875rem',
                                    fontWeight: 400,
                                    width: 'fit-content',
                                    '&:hover': { textDecoration: 'none' },
                                }}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </Box>
                ))}
            </Box>

            {/* Social Media + App badges */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 3,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
            <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary' }}>
                © {new Date().getFullYear()} Flight Centre Travel Group Limited. All rights reserved.
            </Typography>
          </Container>
        </Box>
    )
}

export default Footer;
