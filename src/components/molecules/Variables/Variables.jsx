import React, {useContext} from "react";
import { useVariables } from "../../../hooks/useVariables.jsx";
import { useToggle } from "../../../hooks/useToggle.jsx";
import { AddVariable } from "../../atoms/AddVariable/AddVariable.jsx";
import { ListVariables } from "../../atoms/ListVariables/ListVariables.jsx";
import { LangContext } from "../../Home.jsx";
import {LANGUAGE} from "../../../hooks/useLanguage.jsx"

export const Variables = () => {
    const lang = useContext(LangContext);
    
    const {
        variables,
        isOpenDocument,
        addVariable,
        removeVariable,
        updateVariable,
        insertVariable,
        inputVariableNameRef,
        inputVariableValueRef,
    } = useVariables();

    const {
        state: afficherListVariables,
        toggleState: toggleAfficherListVariables,
    } = useToggle(false);

    if (!isOpenDocument) {
        return (
            <div>
                <b>{lang == LANGUAGE.FR ? 'Aucun document ouvert' : 'No open document'}</b>
            </div>
        );
    }

    return (
        <>
            <p>
                {lang == LANGUAGE.FR ? 
                    <>
                        {variables.length} variable{variables.length > 1 && "s"} dans ce document.
                    </> : 
                    <>
                    {variables.length} variable{variables.length > 1 && "s"} in this document.
                </>}
            </p>
            {variables.length != 0 && (
                <>
                    <div
                        className="button"
                        onClick={toggleAfficherListVariables}
                    >
                        {lang == LANGUAGE.FR ? 
                    <>
                        {afficherListVariables ? "Masquer" : "Afficher"}
                        
                    </> : 
                    <>
                    {afficherListVariables ? "Hide" : "Show"}
                    
                </>}
                    </div>
                    {afficherListVariables && (
                        <ListVariables
                            variables={variables}
                            removeVariable={removeVariable}
                            updateVariable={updateVariable}
                            insertVariable={insertVariable}
                        />
                    )}
                </>
            )}

            <hr />
            <AddVariable
                inputVariableNameRef={inputVariableNameRef}
                inputVariableValueRef={inputVariableValueRef}
                addVariable={addVariable}
            />
        </>
    );
};
