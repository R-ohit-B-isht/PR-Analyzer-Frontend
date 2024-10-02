import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import styles from './Dropdown.module.scss';
import CreateRepoModal from '../modal/CreateRepoModal';
import { useRepoContext } from '../../context/RepoContext';
const Dropdown = ({ onAddRepo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [repositories, setRepositories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { selectedRepo, setSelectedRepo } = useRepoContext();
    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const backendUrl = 'http://localhost:8080';
                const response = await axios.get(`${backendUrl}/repositories`);
                setRepositories(response.data);
                console.log('Fetched repositories:', response.data); // Added console.log for debugging
            }
            catch (error) {
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
    const handleSubmitRepo = async (name, url) => {
        try {
            const backendUrl = 'http://localhost:8080';
            const response = await axios.post(`${backendUrl}/repositories`, { name, url });
            setRepositories([...repositories, response.data]);
            setIsModalOpen(false);
            toast.success('Repository added successfully');
            onAddRepo(); // Call the onAddRepo prop function
        }
        catch (error) {
            console.error('Error adding repository:', error);
            toast.error('Failed to add repository');
        }
    };
    const handleSelectRepo = (repo) => {
        setSelectedRepo(repo);
        setIsOpen(false);
    };
    return (_jsxs("div", { className: styles.dropdown, children: [_jsxs("button", { "data-dropdown-toggle": "dropdown", className: "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800", type: "button", onClick: toggleDropdown, children: [selectedRepo ? selectedRepo.Name : 'Repositories', _jsx("svg", { className: "w-2.5 h-2.5 ms-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 6", children: _jsx("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "m1 1 4 4 4-4" }) })] }), isOpen && (_jsxs("ul", { className: styles.dropdownMenu, children: [repositories.map((repo) => (_jsx("li", { onClick: () => handleSelectRepo(repo), children: repo.Name }, repo.ID))), _jsx("li", { className: styles.addRepo, onClick: handleAddRepo, children: "+ Add Repository" }, "add-repo")] })), _jsx(CreateRepoModal, { isOpen: isModalOpen, onClose: handleCloseModal, onSubmit: handleSubmitRepo })] }));
};
export default Dropdown;
