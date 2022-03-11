import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
import { SET_USERS, SET_USER, SET_LOADING, CLEAR_USERS } from '../types';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Get search results
    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text,
        });
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        const { items } = await response.json();
        // console.log(data);
        dispatch({
            type: SET_USERS,
            payload: items,
        });
    };

    // Clear search results
    const clearSearchResults = () => dispatch({ type: CLEAR_USERS });

    // Get single user
    const getUser = async (login) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });

        if (response.status === 404) {
            window.location = '/notfound';
        } else {
            const data = await response.json();
            dispatch({
                type: SET_USER,
                payload: data,
            });
        }
    };

    // Set loading to be true
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                user: state.user,
                searchUsers,
                clearSearchResults,
                getUser,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContext;
