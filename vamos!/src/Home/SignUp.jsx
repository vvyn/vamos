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
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
                <div className="w-full flex justify-center mb-4">
                    <img src="/eagle.png" alt="Eagle" className="h-24" /> {/* Adjust the height as needed */}
                </div>
                <h1 className="text-red-400 mb-8 font-bold">¡Vamos!</h1>
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
                />
                <button className="block m-2" onClick={handleSignUp}>Sign Up</button>
                
                <div className="text-white m-2 pt-8">Have an account?</div>
                <button className="ml-2 text-black" onClick={() => navigate("/login")}>Log In</button>

            </div>
        </>
    );
}
