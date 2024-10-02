import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
const SidebarItem = ({ item, isOpen, setIsOpen }) => {
    const [expandMenu, setExpandMenu] = useState(false);
    useEffect(() => {
        if (!isOpen) {
            setExpandMenu(false);
        }
    }, [isOpen, setExpandMenu]);
    const hideSidebar = () => {
        setExpandMenu(false);
        setIsOpen(false);
    };
    const activeLink = ({ isActive }) => isActive ? 'active' : 'link';
    const activeSubLink = ({ isActive }) => isActive ? 'active' : 'link';
    if (item.children) {
        return (_jsxs("div", { className: expandMenu ? 'sidebar-item s-parent open' : 'sidebar-item s-parent', children: [_jsxs("div", { className: "sidebar-title", onClick: () => setExpandMenu(!expandMenu), children: [_jsxs("span", { children: [item.icon && _jsx("div", { className: "icon", children: item.icon }), isOpen && _jsx("div", { children: item.title })] }), _jsx(MdKeyboardArrowRight, { size: 25, className: "arrow-icon" })] }), _jsx("div", { className: "sidebar-content", children: item.children.map((child, index) => {
                        return (_jsx("div", { className: "s-child", children: _jsx(NavLink, { to: child.path, className: activeSubLink, children: _jsx("div", { className: "sidebar-item", onClick: hideSidebar, children: _jsx("div", { className: "sidebar-title", children: _jsxs("span", { children: [child.icon && _jsx("div", { className: "icon", children: child.icon }), isOpen && _jsx("div", { children: child.title })] }) }) }) }) }, index));
                    }) })] }));
    }
    else {
        return (_jsx(NavLink, { to: item.path, className: activeLink, children: _jsx("div", { className: "sidebar-item s-parent", onClick: hideSidebar, children: _jsx("div", { className: "sidebar-title", children: _jsxs("span", { children: [item.icon && _jsx("div", { className: "icon", children: item.icon }), isOpen && _jsx("div", { children: item.title })] }) }) }) }));
    }
};
export default SidebarItem;
