import React from 'react';
import PrCard from '../prCard/PRCard';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  pullRequest: any; // Replace 'any' with the actual type of your pull request object
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose, pullRequest }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
      <div className="bg-white rounded-lg p-6 w-full h-full overflow-y-auto flex flex-col" style={{marginTop:"40px", marginLeft:"40px", marginRight:"40px"}}>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={onClose}
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="flex-grow overflow-y-auto">
          <PrCard pullRequest={pullRequest} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
