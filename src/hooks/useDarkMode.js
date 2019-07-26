import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';


export default function useDarkMode(isDark) {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', isDark);

    useEffect( () => {
        if (darkMode === false) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
        
    }, [darkMode])

    return [darkMode, setDarkMode]
}