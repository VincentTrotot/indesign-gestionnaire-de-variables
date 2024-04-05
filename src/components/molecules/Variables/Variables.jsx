import React from "react";
import { useVariables } from "../../../hooks/useVariables.jsx";
import { useToggle } from "../../../hooks/useToggle.jsx";
import { AddVariable } from "../../atoms/AddVariable/AddVariable.jsx";
import { ListVariables } from "../../atoms/ListVariables/ListVariables.jsx";

export const Variables = () => {
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
                <b>Aucun document ouvert</b>
            </div>
        );
    }

    return (
        <>
            <p>
                {variables.length} variable{variables.length > 1 && "s"} dans ce
                document.
            </p>
            {variables.length != 0 && (
                <>
                    <div
                        className="button"
                        onClick={toggleAfficherListVariables}
                    >
                        {afficherListVariables ? "Masquer" : "Afficher"}
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
            <hr />
            <div className="footer">
                Avec ♥ par Vincent Trotot
                <span>contact@vincent-trotot.fr</span>
            </div>
        </>
    );
};
