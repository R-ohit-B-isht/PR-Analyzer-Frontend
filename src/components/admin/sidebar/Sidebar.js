import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Sidebar.scss';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaLink } from 'react-icons/fa';
import menu from '../../../data/sidebar';
import SidebarItem from './SidebarItem';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen((prev) => !prev);
    const closeSidebar = () => setIsOpen(false);
    const openSidebar = () => setIsOpen(true);
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/admin/home');
    };
    return (_jsxs("div", { className: "layout", children: [_jsx("div", { className: isOpen ? 'sidebar-overlay show-overlay' : 'sidebar-overlay', onClick: closeSidebar }), _jsxs("div", { className: "sidebar", style: { width: isOpen ? '230px' : '60px' }, onMouseEnter: openSidebar, onMouseLeave: closeSidebar, children: [_jsxs("div", { className: "top_section", children: [_jsx("div", { className: "logo", style: { display: isOpen ? 'block' : 'none' }, children: _jsx(FaLink, { size: 30, style: { cursor: 'pointer' }, onClick: goHome }) }), _jsx("div", { className: "bars", style: { marginLeft: isOpen ? '135px' : '0px' }, children: _jsx(HiMenuAlt3, { onClick: toggle }) })] }), menu.map((item, index) => {
                        return (_jsx(SidebarItem, { item: {
                                title: item.title,
                                icon: item.icon,
                                path: item.path || '',
                                children: item.children || [],
                            }, isOpen: isOpen, setIsOpen: setIsOpen }, index));
                    })] })] }));
};
export default Sidebar;
