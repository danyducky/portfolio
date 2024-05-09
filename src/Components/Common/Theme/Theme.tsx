import React, {useEffect, useState} from "react";
import Themes from "./Themes";
import ThemeContext, {useTheme} from "./ThemeContext";

import './Theme.scss';

const StorageKey = 'color-theme';
const AttributeKey = 'data-theme';

const Theme = (props: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Themes>(getTheme);

    useEffect(() => {
        localStorage.setItem(StorageKey, theme);
        document.documentElement.setAttribute(AttributeKey, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

Theme.ToggleButton = function ToggleButton() {
    const {theme, setTheme} = useTheme();

    const switchTheme = () => {
        if (theme === Themes.Dark) {
            setTheme(Themes.Light);
        } else {
            setTheme(Themes.Dark);
        }
    };

    return <button className='theme-toggle-button'
                   data-theme={theme}
                   onClick={switchTheme}/>;
};

const getTheme = (): Themes => {
    let theme = localStorage.getItem(StorageKey);
    if (!theme) {
        theme = Themes.Light;

        localStorage.setItem(StorageKey, theme);
    }

    return theme as Themes;
};

export default Theme;