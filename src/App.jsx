import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/home'
import Login from './pages/login-page'
import Sign_up from './pages/sign-up-page'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<Sign_up/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

