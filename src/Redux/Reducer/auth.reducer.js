import * as Actiontype from "../Actiontype"
const initalstate = {
    isloading: false,
    user:null,
    error:""
}
export const authreducer = (state = initalstate, action) => {
    console.log(action.type);
    switch (action.type) {
        case Actiontype.EMAIL_VEREFICATION:
            return {
                ...state,
                isloading: false,
                user:action.payload,
                error:""
            }

      
            default:
                return state;
    }
}