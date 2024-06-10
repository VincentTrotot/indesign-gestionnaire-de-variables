import React, {useContext} from "react";
import { LangContext } from "../../Home.jsx";
import {LANGUAGE} from "../../../hooks/useLanguage.jsx"


export const ListVariables = ({
    variables,
    removeVariable,
    updateVariable,
    insertVariable,
}) => {
    const lang = useContext(LangContext);
    if (variables.length == 0) {
        return (
            <div>
                <b>{lang == LANGUAGE.FR ? 'Pas de variable dans le document' : 'No variable in the document'}</b>
            </div>
        );
    }
    return (
        <div className="inputs">
            {variables.map((v) => (
                <div className="input" key={v.index}>
                    <div className="label">
                        <label htmlFor={`var-${v.index}`}>
                            <b>{v.name}</b>
                        </label>
                    </div>

                    <input
                        className="updateVariable"
                        name={`var-${v.index}`}
                        id={`var-${v.index}`}
                        type="text"
                        value={v.value}
                        onChange={(e) =>
                            updateVariable(e.currentTarget.value, v.index)
                        }
                    />
                    <div className="buttons">
                        <div
                            className="button"
                            onClick={() => {
                                insertVariable(v.index);
                            }}
                        >
                            {lang == LANGUAGE.FR ? 'Insérer' : 'Insert'}
                        </div>
                        <div
                            className="button"
                            onClick={() => {
                                removeVariable(v.index);
                            }}
                        >
                            {lang == LANGUAGE.FR ? 'Supprimer' : 'Delete'}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
