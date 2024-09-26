import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Home} from './Home/Home';
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import {Login} from './Home/Auth';

function App() {
  const [user, setUser] = useState(null);
  auth = getAuth();

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
      <div className="h-screen w-screen bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7]"> 
        <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={user ? <Navigate to="/login" /> : <Home />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
