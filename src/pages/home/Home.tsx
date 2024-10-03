import React, { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import { useRepoContext } from '../../context/RepoContext';
import PRList from '../../components/PRList/PRList'


interface RepositoryData {
  name: string;
  url: string;
  lastProcessedDate: string;
  pullRequests: string[];
}

const Home: React.FC = () => {
  const { selectedRepo } = useRepoContext();
  const [repositoryData, setRepositoryData] = useState<RepositoryData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepositoryData = async () => {
      if (selectedRepo) {
        setLoading(true);
        try {
          const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
          const response = await axios.get<RepositoryData>(`${backendUrl}/repositories/${selectedRepo.ID}`);
          setRepositoryData(response.data);
        } catch (error) {
          console.error('Error fetching repository data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRepositoryData();
  }, [selectedRepo]);


  return (
    <div className="home">
      <div className="container">
        {selectedRepo && repositoryData && (
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>

              </>
            )}
          </div>
        )}
      <PRList />
      </div>
    </div>
  );
};

export default Home;
