import pageStyles from '../assets/styles/pages.module.css';
import styles from './Vehicles.module.css';

const Vehicles = () => {
  return (
    <div className={pageStyles.container}>
      <h1 className={styles.title}>Vehicles</h1>
      <div className={styles.card}>
        <p className={styles.notice}>
          Vehicle management page is under development.
        </p>
        <p className={styles.description}>
          This section will contain vehicle data, maintenance records, and registration details.
        </p>
      </div>
    </div>
  );
};

export default Vehicles;
