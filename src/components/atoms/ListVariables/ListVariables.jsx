import React from "react";

export const ListVariables = ({
    variables,
    removeVariable,
    updateVariable,
    insertVariable,
}) => {
    if (variables.length == 0) {
        return (
            <div>
                <b>Pas de variable dans le document</b>
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
                            Insérer
                        </div>
                        <div
                            className="button"
                            onClick={() => {
                                removeVariable(v.index);
                            }}
                        >
                            Supprimer
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
