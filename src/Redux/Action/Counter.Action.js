import * as Actiontype from "../Actiontype"


export const incrementcounter =() => (dispatch) =>{
   dispatch({type:Actiontype.INCREMENTCOUNTER})
}

export const decrementcounter =() => (dispatch) =>{
   dispatch({type:Actiontype.DECREMENTCOUNTER})
 }