
import { useMemo } from 'react';
import { ActivityType, Driver } from '@/types/drivers';
import { WeekActivity } from '@/components/WeekActivity';
import { ActivityIndicator } from '@/components/ActivityIndicator';
import { calculateDriverStats } from '@/utils';
import styles from './DriverCard.module.css';

interface DriverCardProps {
  driver: Driver;
}

export const DriverCard = ({ driver }: DriverCardProps) => {

  const { totalMinutes, activityByType } = useMemo(() => calculateDriverStats(driver.traces), [driver.traces]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>{driver.forename} {driver.surname}</h3>
        <span className={styles.registration}>{driver.vehicleRegistration}</span>
      </div>

      <div className={styles.activitySummary}>
        <div className={styles.totalTime}>
          Total Activity: {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
        </div>

        <div className={styles.detailedBreakdown}>
          {Object.entries(activityByType).map(([type, minutes]) =>
          (
            <ActivityIndicator
              key={type}
              type={type as ActivityType}
              minutes={minutes}
            />
          )
          )}
        </div>
      </div>
      <WeekActivity traces={driver.traces} />
    </div>
  );
};
