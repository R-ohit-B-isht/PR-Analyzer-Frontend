import axios from 'axios';

interface SearchParams {
  searchText: string;
  page: number;
  pageSize: number;
}

export const searchPullRequests = async (id: string, params: SearchParams) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/pullrequests/search?id=${id}`,
      params,
      {
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:8080'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error searching pull requests:', error);
    throw error;
  }
};
