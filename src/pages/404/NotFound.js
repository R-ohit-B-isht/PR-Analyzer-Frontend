import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Image from '../../assets/404-error.png';
const NotFound = () => {
    return (_jsxs("div", { className: "--center-all", style: { minHeight: '80vh' }, children: [_jsx("img", { src: Image, alt: "404-error" }), _jsx("br", {}), _jsx(Link, { to: '/', children: _jsx("button", { className: "--btn --btn-primary", children: "Back To Home" }) })] }));
};
export default NotFound;
