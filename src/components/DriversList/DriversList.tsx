import { useMemo } from 'react';
import styles from './DriversList.module.css';
import { DriverCard } from '../DriverCard/DriverCard';
import { SearchBox } from '../SearchBox/SearchBox';
import { useDrivers } from '@/contexts/DriversContext';
import { filterDrivers } from '@/utils/utils';

export const DriversList = () => {
  const { drivers, filter, searchDriver } = useDrivers();

  const filteredDrivers = useMemo(() =>
    filterDrivers(drivers, filter), [drivers, filter]);

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchBox placeholder='Search by name or registration...' onSearch={searchDriver} />
      </div>
      <div className={styles.list}>
        {filteredDrivers.length === 0 ? <div className={styles.noResults}>
          No drivers match your search criteria
        </div> : filteredDrivers.map(driver => (
          <DriverCard key={driver.driverID} driver={driver} />
        ))}
      </div>
    </div>
  );
};
