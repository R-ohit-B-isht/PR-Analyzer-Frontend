import './Sub.scss';
import { FaTrashAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const Sub = () => {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const backendUrl = 'http://localhost:8080';
        const response = await axios.get(`${backendUrl}/repositories`);
        setRepositories(response.data);
        console.log('Fetched repositories:', response.data); // Added console.log for debugging
      } catch (error) {
        console.error('Error fetching repositories:', error);
        toast.error('Failed to fetch repositories');
      }
    };

    fetchRepositories();
  }, []);
  return (
    <div>
      <h3>My Subscribed Repos</h3>
      <div className="table">
        {repositories.length === 0 ? (
          <p>No Subscribed Repos found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Repo Name</th>
                <th>PRs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {repositories.map((plan, index) => {
                const { Name, PullRequests } = plan;
                const  prNumber  = PullRequests ? PullRequests.length : 0;
                console.log('prNumber', prNumber);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{Name}</td>
                    <td>{prNumber}</td>

                    <td>
                      <span>
                        <FaTrashAlt size={20} color={'red'} />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Sub;
