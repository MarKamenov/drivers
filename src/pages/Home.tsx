

import { Link } from 'react-router-dom';
import pageStyles from '../assets/styles/pages.module.css';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={pageStyles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Logistics Fleet Management</h1>
        <p className={styles.description}>
          Welcome to the fleet management dashboard. Access driver information, vehicle data, and more.
        </p>
      </div>
      
      <div className={styles.cardGrid}>
        <Link to="/drivers" className={styles.card}>
          <h2 className={styles.cardTitle}>Drivers</h2>
          <p className={styles.cardDescription}>
            View and manage driver information, activity logs, and schedules.
          </p>
          <div className={styles.cardFooter}>
            <span className={styles.cardLink}>View Drivers →</span>
          </div>
        </Link>
        
        <Link to="/vehicles" className={styles.card}>
          <h2 className={styles.cardTitle}>Vehicles</h2>
          <p className={styles.cardDescription}>
            Access vehicle data, maintenance records, and registration details.
          </p>
          <div className={styles.cardFooter}>
            <span className={styles.cardLink}>View Vehicles →</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
