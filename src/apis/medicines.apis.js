import { deleteRequest, getRequest, postRequest, putRequest } from "../Common/request"

export const getmedicionData =()=>{
    return getRequest("Medicine")
}

export const addmedicionData =(data)=>{
    return postRequest("Medicine",data)
}
export const deletemedicineData=(id)=>{
  return deleteRequest("Medicine/", id)
}
export const updateMedicine=(data)=>{
  return putRequest("Medicine",data)
}