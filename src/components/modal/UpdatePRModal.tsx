import React, { useState } from 'react';
import styles from './CreateRepoModal.module.scss';
import { Datepicker } from "flowbite-react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRepoContext } from '../../context/RepoContext';

interface CreateRepoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateRepoModal: React.FC<CreateRepoModalProps> = ({ isOpen, onClose }) => {
  const { selectedRepo } = useRepoContext();
  const [startDate, setStartDate] = useState(new Date);
  const [endDate, setEndDate] = useState(new Date);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
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
      const response = await axios.post(`${backendUrl}/pullrequests/collect?id=${selectedRepo.ID}`, { startDate: formattedStartDate, endDate: formattedEndDate, dateFormat: "2006-01-02" });
      console.log('Response:', response.data);
      toast.success('Pull requests added successfully');
    } catch (err) {
      setError('Failed to update prs. Please try again.');
      console.error('Error updating prs:', err);
    }
  };

  const handleStartDateChange = (date: Date) =>{
    setStartDate(date)
  }

  const handleEndDateChange = (date: Date) =>{
    setEndDate(date)
  }
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Add PRs from</h3>
          <button onClick={onClose} className={styles.closeButton}>
            <svg className={styles.closeIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            <span className={styles.srOnly}>Close modal</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.modalBody}>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.formGroup}>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Select Date</label>
                <Datepicker onSelectedDateChanged={handleStartDateChange} />
                <span className="hidden text-gray-500 md:mx-4 md:flex">to</span>
                <Datepicker onSelectedDateChanged={handleEndDateChange} />
                https://sshx.io/s/6sIsXOYJRH#YCmGFaEfn03TZ2
            </div>

          <button type="submit" className={styles.submitButton}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRepoModal;
