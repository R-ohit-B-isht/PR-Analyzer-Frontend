import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Dropdown from '../dropdown/Dropdown';
import UpdatePRModal from '../modal/UpdatePRModal';
const logo = (_jsx("div", { className: styles.logo, children: _jsx(Link, { to: "/", children: _jsxs("h2", { children: ["PR", _jsx("span", { children: "Analyzer" }), "."] }) }) }));
const activeLink = ({ isActive }) => isActive ? `${styles.active}` : '';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };
    const hideMenu = () => {
        setShowMenu(false);
    };
    const handleUpdateRepo = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (_jsx("header", { children: _jsxs("div", { className: styles.header, children: [_jsx("span", { className: styles.logoHeader, children: logo }), _jsxs("nav", { className: showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`, children: [_jsx("div", { className: showMenu
                                ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                                : `${styles['nav-wrapper']}`, onClick: hideMenu }), _jsxs("ul", { onClick: hideMenu, children: [_jsxs("li", { className: styles['logo-mobile'], children: [logo, _jsx(FaTimes, { size: 22, color: "#fff", onClick: hideMenu })] }), _jsx("li", { children: _jsx(NavLink, { to: "/", className: activeLink, children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/admin/home", className: activeLink, children: "Dashboard" }) }), _jsxs("li", { children: [_jsx(Dropdown, { onAddRepo: () => { } }), _jsx("button", { className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-30", type: "button", onClick: handleUpdateRepo, children: "Add PR" })] }), _jsx("li", { children: _jsx(UpdatePRModal, { isOpen: isModalOpen, onClose: handleCloseModal }) })] })] }), _jsx("div", { className: styles['menu-icon'], children: _jsx(HiOutlineMenuAlt3, { size: 28, onClick: toggleMenu }) })] }) }));
};
export default Header;
