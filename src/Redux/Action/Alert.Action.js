import * as Actiontype from "../Actiontype"

export const setalert = (data) => (dispatch) => {
    dispatch({type:Actiontype.SET_ALERT,payload:data})
}

export const ResetAlert = () => (dispatch) => {
    dispatch({type:Actiontype.RESET_ALERT})
}
