import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './CreateRepoModal.module.scss';
const CreateRepoModal = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await onSubmit(name, url);
            setName('');
            setUrl('');
            onClose();
        }
        catch (err) {
            setError('Failed to create repository. Please try again.');
            console.error('Error creating repository:', err, error);
        }
    };
    if (!isOpen)
        return null;
    return (_jsx("div", { className: styles.modalOverlay, children: _jsx("div", { className: "relative p-4 w-full max-w-2xl h-full md:h-auto", children: _jsxs("div", { className: "relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5", children: [_jsxs("div", { className: "flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Add Repository" }), _jsxs("button", { type: "button", className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white", "data-modal-toggle": "updateProductModal", onClick: onClose, children: [_jsx("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { "fill-rule": "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule": "evenodd" }) }), _jsx("span", { className: "sr-only", children: "Close modal" })] })] }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "grid gap-4 mb-4 sm:grid-cols-1", children: [_jsxs("div", { children: [_jsx("label", { className: "block mb-2 text-lg font-medium text-gray-900 dark:text-white", children: "Name" }), _jsx("input", { type: "text", name: "name", id: "name", required: true, value: name, onChange: (e) => setName(e.target.value), className: "bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", placeholder: "Repo Name\u201C" })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-2 text-lg font-medium text-gray-900 dark:text-white", children: "URL" }), _jsx("input", { type: "url", required: true, id: "url", value: url, onChange: (e) => setUrl(e.target.value), name: "name", className: "bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", placeholder: "Git URL ending with .git\u201C" })] })] }), _jsx("div", { className: "flex items-center justify-center space-x-4", children: _jsx("button", { type: "submit", className: "text-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900", children: "Add Repo" }) })] })] }) }) }));
};
export default CreateRepoModal;
