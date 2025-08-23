import{ useEffect, useReducer, useContext } from "react";
// eslint-disable-next-line no-unused-vars
import {popularContentContext,contentContext,apiKey} from '../const/index'
// Initial state
const initialState = {
    leagues: [],
    teams: [],
    title: "",
};


//code of popular leagues
const popularDefaultLeagues=["PL","CL","EL","BL1","SA","PD","WC"];

const popularDefaultLeaguesName=["Coupe de la Ligue"];


const popularDefaultTeamsId = ["86"]//"66", "57", "61", "64", "109", "108", "98"];

// Reducer
const popularContentReducer = (state, action) => {
    switch (action.type) {
        case "SET_POPULAR_LEAGUES":
            return {
                ...state,
                leagues: action.payload.leagues,
                title: action.payload.title || "",
            };
        case "SET_POPULAR_TEAMS":
            return {
                ...state,
                teams: action.payload.teams,
                title: action.payload.title || "",
            };
        default:
            return state;
    }
};

// Create context


// Provider
export default function  PopularContentProvider  ({ children })  {
    const [state, dispatch] = useReducer(popularContentReducer, initialState);
    const content = useContext(contentContext)
    
    
useEffect(() => {

    const fetchPopularContent = async () => {
        let popularLeagues = content.contentState.leagues.filter(league =>
            popularDefaultLeagues.includes(league.code)|| popularDefaultLeaguesName.includes(league.name)
        );

        //remove the duplicated leagues
        popularLeagues = popularLeagues.filter((league, index) => popularLeagues.indexOf(league) === index);
        dispatch({ type: "SET_POPULAR_LEAGUES", payload: { leagues: popularLeagues, title: "Popular Leagues" } });

        // 
        try {
            const requests = popularDefaultTeamsId.map(id =>
                fetch(`https://corsproxy.io/?http://api.football-data.org/v4/teams/${id}`, {
                    headers: {
                        "X-Auth-Token": apiKey,
                    },
                }).then(res => res.json())
            );

            const teamsData = await Promise.all(requests);
            dispatch({ type: "SET_POPULAR_TEAMS", payload: { teams: teamsData, title: "Popular Teams" } });
        } catch (error) {
            console.error("Error fetching popular teams:", error);
        }
    };

    if (content.contentState.leagues.length > 0) {
        fetchPopularContent();
    }
}, [content.contentState]);


    return (
        <popularContentContext.Provider value={{ popularContentState: state, popularContentDispatch: dispatch }}>
            {children}
        </popularContentContext.Provider>
    );
};
