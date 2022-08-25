import { async } from "@firebase/util";
import { deletemedicineData, getmedicionData } from "../../apis/medicines.apis";
import { db } from "../../firebased";
import { BASE_URL } from "../../Shared/basedurl";
import * as Actiontype from "../Actiontype"
import { collection, addDoc } from "firebase/firestore"; 
export const getmedicion = (data) => (dispatch) => {
  try {
    dispatch(loadingmedicine())
   return setTimeout(function () {
    getmedicionData()
    .then((data) => dispatch(({ type: Actiontype.GET_MEDICIONS, payload: data.data })))
    .catch((error) => dispatch(errormedicion(error.message)))

  }, 2000)
 }
  catch (error) {
   dispatch(errormedicion(error.message))

   }
}

export const loadingmedicine = () => (dispatch) => {
  dispatch({ type: Actiontype.LOADING_MEDICIONS });
}
export const errormedicion = (error) => (dispatch) => {
  dispatch({ type: Actiontype.ERROR_MEDICION, payload: error })
}

export const deletemedicines = (id) => (dispatch) => {

  try {
    deletemedicineData(id)
    .then(dispatch(({type: Actiontype.DELETE_MEDICIONS, payload: id})))
    .catch((error) => dispatch(errormedicion(error.message)))
    // fetch(BASE_URL + 'Medicine/'+id,
    // {
    //   method: 'DELETE'
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //     error => {
    //       var errmess = new Error(error.message);
    //       throw errmess;
    //     })
    //   .then(response => response.json())
    //   .then(dispatch(({ type: Actiontype.DELETE_MEDICIONS, payload: id })))
    //   .catch((error) => dispatch(errormedicion(error.message)))

  }catch (error) {
    dispatch((error) => dispatch(errormedicion(error.message)))
  }
}
  

export const updateMedicine = (data) => (dispatch) => {

  try {
    setTimeout(function() {
       updateMedicine(data)
      .then((data)=>dispatch({ type: Actiontype.UPDATE_MEDICIONS, payload:  data.data}))
      .catch((error) => dispatch(errormedicion(error.message)))
    }, 2000);
  //   fetch(BASE_URL + 'Medicine/'+ data.id,
  //   {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //         error.response = response;
  //         throw error;
  //       }
  //     },
  //       error => {
  //         var errmess = new Error(error.message);
  //         throw errmess;
  //       })
  //     .then(response => response.json())
  //     .then(dispatch(({ type: Actiontype.UPDATE_MEDICIONS, payload:  data})))
  //     .catch((error) => dispatch(errormedicion(error.message)))
   }

  catch (error) {
    dispatch((error) => dispatch(errormedicion(error.message)))
  }
}

export const postmedicione =  (data) => async (dispatch) => {
  try {
    // dispatch(loadingmedicine());
    const docRef = await addDoc(collection(db, "Medicine"), data);
    dispatch({type:Actiontype.POST_MEDICIONS, payload: {id:docRef.id, ...data}})
    console.log("Document written with ID: ", docRef.id);
  //   setTimeout(function () {
  //     return fetch(BASE_URL + 'Medicine', {
  //       method: 'POST', // or 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),

  //     })
  //       .then(response => {
  //         if (response.ok) {
  //           return response;
  //         } else {
  //           var error = new Error('Error ' + response.status + ': ' + response.statusText);
  //           error.response = response;
  //           throw error;
  //         }
  //       },
  //         error => {
  //           var errmess = new Error(error.message);
  //           throw errmess;
  //         })
  //       .then(response => response.json())
  //       .then(medicines => dispatch(({ type: Actiontype.POST_MEDICIONS, payload: medicines })))
  //       .catch((error) => dispatch(errormedicion(error.message)))

  //   }, 2000)
   }
  catch (error) {
    console.error("Error adding document: ", error);
  }
}