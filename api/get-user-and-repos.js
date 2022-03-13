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
    const { login } = req.query;

    const params = new URLSearchParams({
        per_page: '10',
        sort: 'created:asc',
    });

    try {
        const [user, repos] = await Promise.all([
            github.get(`/users/${login}`),
            github.get(`/users/${login}/repos?${params}`),
        ]);

        res.status(200).json({ user: user.data, repos: repos.data });
    } catch (error) {
        res.status(404).json('Not found');
    }
};
