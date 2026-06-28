//MUI
import { Box, Link } from "@mui/material";
//components
import type { LinkFormat } from "../../constants/constants";
//theme components
import { flexAlignCenter } from "../../theme/theme";


/*
    This component takes in an array of links (or an object of links) and loops over this
    array to populate said links into the header component. The method used to loop is the 
    'map' function, which will index through each item given in its prop and generate the
    relevant code for each item.

    In this case, the code is generating a new 'Link' MUI component, setting its index and url (blank),
    as well as assiging the link's text. The link objects are stored in one file 'constants.ts' so that
    they are not hardcoded into the application, can be changed in one spot, and easy to adjust if a
    less technical person needed to make content changes.

    The syling is applied from its parent component 'header.tsx'.
*/
function HeaderLinks ({ links }: { links: LinkFormat[] })
{
    return (
        <Box sx={{ ...flexAlignCenter, gap: 0 }}>
            {links.map((link: LinkFormat, index: number) =>
                <Link
                    key={index}
                    href={link.url}
                    color="inherit"
                    sx={{
                        ...flexAlignCenter,
                        gap: 0.5,
                        px: 2,
                        py: 1.5,
                        borderRadius: 1,
                        textDecoration: "none",
                        "&:hover": {
                            backgroundColor: "primary.dark",
                        },
                    }}
                >
                    {link.icon && (
                        <img src={link.icon} alt={`${link.text} icon`} height={20} />
                    )}
                    {link.text}
                </Link>
            )}
        </Box>
    );
}

export default HeaderLinks;