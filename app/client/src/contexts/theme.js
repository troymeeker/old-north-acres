// import { createContext, useState, useEffect } from "react";


// const themes = {
//     dark: {
//       backgroundColor: 'black', 
//       color: 'white' 
//   }, 
//     light: {
//       backgroundColor: 'white',
//       color: 'black'
//     },
  
// };

// export const ThemeContext = createContext();

// export const ThemeProvider = ({children}) => {
//     const [darkTheme, setDarkTheme] = useState(false); 
       
//     const toggleTheme = () => {
//         localStorage.setItem('darkTheme', JSON.stringify(!darkTheme))
//         setDarkTheme(!darkTheme);
//     }    
//     const theme = darkTheme ? themes.dark : themes.light; 
   
//     useEffect(() => {
//         const darkTheme = localStorage.getItem('darkTheme') === 'true';
//         setDarkTheme(darkTheme);
//     }, []);

//     return (
//         <ThemeContext.Provider value={darkTheme} >
//             {children}
//         </ThemeContext.Provider>
//     );
// };





