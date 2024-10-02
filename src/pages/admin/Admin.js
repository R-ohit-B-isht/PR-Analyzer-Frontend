import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Admin.module.scss';
import Sidebar from '../../components/admin/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from '../../components/admin/home/Home';
import Profile from '../../components/admin/profile/Profile';
import Sub from '../../components/admin/subscription/Sub';
const Admin = () => {
    return (_jsxs("div", { className: styles.admin, children: [_jsx("div", { className: styles.navbar, children: _jsx(Sidebar, {}) }), _jsx("div", { className: styles.content, children: _jsxs(Routes, { children: [_jsx(Route, { path: "home", element: _jsx(Home, {}) }), _jsx(Route, { path: "profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "account", element: _jsx(Sub, {}) })] }) })] }));
};
export default Admin;
