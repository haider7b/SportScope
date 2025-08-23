import { useReducer, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { contentContext,apiKey } from "../const/index";

// Initial state
const initialState = {
    status: "all",
    leagues: [],
    teams: [],
    league: {},
    team: {},
    teamMatches: [], // ensure always array
    allMatches: [], // ensure always array
    title: "",
};

// Reducer
const contentReducer = (state, action) => {
    switch (action.type) {
        case "SET_CONTENT":
            return {
                ...state,
                status: action.payload.status,
                leagues: action.payload.leagues,
                teams: action.payload.teams,
                team: action.payload.team,
                title: action.payload.title || "",
            };
        case "SET_LEAGUES":
            return {
                ...state,
                leagues: [...action.payload],
            };
        case "ADD_TEAMS":
            return {
                ...state,
                teams: [...action.payload],
            };
        case "ADD_LEAGUE":
            return {
                ...state,
                league: action.payload
            }
        case "ADD_TEAM":
            return {
                ...state,
                team: action.payload
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.payload
            }
        case "SET_TEAM_MATCHES":
            return {
                ...state,
                teamMatches: Array.isArray(action.payload) ? action.payload : [],
            }
        case "SET_ALL_MATCHES": {
            const newMatch = action.payload;
            const existingIndex = state.allMatches.findIndex(match => match.id === newMatch.id);

            if (existingIndex !== -1) {
                const updatedMatches = [...state.allMatches];
                updatedMatches[existingIndex] = newMatch;
                return {
                    ...state,
                    allMatches: updatedMatches,
                };
            } else {
                return {
                    ...state,
                    allMatches: [...state.allMatches, newMatch],
                };
            }
        }
        default:
            return state;
    }
};

// Provider
export default function ContentProvider({ children }) {
    const [state, dispatch] = useReducer(contentReducer, initialState);

    useEffect(() => {
        const fetchLeagues = async () => {
            const cachedLeagues = localStorage.getItem("leagues");
            if (cachedLeagues) {
                dispatch({ type: "SET_LEAGUES", payload: JSON.parse(cachedLeagues) });
                return;
            }

            try {
                const res = await fetch(
                    `https://corsproxy.io/?http://api.football-data.org/v4/competitions`,
                    {
                        headers: {
                            "X-Auth-Token": apiKey,
                        },
                    }
                );
                const data = await res.json();
                localStorage.setItem("leagues", JSON.stringify(data.competitions));
                dispatch({ type: "SET_LEAGUES", payload: data.competitions });
            } catch (err) {
                console.error("Error fetching leagues:", err.message);
            }
        };

        fetchLeagues();
    }, []);


    return (
        <contentContext.Provider value={{ contentState: state, contentDispatch: dispatch }}>
            {children}
        </contentContext.Provider>
    );
}
