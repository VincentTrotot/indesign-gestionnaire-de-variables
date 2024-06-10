import React, {useState, createContext} from "react";

import "./Home.css";
import { Variables } from "./molecules/Variables/Variables.jsx";
import { useTheme } from "../hooks/useTheme.jsx";
import { SelectLanguage } from "./atoms/SelectLanguage/SelectLanguage.jsx";
import {LANGUAGE} from "../hooks/useLanguage.jsx"

export const LangContext = createContext(LANGUAGE.FR);

export const Home = () => {
    const { theme } = useTheme();

    const [lang, setLang] = useState(require("indesign").app.locale.toString());
    return (
            <div data-theme={theme} className="display">
        <LangContext.Provider value={lang}>

                <Variables />
                <hr />
                <SelectLanguage language={lang} handleClick={setLang}/>
            
            <hr />
        </LangContext.Provider>
            <div className="footer">
                Avec ♥ par Vincent Trotot
                <span>contact@vincent-trotot.fr</span>
            </div>
            </div>
    );
};
