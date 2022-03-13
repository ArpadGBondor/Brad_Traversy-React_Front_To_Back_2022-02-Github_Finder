import axios from 'axios';

export default async function handler(request, response) {
    const { query } = request.query;
    const { data } = await axios.get('https://api.github.com/users/arpadgbondor');
    response.status(200).json(`query: ${query}, method: ${request.method}, name: ${data.login}`);
}
