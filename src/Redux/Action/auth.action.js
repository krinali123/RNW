import * as Actiontype from "../Actiontype"

export const signupAction =(data)=>(dispatch)=>{
    dispatch({type:Actiontype.SIGNUP_USER,payload:data})
}
export const emailverification = (user) => (dispatch) => {
    dispatch({type:Actiontype.EMAIL_VEREFICATION,payload:user})
}

