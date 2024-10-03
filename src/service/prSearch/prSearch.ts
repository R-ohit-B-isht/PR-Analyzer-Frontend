import axios from 'axios';
import 'dotenv/config'
interface SearchParams {
  searchText: string;
}

export const searchPullRequests = async (id: string, params: SearchParams) => {
  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const response = await axios.post(
      `${backendUrl}/pullrequests-search?id=${id}`,
      params
    );
    return response.data;
  } catch (error) {
    console.error('Error searching pull requests:', error);
    throw error;
  }
};
