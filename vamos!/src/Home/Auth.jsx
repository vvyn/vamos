import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged  } from "firebase/auth";

export function Login() {

    auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });


    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

  return (
    <div>
        login
    </div>
  );
}
