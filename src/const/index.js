import React from "react"
import {
    gitHubIcon,
    linkedinIcon,
    instagramIcon,
} from '../utils/index.js'



export const apiKey = '020a451ec83841babc18fbcda0c0225b'
export const webName = 'SportScope'
export const navLinks = ['Home', 'Leagues', 'Matches']
export const contactsLinks = [
    {
        name: 'Github',
        url: 'https://github.com/abdulrahman-elsharkawy',
        icon: gitHubIcon
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/abdulrahman-elsharkawy/',
        icon: linkedinIcon
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/abdulrahman_elsharkawy/',
        icon: instagramIcon
    }
]


export const darkMode = React.createContext()
export const contentContext = React.createContext();
export const popularContentContext = React.createContext();


export const teams = [{
    name: "Real Madrid",
    url: "https://en.wikipedia.org/wiki/Real_Madrid_CF",

},
{
    name: "FC Barcelona",
    url: "https://en.wikipedia.org/wiki/Football_Club_Barcelona",

},
{
    name: "Manchester United",
    url: "https://en.wikipedia.org/wiki/Manchester_United_F.C.",

},
{
    name: "Chelsea F.C.",
    url: "https://en.wikipedia.org/wiki/Chelsea_F.C.",

},
{
    name: "Liverpool F.C.",
    url: "https://en.wikipedia.org/wiki/Liverpool_F.C.",

},
{
    name: "Arsenal F.C.",
    url: "https://en.wikipedia.org/wiki/Arsenal_F.C.",

},
{
    name: "Real Madrid",
    url: "https://en.wikipedia.org/wiki/Real_Madrid_CF",

},
{
    name: "FC Barcelona",
    url: "https://en.wikipedia.org/wiki/Football_Club_Barcelona",

},
{
    name: "Manchester United",
    url: "https://en.wikipedia.org/wiki/Manchester_United_F.C.",

},
{
    name: "Chelsea F.C.",
    url: "https://en.wikipedia.org/wiki/Chelsea_F.C.",

},
{
    name: "Liverpool F.C.",
    url: "https://en.wikipedia.org/wiki/Liverpool_F.C.",

},
{
    name: "Arsenal F.C.",
    url: "https://en.wikipedia.org/wiki/Arsenal_F.C.",
}
]
