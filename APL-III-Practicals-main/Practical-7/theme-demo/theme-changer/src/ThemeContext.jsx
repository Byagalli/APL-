import { createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState("light");
const toggleTheme = () => {
setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};
const themeStyles = {
light: {
backgroundColor: "#ffffff",
color: "#000000",
},
dark: {
backgroundColor: "#121212",
color: "#ffffff",
},
};
return (
<ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
{children}
</ThemeContext.Provider>
);
};
