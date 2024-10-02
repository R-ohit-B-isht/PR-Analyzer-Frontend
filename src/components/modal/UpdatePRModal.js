import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './CreateRepoModal.module.scss';
import { Datepicker } from "flowbite-react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRepoContext } from '../../context/RepoContext';
const CreateRepoModal = ({ isOpen, onClose }) => {
    const { selectedRepo } = useRepoContext();
    const [startDate, setStartDate] = useState(new Date);
    const [endDate, setEndDate] = useState(new Date);
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        onClose();
        toast.loading('Processing...');
        try {
            // example curl curl -X POST 'http://localhost:8080/pullrequests/collect?id=66f70e56d5c8e3c9d8d91252' -H 'Content-Type: application/json' -H 'Origin: http://localhost:8080' -d '{"startDate": "2024-01-01", "endDate": "2024-01-02", "dateFormat": "2006-01-02"}'
            const backendUrl = 'http://localhost:8080';
            if (!selectedRepo) {
                setError('No repository selected');
                console.error('No repository selected');
                return;
            }
            //fix getting invalid start date format error its setting date as "2024-10-01T00:00:00.000Z" instead of "2024-10-01"
            const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
            const formattedEndDate = new Date(endDate).toISOString().split('T')[0];
            //this is a time taking process so as soon as the user clicks on update button the modal should close and the user should see a toast message of processing
            const response = await axios.post(`${backendUrl}/pullrequests-collect?id=${selectedRepo.ID}`, { startDate: formattedStartDate, endDate: formattedEndDate, dateFormat: "2006-01-02" });
            console.log('Response:', response.data);
            toast.success('Pull requests added successfully');
        }
        catch (err) {
            setError('Failed to update prs. Please try again.');
            console.error('Error updating prs:', err);
        }
    };
    const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    if (!isOpen)
        return null;
    return (_jsx("div", { className: styles.modalOverlay, children: _jsxs("div", { className: styles.modal, children: [_jsxs("div", { className: styles.modalHeader, children: [_jsx("h3", { className: styles.modalTitle, children: "Add PRs from" }), _jsxs("button", { onClick: onClose, className: styles.closeButton, children: [_jsx("svg", { className: styles.closeIcon, fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) }), _jsx("span", { className: styles.srOnly, children: "Close modal" })] })] }), _jsxs("form", { onSubmit: handleSubmit, className: styles.modalBody, children: [error && _jsx("div", { className: styles.error, children: error }), _jsxs("div", { className: styles.formGroup, children: [_jsx("label", { className: "block mb-2 text-lg font-medium text-gray-900 dark:text-white", children: "Select Date" }), _jsx(Datepicker, { onSelectedDateChanged: handleStartDateChange }), _jsx("span", { className: "hidden text-gray-500 md:mx-4 md:flex", children: "to" }), _jsx(Datepicker, { onSelectedDateChanged: handleEndDateChange }), "https://sshx.io/s/6sIsXOYJRH#YCmGFaEfn03TZ2"] }), _jsx("button", { type: "submit", className: styles.submitButton, children: "Update" })] })] }) }));
};
export default CreateRepoModal;
