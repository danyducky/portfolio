import {createContext, useContext} from "react";
import Themes from "./Themes";

const ThemeContext = createContext<
    | {
    theme: Themes;
    setTheme: (theme: Themes) => void;
} | undefined
>(undefined);

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            'You can use "useTheme" hook only within a <ThemeProvider> component.'
        );
    }

    return context;
};

export {useTheme};
export default ThemeContext;