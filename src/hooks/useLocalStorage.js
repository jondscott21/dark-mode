import {useState} from 'react';

export default function useLocalStorage(key, initialValue) {
    
    const [storedValue, setStoredValue] = useState(() => {
        console.log('key:', key, 'value:', storedValue)
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        console.log('key:', key, 'value:', storedValue)
        window.localStorage.setItem(key, JSON.stringify(value));
      };
    return [storedValue, setValue];
};