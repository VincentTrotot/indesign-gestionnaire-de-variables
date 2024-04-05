import React from "react";

export const AddVariable = ({
    inputVariableNameRef,
    inputVariableValueRef,
    addVariable,
}) => {
    return (
        <>
            <h2 className="mb-2">Nouvelle variable</h2>
            <div className="addVariable">
                <label htmlFor="inputVariableName">Nom</label>
                <input
                    className="mb-2"
                    ref={inputVariableNameRef}
                    type="text"
                />
                <label htmlFor="inputVariableValue">Valeur</label>
                <input ref={inputVariableValueRef} type="text" />
                <div className="button" onClick={addVariable}>
                    Ajouter
                </div>
            </div>
        </>
    );
};
