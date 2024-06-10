import React, {useContext} from "react";
import { LangContext } from "../../Home.jsx";
import {LANGUAGE} from "../../../hooks/useLanguage.jsx"


export const AddVariable = ({
    inputVariableNameRef,
    inputVariableValueRef,
    addVariable,
}) => {
    const lang = useContext(LangContext);
    return (
        <>
            <h2 className="mb-2">{lang == LANGUAGE.FR ? 'Nouvelle variable' : 'New variable'}</h2>
            <div className="addVariable">
                <label htmlFor="inputVariableName">{lang == LANGUAGE.FR ? 'Nom' : 'Name'}</label>
                <input
                    className="mb-2"
                    ref={inputVariableNameRef}
                    type="text"
                />
                <label htmlFor="inputVariableValue">{lang == LANGUAGE.FR ? 'Valeur' : 'Value'}</label>
                <input ref={inputVariableValueRef} type="text" />
                <div className="button" onClick={addVariable}>
                {lang == LANGUAGE.FR ? 'Ajouter' : 'Add'}
                </div>
            </div>
        </>
    );
};
