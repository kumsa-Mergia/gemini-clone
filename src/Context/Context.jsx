import { createContext, useState } from "react";
import run from "../config/gemini.js";

export const Context = createContext();

const ContexProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prePrompts,setPrevPrompts] = useState([]);
    const [showResults,setResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");



    const onSent = async (prompt) => {
        await run(input)
    }

    const contextValue = {
        prePrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,resultData,
        input,
        setInput

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}

        </Context.Provider>
    )
}

export default ContexProvider;