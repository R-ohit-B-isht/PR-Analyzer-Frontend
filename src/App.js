import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import NotFound from './pages/404/NotFound';
import Admin from './pages/admin/Admin';
import { RepoProvider } from './context/RepoContext';
const App = () => {
    return (_jsx(RepoProvider, { children: _jsxs(_Fragment, { children: [_jsx(Toaster, { position: "top-center", toastOptions: { duration: 3000 } }), _jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/admin/*", element: _jsx(Admin, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] })] }) }));
};
export default App;
