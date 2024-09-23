import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Home} from './Home/Home';


function App() {

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-[#2C3E50] to-[#BDC3C7]"> 
        <Router>
            <Routes>
                <Route exact path = "/" element = {<Home />}>/</Route>
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
