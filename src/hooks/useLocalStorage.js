import { useState } from "react";


const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);

       
        return item ? JSON.parse(item) : initialValue;
    });

    const setValueAndLocalStorage = value => {
        //save state
        setStoredValue(value);
        // Save to local storage 
        window.localStorage.setItem(key, JSON.stringify.value)
    }


    return [storedValue, setValueAndLocalStorage];
}

export default useLocalStorage;