import pageStyles from '../assets/styles/pages.module.css';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={pageStyles.container}>
      <h1 className={styles.title}>About Logistics UK</h1>
      <div className={styles.card}>
        <p className={styles.description}>
          This application is a demonstration project for Logistics UK driver and fleet management.
        </p>
        <p className={styles.description}>
          It allows fleet managers to track driver activities, monitor vehicle usage, and optimize logistics operations.
        </p>
        <p className={styles.description}>
          For more information, please visit the official Logistics UK website.
        </p>
      </div>
    </div>
  );
};

export default About;
