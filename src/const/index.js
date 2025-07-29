import React from "react"
import {
    gitHubIcon,
    linkedinIcon,
    CristianoRonaldo,
    instagramIcon,
    Real_Madrid_CF,
    PremierLeagueLogo
} from '../utils/index.js'



export const apiKey = '020a451ec83841babc18fbcda0c0225b'
export const webName = 'SportScope'
export const navLinks = ['Home', 'Leagues', 'News', 'Matches', "Teams"]
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


export const CountContext = React.createContext()
export const darkMode = React.createContext()

export const showWhatContext = React.createContext()
export const TeamsContext = React.createContext()
export const MatchesContext =React.createContext();
export const LeaguesContext =React.createContext();

const player = {
    name: "Cristiano Ronaldo",
    url: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
    image: CristianoRonaldo,
    position: "Forward",
    number: 7,
    nationality: "Portugal",
    team: "Real Madrid",
    description: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team. He is widely regarded as the best players in the world."

}




export const matches = [
    {
        data: "2023-01-01",
        time: "09:00",
        homeTeam: "Real Madrid",
        awayTeam: "FC Barcelona",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },
    {
        data: "2023-01-04",
        time: "09:00",
        homeTeam: "Arsenal F.C.",
        awayTeam: "Chelsea F.C.",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },
    {
        data: "2023-01-08",
        time: "09:00",
        homeTeam: "Liverpool F.C.",
        awayTeam: "Manchester United",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },
    {
        data: "2023-01-01",
        time: "09:00",
        homeTeam: "Real Madrid",
        awayTeam: "FC Barcelona",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },
    {
        data: "2023-01-04",
        time: "09:00",
        homeTeam: "Arsenal F.C.",
        awayTeam: "Chelsea F.C.",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },
    {
        data: "2023-01-08",
        time: "09:00",
        homeTeam: "Liverpool F.C.",
        awayTeam: "Manchester United",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },
    {
        data: "2023-01-01",
        time: "09:00",
        homeTeam: "Real Madrid",
        awayTeam: "FC Barcelona",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },
    {
        data: "2023-01-04",
        time: "09:00",
        homeTeam: "Arsenal F.C.",
        awayTeam: "Chelsea F.C.",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },
    {
        data: "2023-01-08",
        time: "09:00",
        homeTeam: "Liverpool F.C.",
        awayTeam: "Manchester United",
        homeTeamScore: "2",
        awayTeamScore: "1",
    },

]



const teamInfo = {
    players: [player, player, player, player, player, player, player, player, player, player, player, player,
        player, player, player, player, player, player, player, player, player, player, player, player,

    ],
    coach: "coach",
    manager: "manager",
    stadium: "stadium",
    logo: Real_Madrid_CF,
    year: "1921",
    description: "Real Madrid Club de Fútbol (Spanish pronunciation: [reˈal maˈðɾið ˈkluβ ðe ˈfuðβol] ⓘ), commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. The club competes in La Liga, the top tier of Spanish football.",
    matches: matches

}




export const teams = [{
    name: "Real Madrid",
    url: "https://en.wikipedia.org/wiki/Real_Madrid_CF",
    teamInfo: teamInfo
},
{
    name: "FC Barcelona",
    url: "https://en.wikipedia.org/wiki/Football_Club_Barcelona",
    teamInfo: teamInfo
},
{
    name: "Manchester United",
    url: "https://en.wikipedia.org/wiki/Manchester_United_F.C.",
    teamInfo: teamInfo
},
{
    name: "Chelsea F.C.",
    url: "https://en.wikipedia.org/wiki/Chelsea_F.C.",
    teamInfo: teamInfo
},
{
    name: "Liverpool F.C.",
    url: "https://en.wikipedia.org/wiki/Liverpool_F.C.",
    teamInfo: teamInfo
},
{
    name: "Arsenal F.C.",
    url: "https://en.wikipedia.org/wiki/Arsenal_F.C.",
    teamInfo: teamInfo
},
{
    name: "Real Madrid",
    url: "https://en.wikipedia.org/wiki/Real_Madrid_CF",
    teamInfo: teamInfo
},
{
    name: "FC Barcelona",
    url: "https://en.wikipedia.org/wiki/Football_Club_Barcelona",
    teamInfo: teamInfo
},
{
    name: "Manchester United",
    url: "https://en.wikipedia.org/wiki/Manchester_United_F.C.",
    teamInfo: teamInfo
},
{
    name: "Chelsea F.C.",
    url: "https://en.wikipedia.org/wiki/Chelsea_F.C.",
    teamInfo: teamInfo
},
{
    name: "Liverpool F.C.",
    url: "https://en.wikipedia.org/wiki/Liverpool_F.C.",
    teamInfo: teamInfo,
},
{
    name: "Arsenal F.C.",
    url: "https://en.wikipedia.org/wiki/Arsenal_F.C.",
    teamInfo: teamInfo
}
]



const League = {
    name: "Premier League",
    url: "https://en.wikipedia.org/wiki/Premier_League",
    img: PremierLeagueLogo

}
export const EuropeanLeagues = [League, League, League, League, League]
export const AsianLeagues = EuropeanLeagues
export const AfricanLeagues = EuropeanLeagues
export const SwathAmericanLeagues = EuropeanLeagues
export const northAmericanLeagues = EuropeanLeagues


//https://www.thesportsdb.com/api/v1/json/123/all_leagues.php





export const newsList = [
    {
        title: "Real Madrid advance to the Champions League final",
        description: "Real Madrid defeated Barcelona in the semi final 3-0 and going to meet Bayer in the final",
        img: CristianoRonaldo,
        League: "Champions League",
    },
    {
        title: "Manchester City secure a lat win against Liverpool",
        description: "Manchester City defeated Liverpool in the premier league and tack the lead in the league with 90 point and 6 point ahead of Liverpool",
        img: CristianoRonaldo,
        League: "Premier League",
    },
    {
        title: "Real Madrid advance to the Champions League final",
        description: "Real Madrid defeated Barcelona in the semi final 3-0 and going to meet Bayer in the final",
        img: CristianoRonaldo,
        League: "Champions League",
    },
    {
        title: "Manchester City secure a lat win against Liverpool",
        description: "Manchester City defeated Liverpool in the premier league and tack the lead in the league with 90 point and 6 point ahead of Liverpool",
        img: CristianoRonaldo,
        League: "Premier League",
    },
    {
        title: "Real Madrid advance to the Champions League final",
        description: "Real Madrid defeated Barcelona in the semi final 3-0 and going to meet Bayer in the final",
        img: CristianoRonaldo,
        League: "Champions League",
    },
    {
        title: "Manchester City secure a lat win against Liverpool",
        description: "Manchester City defeated Liverpool in the premier league and tack the lead in the league with 90 point and 6 point ahead of Liverpool",
        img: CristianoRonaldo,
        League: "Premier League",
    },
    {
        title: "Real Madrid advance to the Champions League final",
        description: "Real Madrid defeated Barcelona in the semi final 3-0 and going to meet Bayer in the final",
        img: CristianoRonaldo,
        League: "Champions League",
    },
    {
        title: "Manchester City secure a lat win against Liverpool",
        description: "Manchester City defeated Liverpool in the premier league and tack the lead in the league with 90 point and 6 point ahead of Liverpool",
        img: CristianoRonaldo,
        League: "Premier League",
    },
    {
        title: "Real Madrid advance to the Champions League final",
        description: "Real Madrid defeated Barcelona in the semi final 3-0 and going to meet Bayer in the final",
        img: CristianoRonaldo,
        League: "Champions League",
    },
    {
        title: "Manchester City secure a lat win against Liverpool",
        description: "Manchester City defeated Liverpool in the premier league and tack the lead in the league with 90 point and 6 point ahead of Liverpool",
        img: CristianoRonaldo,
        League: "Premier League",
    },
    {
        title: "Real Madrid advance to the Champions League final",
        description: "Real Madrid defeated Barcelona in the semi final 3-0 and going to meet Bayer in the final",
        img: CristianoRonaldo,
        League: "Champions League",
    },
    {
        title: "Manchester City secure a lat win against Liverpool",
        description: "Manchester City defeated Liverpool in the premier league and tack the lead in the league with 90 point and 6 point ahead of Liverpool",
        img: CristianoRonaldo,
        League: "Premier League",
    },
    {
        title: "Real Madrid advance to the Champions League final",
        description: "Real Madrid defeated Barcelona in the semi final 3-0 and going to meet Bayer in the final",
        img: CristianoRonaldo,
        League: "Champions League",
    },
    {
        title: "Manchester City secure a lat win against Liverpool",
        description: "Manchester City defeated Liverpool in the premier league and tack the lead in the league with 90 point and 6 point ahead of Liverpool",
        img: CristianoRonaldo,
        League: "Premier League",
    },
]



export const lg = {
    "leagues": [{
        "idLeague": "4328",
        "strLeague": "English Premier League",
        "strSport": "Soccer"
    }, {
        "idLeague": "4329",
        "strLeague": "English League Championship",
        "strSport": "Soccer"
    }, {
        "idLeague": "4330",
        "strLeague": "Scottish Premier League",
        "strSport": "Soccer"
    }, {
        "idLeague": "4331",
        "strLeague": "German Bundesliga",
        "strSport": "Soccer"
    }, {
        "idLeague": "4332",
        "strLeague": "Italian Serie A",
        "strSport": "Soccer"
    }, {
        "idLeague": "4334",
        "strLeague": "French Ligue 1",
        "strSport": "Soccer"
    }, {
        "idLeague": "4335",
        "strLeague": "Spanish La Liga",
        "strSport": "Soccer"
    }, {
        "idLeague": "4336",
        "strLeague": "Greek Superleague Greece",
        "strSport": "Soccer"
    }, {
        "idLeague": "4337",
        "strLeague": "Dutch Eredivisie",
        "strSport": "Soccer"
    }, {
        "idLeague": "4338",
        "strLeague": "Belgian Pro League",
        "strSport": "Soccer"
    }]
}



//export const TeamsContextTest = createContext();