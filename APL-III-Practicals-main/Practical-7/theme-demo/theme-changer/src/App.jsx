
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
const ThemedPage = () => {
const { theme, toggleTheme, themeStyles } = useContext(ThemeContext);
const style = {
...themeStyles[theme],
minHeight: "100vh",
minWidth: "100vw",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
transition: "all 0.3s ease",
};
return (
<div style={style}>
<h1>{theme === "light" ? " Light Theme" : " Dark Theme"}</h1>
<button
onClick={toggleTheme}
style={{
marginTop: "20px",
padding: "10px 20px",
border: "none",
borderRadius: "10px",
cursor: "pointer",
}}
>
Switch to {theme === "light" ? "Dark" : "Light"} Mode
</button>
</div>
);
};
export default function App() {
return (
<ThemeProvider>
<ThemedPage />
</ThemeProvider>
);
}
