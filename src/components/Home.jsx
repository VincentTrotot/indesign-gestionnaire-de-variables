import React from "react";

import "./Home.css";
import { Variables } from "./molecules/Variables/Variables.jsx";
import { useTheme } from "../hooks/useTheme.jsx";
export const Home = () => {
    const { theme } = useTheme();
    return (
        <div data-theme={theme} className="display">
            <Variables />
        </div>
    );
};
