import { useState } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Dropdown from '../dropdown/Dropdown';
import UpdatePRModal from '../modal/UpdatePRModal';

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
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSubmitRepo = async (name: string, url: string) => {
    try {
      const backendUrl = 'http://localhost:8080';
      const response = await axios.post(`${backendUrl}/repositories`, { name, url });
      setRepositories([...repositories, response.data]);
      setIsModalOpen(false);
      toast.success('Repository added successfully');
      onAddRepo(); // Call the onAddRepo prop function
    } catch (error) {
      console.error('Error adding repository:', error);
      toast.error('Failed to add repository');
    }
  };
  return (
    <header>

      <div className={styles.header}>
        <span className={styles.logoHeader}>{logo}</span>

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
                onSubmit={handleSubmitRepo}
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
