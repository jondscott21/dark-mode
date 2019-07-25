import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';


export default function useDarkMode(isDark) {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', isDark);
    console.log(useLocalStorage)
    // const handleChange = ((updatedValue) => {
    //     event.preventDefault();
    //     setDarkMode(updatedValue)
    // })

    useEffect( () => {
        if (isDark === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
    }, [isDark])

    return [darkMode, setDarkMode]
}