import { useState, useEffect, useRef } from "react";
const { app, VariableTypes } = require("indesign");

export const useVariables = () => {
    const [variables, setVariables] = useState([]);
    const [isOpenDocument, setIsOpenDocument] = useState(false);
    const inputVariableNameRef = useRef(null);
    const inputVariableValueRef = useRef(null);

    /**
     * Met à jour une variable
     * @param {string} value La nouvelle valeur de la variable
     * @param {number} index L'index de la variable dans l'objet app.activeDocument.textVariable
     */
    const updateVariable = (value, index) => {
        const textVariables = app.activeDocument.textVariables;
        let variable = textVariables.item(index);
        variable.variableOptions.contents = value;
        updateVariables();
    };

    const removeVariable = (index) => {
        const textVariables = app.activeDocument.textVariables;
        let variable = textVariables.item(index);
        variable.associatedInstances.map((instance) =>
            instance.convertToText()
        );
        variable.remove();

        updateVariables();
    };

    const addVariable = () => {
        const name = inputVariableNameRef.current.value;
        if (name == "") {
            alert("Veuillez renseigner un nom pour la variable.");
            return;
        }
        const value = inputVariableValueRef.current.value;

        const textVariables = app.activeDocument.textVariables;
        let variables = textVariables;
        let newVariableExists = false;
        for (let i = 0; i < textVariables.length; i++) {
            const currentVariable = textVariables.item(i);
            if (currentVariable.name === name) {
                newVariableExists = true;
                break;
            }
        }
        if (newVariableExists) {
            alert("Une variable porte déjà ce nom.");
        } else {
            variables.add({
                name: name,
                variableOptions: {
                    contents: value,
                },
            });
            inputVariableNameRef.current.value = "";
            inputVariableValueRef.current.value = "";
            updateVariables();
        }
    };

    const insertVariable = (index) => {
        const textVariables = app.activeDocument.textVariables;
        const selection = app.selection;
        if (selection.length != 0) {
            let variable = textVariables.item(index);
            selection.map((s) =>
                s.textVariableInstances.add({
                    associatedTextVariable: variable,
                })
            );
        }
    };

    /**
     * Met à jour l'ensemble des variables
     */
    const updateVariables = () => {
        setIsOpenDocument(app.documents.count() != 0);
        let variablesOutput = [];
        if (app.documents.count() != 0) {
            const textVariables = app.activeDocument.textVariables;

            // Récupération des variables de texte personnalisées du document
            for (let i = 0; i < textVariables.length; i++) {
                const currentVariable = textVariables.item(i);
                if (
                    currentVariable.variableType.equals(
                        VariableTypes.CUSTOM_TEXT_TYPE
                    )
                ) {
                    variablesOutput.push({
                        name: currentVariable.name,
                        value: currentVariable.variableOptions.contents,
                        index: currentVariable.index,
                    });
                }
            }
        }

        setVariables(variablesOutput);
    };

    /**
     * Raffraichit chaque seconde les variables
     * Utile pour que l'interface se mette à jour lors d'un changement de document
     */
    useEffect(() => {
        const intervalId = setInterval(updateVariables, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return {
        variables: variables,
        isOpenDocument: isOpenDocument,
        addVariable: addVariable,
        removeVariable: removeVariable,
        updateVariable: updateVariable,
        insertVariable: insertVariable,
        inputVariableNameRef: inputVariableNameRef,
        inputVariableValueRef: inputVariableValueRef,
    };
};
