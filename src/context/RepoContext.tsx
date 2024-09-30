import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Repository {
  ID: string;
  Name: string;
  url: string;
  PullRequests: string[];
}

interface RepoContextType {
  selectedRepo: Repository | null;
  setSelectedRepo: (repo: Repository | null) => void;
}

const RepoContext = createContext<RepoContextType | undefined>(undefined);

export const useRepoContext = () => {
  const context = useContext(RepoContext);
  if (context === undefined) {
    throw new Error('useRepoContext must be used within a RepoProvider');
  }
  return context;
};

interface RepoProviderProps {
  children: ReactNode;
}

export const RepoProvider: React.FC<RepoProviderProps> = ({ children }) => {
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  return (
    <RepoContext.Provider value={{ selectedRepo, setSelectedRepo }}>
      {children}
    </RepoContext.Provider>
  );
};
