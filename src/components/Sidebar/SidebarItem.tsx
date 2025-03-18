import { NavLink } from 'react-router-dom';
import styles from './SidebarItem.module.css';

interface SidebarItemProps {
  title: string;
  url: string;
  onNavigate?: () => void;
}

export const SidebarItem = ({ title, url, onNavigate }: SidebarItemProps) => {
  return (
    <NavLink
      to={url}
      onClick={onNavigate}
      className={({ isActive, isPending }) => 
        `${styles.navLink} ${isActive ? styles.active : ''} ${isPending ? styles.pending : ''}`
      }
    >
      {title}
    </NavLink>
  );
};
