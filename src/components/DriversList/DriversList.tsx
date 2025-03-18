import { useMemo, useCallback } from 'react';
import styles from './DriversList.module.css';
import { DriverCard } from '@/components/DriverCard';
import { SearchBox } from '@/components/SearchBox';
import { useDrivers } from '@/contexts';
import { debounce, filterDrivers } from '@/utils';

export const DriversList = () => {
  const { drivers, filter, searchDriver } = useDrivers();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      searchDriver(value);
    }, 300),
    [searchDriver]
  );

  const filteredDrivers = useMemo(() =>
    filterDrivers(drivers, filter), [drivers, filter]);

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchBox placeholder='Search by name or registration...' onSearch={debouncedSearch} />
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
