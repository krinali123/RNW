import { auth } from "../../firebased";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth"

export const signupAPI = (data) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            sendEmailVerification(user)
            const uid = user.uid;
          } else {

          }
        });
      })
      .then((dataemailverification) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            if (user.emailVerified) {
              resolve({payload:"Email successfully"});
            }
            else {
              resolve({payload:"please Email verifyed"});
            }
           }
          else {
            reject({payload:"something went wrong"});
          }
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
          resolve({payload:"Email already used"});
        } else {
          reject({payload:errorCode});
        }
      });
  })
}