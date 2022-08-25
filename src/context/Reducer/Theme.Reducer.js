import * as Actiontype from "../Actiontype"
// import '../index.css';

export const ThemeReducer =(state,action)=>{
    switch(action.type){
        case Actiontype.TOOGLE_REDUCER:
        return{
            ...state,
            theme:action.payload
        }
        default:
            return state;

    }
}