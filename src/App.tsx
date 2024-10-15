import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/header/Header';

import Home from './pages/home/Home';
import NotFound from './pages/404/NotFound';
import Admin from './pages/admin/Admin';
import { RepoProvider } from './context/RepoContext';

const App = () => {
  return (
    <RepoProvider>
      <>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        <Header style={{height: '5vh'}} />
        <Routes>
          <Route path="/" element={<Home style={{height:'95vh'}} />} />
          <Route path="/admin/*" element={<Admin style={{height:'95vh'}} />} />
          <Route path="*" element={<NotFound style={{height:'95vh'}} />} />
        </Routes>

      </>
    </RepoProvider>
  );
};

export default App;
