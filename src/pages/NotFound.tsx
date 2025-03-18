

import { useLocation, Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>
          The page <code>{location.pathname}</code> could not be found.
        </p>
        <Link to="/" className={styles.button}>
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
