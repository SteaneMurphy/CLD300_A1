//MUI
import { Box, Link, Typography } from "@mui/material";
//components
import type { FooterHeadingsFormat, LinkFormat } from "../../constants/constants";


/*
    This component takes in an array of footer headings and a matching array of link arrays
    (one link array per heading) and loops over them to populate the footer's link columns.
    The method used to loop is the 'map' function, which will index through each heading and
    generate a column containing the heading text and its related links.

    The headings and their links are stored in 'constants.ts' so that they are not hardcoded
    into the application, can be changed in one spot, and are easy to adjust if a less technical
    person needed to make content changes.

    The styling is applied from its parent component 'footer.tsx'.
*/
function FooterLinks ({ headings, categories }: { headings: FooterHeadingsFormat[], categories: LinkFormat[][] })
{
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 4,
            }}
        >
            {headings.map((heading: FooterHeadingsFormat, index: number) => (
                <Box
                    key={index}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}
                >
                    <Typography
                        sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', mb: 0.5 }}
                    >
                        {heading.text}
                    </Typography>

                    {categories[index].map((link: LinkFormat, i: number) => (
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
    );
}

export default FooterLinks;
