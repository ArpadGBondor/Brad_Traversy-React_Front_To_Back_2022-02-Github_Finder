import { SET_USERS, CLEAR_USERS, SET_LOADING } from '../types';

const githubReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
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
        default:
            return state;
    }
};

export default githubReducer;
