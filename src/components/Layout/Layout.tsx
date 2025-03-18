import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import menuData from '../../data/menu.json';
import styles from './Layout.module.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles.layout}>
      <Header toggleSidebar={toggleSidebar} onLogoClick={closeSidebar} />
      <div className={styles.container}>
        <Sidebar sidebarItems={menuData.data} isOpen={sidebarOpen} onNavigate={closeSidebar} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;