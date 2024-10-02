import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext } from 'react';
const RepoContext = createContext(undefined);
export const useRepoContext = () => {
    const context = useContext(RepoContext);
    if (context === undefined) {
        throw new Error('useRepoContext must be used within a RepoProvider');
    }
    return context;
};
export const RepoProvider = ({ children }) => {
    const [selectedRepo, setSelectedRepo] = useState(null);
    return (_jsx(RepoContext.Provider, { value: { selectedRepo, setSelectedRepo }, children: children }));
};
