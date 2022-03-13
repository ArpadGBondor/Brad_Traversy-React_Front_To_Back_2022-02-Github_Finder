import {
    SET_USERS,
    CLEAR_USERS,
    SET_LOADING,
    SET_USER,
    CLEAR_USER,
    SET_REPOS,
    CLEAR_REPOS,
    SET_USER_AND_REPOS,
} from '../types';

const githubReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case SET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            };
        case SET_USER_AND_REPOS:
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: {},
                loading: false,
            };
        case CLEAR_REPOS:
            return {
                ...state,
                repos: [],
                loading: false,
            };
        default:
            return state;
    }
};

export default githubReducer;
