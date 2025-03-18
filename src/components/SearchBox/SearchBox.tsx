
import { ChangeEvent, useState } from 'react';
import { Search } from 'lucide-react';
import styles from './SearchBox.module.css';

interface SearchBoxProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

export const SearchBox = ({ onSearch, placeholder }: SearchBoxProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      <Search className={styles.icon} size={20} />
    </div>
  );
};