import axios from 'axios';
export const searchPullRequests = async (id, params) => {
    try {
        const response = await axios.post(`http://localhost:8080/pullrequests-search?id=${id}`, params);
        return response.data;
    }
    catch (error) {
        console.error('Error searching pull requests:', error);
        throw error;
    }
};
