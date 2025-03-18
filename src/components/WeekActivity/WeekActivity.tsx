
import { useMemo } from 'react';
import { format, parseISO, startOfWeek, addDays, isSameDay } from 'date-fns';
import styles from './WeekActivity.module.css';
import { Trace } from '@/types';
interface WeekActivityProps {
  traces: Trace[];
}

export const WeekActivity = ({ traces }: WeekActivityProps) => {

  const calculatedValues = useMemo(() => {
    const referenceDate = traces.length > 0 ? parseISO(traces[0].date) : new Date();
    const weekStart = startOfWeek(referenceDate, { weekStartsOn: 1 });
    const month = format(referenceDate, 'MMM');
    const year = referenceDate.getFullYear();

    const traceDates = traces.map(trace => parseISO(trace.date));

    const hasActivityOnDay = (date: Date): boolean => {
      return traceDates.some(traceDate => isSameDay(traceDate, date));
    };

    const weekDays = Array.from({ length: 7 }, (_, index) => {
      const day = addDays(weekStart, index);
      return {
        date: day,
        shortDay: format(day, 'E'),
        dayOfMonth: format(day, 'd'),
        hasActivity: hasActivityOnDay(day)
      };
    });

    return {
      month,
      year,
      weekDays
    };
  }, [traces]);


  return (
    <div className={styles.weekContainer}>
      {calculatedValues.weekDays.map((day, index) => (
        <div key={`${day.date}-${index}`} className={styles.dayWrapper}>
          <span className={styles.dayLabel}>{day.shortDay}</span>
          <div
            className={`${styles.dayBox} ${day.hasActivity ? styles.active : ''}`}
            title={`${day.hasActivity ? 'Activity' : 'No activity'} on ${calculatedValues.month} ${day.dayOfMonth}, ${calculatedValues.year}`}
          />
        </div>
      ))}
    </div>
  )
};
