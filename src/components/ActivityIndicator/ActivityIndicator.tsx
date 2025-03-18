import { ActivityType } from '@/types';
import styles from './ActivityIndicator.module.css';

interface ActivityIndicatorProps {
  type: ActivityType;
  minutes: number;
}

export const ActivityIndicator = ({ type, minutes }: ActivityIndicatorProps) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return (
    <div className={styles.activityType}>
      <span className={`${styles.indicator} ${styles[type]}`} />
      <span className={styles.label}>
        {type}: {hours}h {remainingMinutes}m
      </span>
    </div>
  );
};