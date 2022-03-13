import axios from 'axios';

const GITHUB_URL = process.env.GITHUB_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
    },
});
