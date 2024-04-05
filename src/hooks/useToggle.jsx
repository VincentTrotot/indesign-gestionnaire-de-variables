import { useState } from "react";

export const useToggle = (initialValue = true) => {
    const [state, setState] = useState(initialValue);

    const toggleState = () => {
        setState((prev) => !prev);
    };

    return {
        state,
        toggleState,
        setState,
    };
};
