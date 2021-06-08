
//import local storage 

import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('Toggle dark', initialValues);

    //toggle function
    const toggleMode = () => {

        return darkMode ?  "dark-mode App" : "App";
    }
    //return value, setter function, and other functions to be passed
    return [darkMode, setDarkMode, toggleMode];

}

export default useDarkMode;