import * as Actiontype from "../Actiontype"
const initalstate = {
    counter: 0
}

export const counterReducer = (state = initalstate, action) => {
    console.log(action.type);
    switch (action.type) {
        case Actiontype.INCREMENTCOUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }

        case Actiontype.DECREMENTCOUNTER:
            return {
                ...state,
                counter: state.counter -1
            }
            default:
                return state;
    }
}