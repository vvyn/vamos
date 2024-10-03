import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "./FirebaseInit";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function SignUp() {
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    };

    return (
        <>
            <div>
                <h1 className="text-white mb-8">Sign Up</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block m-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block m-2"
                />m-4
                <button className="block m-2" onClick={handleSignUp}>Sign Up</button>
                <div className="text-white m-2">Have an account?
                </div>
                <button className="ml-2 text-black" onClick={() => navigate("/login")}>Log In</button>

            </div>
        </>
    );
}
