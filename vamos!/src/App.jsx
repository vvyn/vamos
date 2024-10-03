import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import {Home} from './Home/Home';
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import {Login} from './Home/Login';
import app from './Home/FirebaseInit';
import { SignUp } from './Home/SignUp';

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const loginState = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => loginState();
  }, [auth]);


  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-r from-red-500 to-blue-500"> 
        <Router>
            <Routes>
            <Route
              exact
              path="/"
              element={user ? <Home /> : <Navigate to="/signup" />}
            />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
