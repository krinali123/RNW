import * as Actiontype from "../Actiontype"
const inintalstate = {
    isLoading: false,
    medicion: [],
    error: ""
}
export const medicionReduser = (state = inintalstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case Actiontype.GET_MEDICIONS:
            return {
                ...state,
                isLoading: false,
                medicion: action.payload,
                error: "",
            }
        case Actiontype.LOADING_MEDICIONS:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case Actiontype.ERROR_MEDICION:
            return {
                ...state,
                isLoading: false,
                medicion: [],
                error: action.payload,
            }
        case Actiontype.POST_MEDICIONS:
            return {
                ...state,
                isLoading: false,
                medicion: state.medicion.concat(action.payload),
                error: "",
            }
        case Actiontype.DELETE_MEDICIONS:
            return {
                ...state,
                isLoading: false,
                medicion: state.medicion.filter((l) => l.id !== action.payload),
                error: "",
            }
        case Actiontype.UPDATE_MEDICIONS:
            return {
                ...state,
                isLoading: false,
                medicion: state.medicion.map((l) => {
                    if (l.id === action.payload.id) {
                        return action.payload
                    }
                    else {
                        return l
                    }
                }),
                error: "",
            }
        default:
            return state
    }
}