import { useState } from "react";


export const LANGUAGE = {
    FR: "FRENCH_LOCALE",
    EN: "ENGLISH_LOCALE",
};

export const useLanguage = () => {
    const [language, setLanguage] = useState(LANGUAGE.FR);
    return { language, setLanguage };
};
