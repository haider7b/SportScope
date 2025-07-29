import{ useReducer } from "react";
import {LeaguesContext} from '../const/index'
// Initial state
const initialState = {
    leagues: [],
    title: "",
};

// Reducer
const leaguesReducer = (state, action) => {
    switch (action.type) {
        case "SET_LEAGUES":
            return {
                ...state,
                leagues: action.payload.leagues,
                title: action.payload.title || "",
            };
        default:
            return state;
    }
};

// Create context


// Provider
export const LeaguesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(leaguesReducer, initialState);

    return (
        <LeaguesContext.Provider value={{ leaguesState: state, leaguesDispatch: dispatch }}>
            {children}
        </LeaguesContext.Provider>
    );
};
