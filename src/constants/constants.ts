//icons
import iconPhone from '../assets/iconPhone.png';
import iconArrow from '../assets/iconArrow.png';
import iconBed from '../assets/iconBed.png';
import iconBoat from '../assets/iconBoat.png';
import iconBus from '../assets/iconBus.png';
import iconCar from '../assets/iconCar.png';
import iconFlightStay from '../assets/iconFlightStay.png';
import iconLuggageTag from '../assets/iconLuggageTag.png';
import iconUmbrella from '../assets/iconUmbrella.png';
import iconFlight from '../assets/iconFlight.png';

//hero overlays
import overlayQueensland from '../assets/overlayQueensland.svg';
import overlayAsia from '../assets/overlayAsia.svg';
import overlayNewZealand from '../assets/overlayNewZealand.svg';
import overlayPackages from '../assets/overlayPackages.svg';
import overlayWorld360 from '../assets/overlayWorld360.svg';

//hero images
import heroAsia from '../assets/heroAsia.webp';
import heroQueensland from '../assets/heroQueensland.jpg';
import heroNewZealand from '../assets/heroNewZealand.jpg';
import heroPackages from '../assets/heroPackages.jpg';
import heroWorld360 from '../assets/heroWorld360.jpg';

//stand-alone assets
import trustPilotStars from '../assets/trustPilotStars.svg';
import trustPilotLogo from '../assets/trustPilotLogo.svg';
import iconFacebook from '../assets/iconFacebook.png';
import iconGooglePlay from '../assets/iconGooglePlay.svg';
import iconInstagram from '../assets/iconInstagram.png';
import iconLinkedIn from '../assets/iconLinkedin.png';
import iconPinterest from '../assets/iconPinterest.png';
import iconTickTok from '../assets/iconTiktok.svg';
import iconYoutube from '../assets/iconYoutube.png';
import iconAppleStore from '../assets/iconAppleStore.svg';
import largeCaptainAvatar from '../assets/largeCaptainAvatar.png';
import smallLogo from '../assets/smallLogo.svg';

//promotional
import promotionalBali from '../assets/promotionalBali.webp';
import promotionalBrisbane from '../assets/promotionalBrisbane.webp';
import promotionalMelbourne from '../assets/promotionalMelbourne.webp';
import promotionalPerth from '../assets/promotionalPerth.webp';
import promotionalSydney from '../assets/promotionalSydney.webp';
import promotionalTokyo from '../assets/promotionalTokyo.webp';
import dealAsia from '../assets/dealAsia.jpg';
import dealBonus from '../assets/dealBonus.jpg';
import dealFiji from '../assets/dealFiji.jpg';
import dealInternationalFlight from '../assets/dealInternationalFlight.jpg';
import dealLuxury from '../assets/dealLuxury.jpg';
import dealRewards from '../assets/dealRewards.jpg';



/*
    LINKS
*/
export interface LinkFormat 
{
    text: string;
    url: string;
    icon?: string;
}

export const TopHeaderLinks: LinkFormat[] = 
[
    {
        text: "Get the app",
        url: "",
    },
    {
        text: "Get a quote",
        url: ""
    },
    {
        text: "Help",
        url: "",
        icon: iconArrow
    },
    {
        text: "Manage booking",
        url: ""
    },
    {
        text: "Sign in",
        url: ""
    },
]

export const BottomHeaderLinks: LinkFormat[] =
[
    {
        text: "Flights",
        url: "",
        icon: iconFlight
    },
    {
        text: "Holidays",
        url: "",
        icon: iconUmbrella
    },
    {
        text: "Flights + Stays",
        url: "",
        icon: iconFlightStay
    },
    {
        text: "Stays",
        url: "",
        icon: iconBed
    },
    {
        text: "Tours",
        url: "",
        icon: iconBus
    },
        {
        text: "Cruises",
        url: "",
        icon: iconBoat
    },
    {
        text: "Deals",
        url: "",
        icon: iconLuggageTag
    },
    {
        text: "Cars",
        url: "",
        icon: iconCar
    },
    {
        text: "More",
        url: "",
        icon: iconArrow
    },
]

export const BottomHeaderContactLinks: LinkFormat[] = 
[
    {
        text: "Stores",
        url: ""
    },
    {
        text: "133 133",
        url: "",
        icon: iconPhone
    },
]



/*
    OVERLAYS
*/
export interface OverlayFormat
{
    hero?: string;
    overlay: string;
}

export const HeroOverlays: OverlayFormat[] = 
[
    {
        hero: heroQueensland,
        overlay: overlayQueensland
    },
    {
        hero: heroAsia,
        overlay: overlayAsia
    },
    {
        hero: heroNewZealand,
        overlay: overlayNewZealand
    },
    {
        hero: heroPackages,
        overlay: overlayPackages
    },
    {
        hero: heroWorld360,
        overlay: overlayWorld360
    }
]



/*
    STAND-ALONE ASSETS
*/
export interface StandAloneImageFormat
{
    path: string;
}

export const TrustPilotStars: StandAloneImageFormat = 
{
    path: trustPilotStars
}

export const TrustPilotLogo: StandAloneImageFormat = 
{
    path: trustPilotLogo
}

export const LargeCaptainAvatar: StandAloneImageFormat = 
{
    path: largeCaptainAvatar
}

export const SmallLogo: StandAloneImageFormat = 
{
    path: smallLogo
}



/*
    SOCIAL MEDIA ASSETS
*/
export interface SocialMediaFormat 
{
    icon: string,
    url?: string
}

export const IconFacebook: SocialMediaFormat = 
{
    icon: iconFacebook,
    url: ""
}

export const IconAppleStore: SocialMediaFormat = 
{
    icon: iconAppleStore,
    url: ""
}

export const IconGooglePlay: SocialMediaFormat = 
{
    icon: iconGooglePlay,
    url: ""
}

export const IconInstagram: SocialMediaFormat = 
{
    icon: iconInstagram,
    url: ""
}

export const IconLinkedIn: SocialMediaFormat = 
{
    icon: iconLinkedIn,
    url: ""
}

export const IconPinterest: SocialMediaFormat = 
{
    icon: iconPinterest,
    url: ""
}

export const IconTickTok: SocialMediaFormat = 
{
    icon: iconTickTok,
    url: ""
}

export const IconYoutube: SocialMediaFormat = 
{
    icon: iconYoutube,
    url: ""
}

export const SocialMediaLinks: SocialMediaFormat[] =
[
    IconFacebook,
    IconInstagram,
    IconTickTok,
    IconLinkedIn,
    IconYoutube,
    IconPinterest
]



/*
    FOOTER
*/
export interface FooterHeadingsFormat
{
    text: string;
}

export const FooterHeadings: FooterHeadingsFormat[] = 
[
    {
        text: "Site quick links"
    },
    {
        text: "Company"
    },
    {
        text: "Extras"
    },
    {
        text: "Help & support"
    },
]

export const FooterQuickLinks: LinkFormat[] = 
[
    {
        text: "Flights",
        url: ""
    },
    {
        text: "Stays",
        url: ""
    },
    {
        text: "Holidays",
        url: ""
    },
    {
        text: "Car hire",
        url: ""
    },
    {
        text: "Tours",
        url: ""
    },
    {
        text: "Cruises",
        url: ""
    },
    {
        text: "Rail",
        url: ""
    },
    {
        text: "Business Travel",
        url: ""
    },
    {
        text: "Publications",
        url: ""
    },
    {
        text: "Travel Blog",
        url: ""
    },
    {
        text: "Deals",
        url: ""
    },
]

export const FooterCompanyLinks: LinkFormat[] = 
[
    {
        text: "About us",
        url: ""
    },
    {
        text: "Corporate site",
        url: ""
    },
    {
        text: "Careers",
        url: ""
    },
    {
        text: "Flight Centre Foundation",
        url: ""
    },
    {
        text: "Advertising",
        url: ""
    },
]

export const FooterExtrasLinks: LinkFormat[] = 
[
    {
        text: "Captain's Pack",
        url: ""
    },
    {
        text: "Gift cards",
        url: ""
    },
    {
        text: "Holiday finance",
        url: ""
    },
    {
        text: "Insurance",
        url: ""
    },
    {
        text: "Online Captain's Pack",
        url: ""
    },
    {
        text: "Travel eSIM",
        url: ""
    },
    {
        text: "World360 Rewards",
        url: ""
    },
    {
        text: "Subscribe",
        url: ""
    },
]

export const FooterHelpSupportLinks: LinkFormat[] = 
[
    {
        text: "Help centre",
        url: ""
    },
    {
        text: "Contact us",
        url: ""
    },
    {
        text: "Store finder",
        url: ""
    },
    {
        text: "Privacy",
        url: ""
    },
    {
        text: "Cookies",
        url: ""
    },
    {
        text: "Insurance claim process",
        url: ""
    },
]

export const FooterCategories = 
[
    FooterQuickLinks,
    FooterCompanyLinks,
    FooterExtrasLinks,
    FooterHelpSupportLinks
]



/*
    PROMOTIONAL
*/
export interface PromotionalFormat
{
    path: string,
    url: string,
    price?: number,
    route?: string,
    quality?: string
}

export const PromotionalFlightDeals: PromotionalFormat[] = 
[
    {
        path: promotionalBali,
        url: "",
        price: 1153,
        route: "cairns to bali",
        quality: "economy class"
    },
    {
        path: promotionalBrisbane,
        url: "",
        price: 202,
        route: "cairns to brisbane",
        quality: "economy class"
    },
    {
        path: promotionalMelbourne,
        url: "",
        price: 277,
        route: "cairns to melbourne",
        quality: "economy class"
    },
    {
        path: promotionalPerth,
        url: "",
        price: 721,
        route: "cairns to perth",
        quality: "economy class"
    },
    {
        path: promotionalSydney,
        url: "",
        price: 232,
        route: "cairns to sydney",
        quality: "economy class"
    },
    {
        path: promotionalTokyo,
        url: "",
        price: 1852,
        route: "cairns to tokyo",
        quality: "economy class"
    },
]

export const PromotionalRecommended: PromotionalFormat[] = 
[
    {
        path: dealAsia,
        url: "",
    },
    {
        path: dealBonus,
        url: "",
    },
    {
        path: dealFiji,
        url: "",
    },
    {
        path: dealInternationalFlight,
        url: "",
    },
    {
        path: dealLuxury,
        url: "",
    },
    {
        path: dealRewards,
        url: "",
    },
]