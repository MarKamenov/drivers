

import {  SidebarListItem } from '@/types/menu';
import { SidebarItem } from '@/components/Sidebar/SidebarItem';
import styles from './Sidebar.module.css';

interface SidebarProps {
  sidebarItems: SidebarListItem[];
  isOpen: boolean;
  onNavigate?: () => void;
}

export const Sidebar = ({ isOpen, onNavigate, sidebarItems }:SidebarProps) => {

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
    <nav className={styles.nav}>
      {sidebarItems.map((item) => (
      <SidebarItem
      key={item.title}
      title={item.title}
      url={item.url}
      onNavigate={onNavigate}
    />
      ))}
    </nav>
  </aside>
  );
};
