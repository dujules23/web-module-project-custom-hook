
//import local storage 

import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('Toggle dark', false);
    // console.log(darkMode)
    //toggle function
    const toggleMode = () => {

        return darkMode ?  "dark-mode App" : "App";
    }
    //return value, setter function, and other functions to be passed
    return [darkMode, setDarkMode, toggleMode];

}

export default useDarkMode;