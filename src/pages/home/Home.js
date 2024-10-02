import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import { useRepoContext } from '../../context/RepoContext';
import PRList from '../../components/PRList/PRList';
const Home = () => {
    const { selectedRepo } = useRepoContext();
    const [repositoryData, setRepositoryData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchRepositoryData = async () => {
            if (selectedRepo) {
                setLoading(true);
                try {
                    const response = await axios.get(`http://localhost:8080/repositories/${selectedRepo.ID}`);
                    setRepositoryData(response.data);
                }
                catch (error) {
                    console.error('Error fetching repository data:', error);
                }
                finally {
                    setLoading(false);
                }
            }
        };
        fetchRepositoryData();
    }, [selectedRepo]);
    return (_jsx("div", { className: "home", children: _jsxs("div", { className: "container", children: [selectedRepo && repositoryData && (_jsx("div", { children: loading ? (_jsx("p", { children: "Loading..." })) : (_jsx(_Fragment, {})) })), _jsx(PRList, {})] }) }));
};
export default Home;
