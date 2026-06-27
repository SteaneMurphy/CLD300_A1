//icons
import iconPhone from '../assets/iconPhone.png';
import iconArrow from '../assets/iconArrow.png';
import iconBed from '../assets/iconBed.png';
import iconBoat from '../assets/iconBoat.png';
import iconBus from '../assets/iconBus.png';
import iconCar from '../assets/iconCar.png';
import iconFlightStay from '../assets/iconFlightStay.png';
import iconLuggageTag from '../assets/iconLuggageTag.png';
import iconMobile from '../assets/iconMobile.png';
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
        icon: iconMobile
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