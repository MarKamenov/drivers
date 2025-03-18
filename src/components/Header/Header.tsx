import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '@/assets/images/logo.png';
import styles from './Header.module.css';

interface HeaderProps {
  toggleSidebar: () => void;
  onLogoClick: () => void;
}

export const Header = ({ toggleSidebar, onLogoClick }:HeaderProps) => {
  return (
    <header className={styles.header}>
        <Menu className={styles.menuButton} aria-label='Toggle menu' onClick={toggleSidebar} size={24} />
      
      <Link to="/" className={styles.logoLink} onClick={onLogoClick}>
        <img 
          src={logo} 
          alt="Logistics UK" 
          className={styles.logo} 
        />
      </Link>
    </header>
  );
};
