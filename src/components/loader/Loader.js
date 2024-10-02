import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Loader.module.scss';
import loaderImg from '../../assets/loader.gif';
import ReactDOM from 'react-dom';
const Loader = () => {
    return ReactDOM.createPortal(_jsx("div", { className: styles.wrapper, children: _jsx("div", { className: styles.loader, children: _jsx("img", { style: { width: '50px' }, src: loaderImg, alt: "Loading..." }) }) }), document.body // add argument here
    );
};
const loaderElement = document.getElementById('loader');
if (loaderElement) {
    ReactDOM.render(_jsx(Loader, {}), loaderElement);
}
export const Spinner = () => {
    return (_jsx("div", { className: "--center-all", children: _jsx("img", { style: { width: '50px' }, src: loaderImg, alt: "Loading..." }) }));
};
export default Loader;
