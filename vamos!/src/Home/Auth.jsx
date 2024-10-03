import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import app from "./FirebaseInit";
import { useEffect, useState } from 'react';


export function Login() {

    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    };


    return (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      );
}
