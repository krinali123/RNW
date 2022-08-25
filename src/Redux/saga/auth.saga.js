import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signupAPI } from '../../Comoon/api/auth.api';
import { setalert } from '../Action/Alert.Action';
import { emailverification } from '../Action/auth.action';
import * as Actiontype from "../Actiontype"
function* singup(action) {
   try {
      const user = yield call(signupAPI,action.payload);
      yield put(setalert({text:user.payload, color:"success"}))
      yield put(emailverification(user));
   } catch (e) {
      yield put(setalert({text:e.payload, color:"success"}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* watchsignup() {
  yield takeEvery(Actiontype.SIGNUP_USER, singup);
}
export function* authsaga(){
    yield all([watchsignup()])
}


