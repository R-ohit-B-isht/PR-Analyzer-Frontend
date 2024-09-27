import React, { useState } from 'react';
import styles from './CreateRepoModal.module.scss';

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

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Add Repository</h3>
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
            <label htmlFor="name" className={styles.label}>Repository Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Enter repository name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="url" className={styles.label}>Repository URL</label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={styles.input}
              placeholder="Enter repository URL"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            <svg className={styles.addIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
            </svg>
            Add Repository
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRepoModal;
