import { useEffect, useState } from "react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { DarkModeContext } from "../context/ColorModeContext";

const ColorModeContainer = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
    );

    useEffect(() => {
        localStorage.setItem("my-dark-mode", JSON.stringify(darkMode));
    }, [darkMode]);

    const modeClass = darkMode ? "bg-dark text-white" : "";

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode, modeClass }}>
          <div className={`${modeClass} min-vh-100`}>
            <ColorModeSwitcher />
            {children}
          </div>
        </DarkModeContext.Provider>
    );
};

export default ColorModeContainer;
