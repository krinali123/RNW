import { createContext, useReducer } from "react";
import { ThemeReducer } from "./Reducer/Theme.Reducer";
import * as Actiontype from "./Actiontype";
import '../index.css';


const ThemeContext =createContext();

const intial={
    theme:'light'
}
export const ThemeProdiver=({children})=>{
    const [state, dispatch] = useReducer(ThemeReducer, intial);
    const toogle_theme=(theme)=>{
        const newtheme = theme === 'light' ? 'dark' : 'light';
        dispatch({type:Actiontype.TOOGLE_REDUCER, payload:newtheme})
    }
    return(
        <ThemeContext.Provider
        value={{
            ...state,
            toogle_theme
        }} 
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
