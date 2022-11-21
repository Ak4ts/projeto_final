import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home'
import LandingPage from "./pages/landing-page"
import Login from './pages/login-page'
import Sign_up from './pages/sign-up-page'
import RecoverAccount from './pages/recover-account'
import AccountSettings from "./pages/account-settings"
import Cards from "./pages/cards"
import Chats from "./pages/chats"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/settings' element={<AccountSettings/>}/>
          <Route path='/cards' element={<Cards/>}/>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/recover-account' element={<RecoverAccount/>}/>
          <Route path='/landing-page' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<Sign_up/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

