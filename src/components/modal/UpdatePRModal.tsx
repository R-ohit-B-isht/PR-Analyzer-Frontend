import React, { useState } from 'react';
import styles from './CreateRepoModal.module.scss';
import { Datepicker } from "flowbite-react";

interface CreateRepoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, url: string) => void;
}

const CreateRepoModal: React.FC<CreateRepoModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await onSubmit(name, url);
      setName('');
      setUrl('');
      onClose();
    } catch (err) {
      setError('Failed to create repository. Please try again.');
      console.error('Error creating repository:', err);
    }
  };

  const handleStartDateChange = (date: Date) =>{
    console.log(date)
  }

  const handleEndDateChange = (date: Date) =>{
    console.log(date)
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
                <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Date</label>
                <Datepicker onSelectedDateChanged={handleStartDateChange} />
                <span className="hidden text-gray-500 md:mx-4 md:flex">to</span>
                <Datepicker onSelectedDateChanged={handleEndDateChange} />
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
