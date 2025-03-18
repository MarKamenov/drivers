import { DriversList } from '../components/DriversList/DriversList';
import pageStyles from '../assets/styles/pages.module.css';
import styles from './Drivers.module.css';

const Drivers = () => {
  return (
    <div className={pageStyles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Drivers Overview</h1>
        <p className={styles.description}>
          View and manage all drivers and their weekly activities.
        </p>
      </div>
      <DriversList />
    </div>
  );
};

export default Drivers;
