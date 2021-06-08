import { useState } from "react";


const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);

        setValue = (value) => {
            //save state
            setStoredValue(value);
            // Save to local storage 
            window.localStorage.setItem(key, JSON.stringfy(value))
        }

        return item ? JSON.parse(item) : initialValue;
    });

    return [storedValue, setValue];
}

export default useLocalStorage;