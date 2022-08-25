import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reducer";
import { medicionReduser } from "./medicion.reduser";

export const rootReducer = combineReducers({
    counter: counterReducer,
    medicion:medicionReduser
    
})