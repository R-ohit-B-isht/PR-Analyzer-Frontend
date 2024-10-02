import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            }
            catch (error) {
                console.error('Error fetching repositories:', error);
                toast.error('Failed to fetch repositories');
            }
        };
        fetchRepositories();
    }, []);
    return (_jsxs("div", { children: [_jsx("h3", { children: "My Subscribed Repos" }), _jsx("div", { className: "table", children: repositories.length === 0 ? (_jsx("p", { children: "No Subscribed Repos found" })) : (_jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "s/n" }), _jsx("th", { children: "Repo Name" }), _jsx("th", { children: "PRs" }), _jsx("th", { children: "Action" })] }) }), _jsx("tbody", { children: repositories.map((plan, index) => {
                                const { Name, PullRequests } = plan;
                                const prNumber = PullRequests ? PullRequests.length : 0;
                                console.log('prNumber', prNumber);
                                return (_jsxs("tr", { children: [_jsx("td", { children: index + 1 }), _jsx("td", { children: Name }), _jsx("td", { children: prNumber }), _jsx("td", { children: _jsx("span", { children: _jsx(FaTrashAlt, { size: 20, color: 'red' }) }) })] }, index));
                            }) })] })) })] }));
};
export default Sub;
