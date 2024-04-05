import { useState, useEffect } from "react";

export const useTheme = () => {
    const THEME = {
        DARKEST: 0,
        DARK: 0.5,
        LIGHT: 0.51,
        LIGHTEST: 1,
    };

    const [theme, setTheme] = useState("");

    useEffect(() => {
        const themeInterval = setInterval(() => {
            const userTheme =
                require("indesign").app.generalPreferences
                    .uiBrightnessPreference;

            switch (userTheme) {
                case THEME.DARKEST:
                    setTheme("theme-darkest");
                    break;

                case THEME.DARK:
                    setTheme("theme-dark");
                    break;

                case THEME.LIGHT:
                    setTheme("theme-light");
                    break;

                case THEME.LIGHTEST:
                    setTheme("theme-lightest");
                    break;

                default:
                    setTheme("theme-default");
                    break;
            }
        }, 1000);
        return () => {
            clearInterval(themeInterval);
        };
    }, []);

    return { theme };
};
