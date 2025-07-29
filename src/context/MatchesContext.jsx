import{ useReducer } from "react";
import {MatchesContext} from '../const/index'
// Initial state
const initialState = {
    matches: [],
    title: "",
};

// Reducer
const matchesReducer = (state, action) => {
    switch (action.type) {
        case "SET_MATCHES":
            return {
                ...state,
                matches: action.payload.matches,
                title: action.payload.title || "",
            };
        default:
            return state;
    }
};

// Create context


// Provider
export const MatchesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(matchesReducer, initialState);

    return (
        <MatchesContext.Provider value={{ matchesState: state, matchesDispatch: dispatch }}>
            {children}
        </MatchesContext.Provider>
    );
};
