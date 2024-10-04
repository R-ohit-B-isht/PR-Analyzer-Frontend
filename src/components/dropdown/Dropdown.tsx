import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import styles from './Dropdown.module.scss';
import CreateRepoModal from '../modal/CreateRepoModal';
import { useRepoContext } from '../../context/RepoContext';

interface DropdownProps {
  onAddRepo: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onAddRepo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedRepo,setSelectedRepo } = useRepoContext();

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
        console.log('backendUrl', backendUrl);
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

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleAddRepo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitRepo = async (name: string, url: string) => {
    try {
      const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
      const response = await axios.post(`${backendUrl}/repositories`, { name, url });
      setRepositories([...repositories, response.data]);
      setIsModalOpen(false);
      toast.success('Repository added successfully');
      onAddRepo(); // Call the onAddRepo prop function
    } catch (error) {
      console.error('Error adding repository:', error);
      toast.error('Failed to add repository');
    }
  };

  const handleSelectRepo = async (repo) => {
    setSelectedRepo(repo);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button data-dropdown-toggle="dropdown" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" onClick={toggleDropdown}>
        {selectedRepo? selectedRepo.Name:'Repositories'}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {repositories.map((repo) => (
            <li key={repo.ID} onClick={() => handleSelectRepo(repo)}>

              {repo.Name}

            </li>
          ))}
          <li key="add-repo" className={styles.addRepo} onClick={handleAddRepo}>
            + Add Repository
          </li>
        </ul>
      )}
      <CreateRepoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitRepo}
      />
    </div>
  );
};

export default Dropdown;
