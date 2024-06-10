import React from "react";
import {LANGUAGE} from "../../../hooks/useLanguage.jsx"

export const SelectLanguage = ({
    language, handleClick
}) => {
    return (
        <div className="language">
            {language == LANGUAGE.FR &&
                <div className="button" onClick={ () => {handleClick(LANGUAGE.EN)} }>
                English
            </div>
            }
            {language == LANGUAGE.EN &&
                <div className="button" onClick={ () => {handleClick(LANGUAGE.FR)} }>
                Français
            </div>
            }
        </div>
    );
};
