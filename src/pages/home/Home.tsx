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
    <div className="home" style={{height:'95vh'}} >
      <div className="container">
        {selectedRepo && repositoryData && (
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
              <PRList />
              </>
            )}
          </div>
        )}
        {!selectedRepo &&
        <>
          <section className="bg-white dark:bg-gray-900 "style={{ position: 'fixed', left: 0, right: 0, height:'100vh' }} >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                  <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">☝</h1>
                  <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Please select a repository to view its pull requests.</p>
                  <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Use the dropdown above to select a repository.</p>
              </div>
          </div>
      </section>
        </>
        }
      </div>
    </div>
  );
};

export default Home;
