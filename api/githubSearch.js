import { github } from './_github';

export default function handler(request, response) {
    switch (request.method) {
        case 'GET':
            handleGET(request, response);
            break;

        default:
            response.status(405).json(`Method Not Allowed.`);
    }
}

const handleGET = async (req, res) => {
    const { query } = req.query;

    // Get search results
    const params = new URLSearchParams({
        q: query,
    });
    const { data } = await github.get(`/search/users?${params}`);

    res.status(200).json(data.items);
};
