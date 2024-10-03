import axios from 'axios';

interface SearchParams {
  searchText: string;
}

export const searchPullRequests = async (id: string, params: SearchParams) => {
  try {
    const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
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
