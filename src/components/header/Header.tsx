import { useState,useEffect } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Dropdown from '../dropdown/Dropdown';
import UpdatePRModal from '../modal/UpdatePRModal';
import { useRepoContext } from '../../context/RepoContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        PR<span>Analyzer</span>.
      </h2>
    </Link>
  </div>
);

interface ActiveLinkProps {
  isActive: boolean;
}

const activeLink = ({ isActive }: ActiveLinkProps) =>
  isActive ? `${styles.active}` : '';

const Header = () => {
  const [analysisNumber, setAnalysisNumber] = useState({totalPRs:0,embeddingsPRs:0});
  const [analysedPercentage, setAnalysedPercentage] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedRepo } = useRepoContext();

  useEffect(() => {

    // This code runs whenever "myVariable" changes
    if (selectedRepo !== null) {
      const fetchSyncLevel = async () => {
      const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
      const syncLevel = await axios.get(`${backendUrl}/pullrequests-syncLevel?id=${selectedRepo.ID}`);
      setAnalysisNumber(syncLevel.data);
      setAnalysedPercentage((syncLevel.data.embeddingsPRs/syncLevel.data.totalPRs)*100);
      console.log('Fetched syncLevel:', syncLevel.data);
    }
    fetchSyncLevel();
    }
  }, [selectedRepo]); // The effect will run whenever "myVariable" changes
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const handleUpdateRepo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSync = async () => {
    const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
    const response = await axios.post(`${backendUrl}/pullrequests-sync`);
    console.log('Response:', response.data);
    toast.loading('Syncing PRs');
  }

  return (
    <header style={{height: '7vh'}}>

      <div className={styles.header}>
        <span className={styles.logoHeader}>{logo}</span>

        {
        selectedRepo && <div style={{width: '200px',marginLeft: '20px'}}>
          <div className="flex justify-between mb-1">

              <a onClick={handleSync} className="bg-green-100 hover:bg-green-200 text-green-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 inline-flex items-center justify-center" style={{cursor: 'pointer'}}>Sync</a>

            <span className="text-sm font-medium text-white-700 dark:text-white"> {analysisNumber.embeddingsPRs}/{analysisNumber.totalPRs}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-green-600 h-2.5 w-.5 rounded-full" style={{width: analysedPercentage+"%"}}></div>
          </div>
        </div>
        }

        <nav
          className={
            showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                : `${styles['nav-wrapper']}`
            }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles['logo-mobile']}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/home" className={activeLink}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <Dropdown onAddRepo={() => {/* Add repository logic */}} />
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-30" type="button" onClick={handleUpdateRepo}>
                    Add PR
              </button>
              </li>
              <li>
                <UpdatePRModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                ></UpdatePRModal>
              </li>
          </ul>


        </nav>

        <div className={styles['menu-icon']}>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>

      </div>
    </header>
  );
};

export default Header;


