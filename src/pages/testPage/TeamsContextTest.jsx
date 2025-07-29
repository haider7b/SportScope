// src/context/TeamsContext.jsx
import React, { createContext, useReducer, useEffect } from 'react';
//import { TeamsContextTest } from '../../const/index';


// eslint-disable-next-line react-refresh/only-export-components
export const TeamsContext = createContext();

const initialState = {
    teams: [],
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, teams: action.payload, loading: false };
        case 'FETCH_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export const TeamsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const res = await fetch(
                    `https://corsproxy.io/?https://api.football-data.org/v4/competitions/PL/teams`,
                    {
                    headers: {
                        'X-Auth-Token': '020a451ec83841babc18fbcda0c0225b', // حط التوكين هنا
                    },}
                );
                const data = await res.json();
                dispatch({ type: 'FETCH_SUCCESS', payload: data.teams });
            } catch (err) {
            dispatch({ type: 'FETCH_ERROR', payload: err.message });
        }
    };

        fetchTeams();
    }, []);

    return (
        <TeamsContext.Provider value={state}>
            {children}
        </TeamsContext.Provider>
    );
};
