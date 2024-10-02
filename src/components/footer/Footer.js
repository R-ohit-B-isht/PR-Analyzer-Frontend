import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Footer.module.scss';
export const date = new Date();
export const year = date.getFullYear();
const Footer = () => {
    return (_jsxs("div", { className: styles.footer, children: ["Copyright \u00A9 ", year, ' ', _jsx("strong", { className: styles.bold, children: "Techie Emma" })] }));
};
export default Footer;
