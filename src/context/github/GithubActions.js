import axios from 'axios';

// Get search results
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        query: text,
    });
    const { data } = await axios.get(`/api/search-users?${params}`);

    return data;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        login: login,
    });
    try {
        const { data } = await axios.get(`/api/get-user-and-repos?${params}`);

        return data;
    } catch (error) {
        window.location = '/notfound';
    }
};
