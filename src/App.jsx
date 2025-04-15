
import About from './components/About'
import Admin from './components/Admin'
import Create from './components/Create'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Update from './components/Update'
import { useState } from 'react'


function App() {
 //state function for setting the user
   const [user,setUser] = useState(JSON.parse(localStorage.getItem("user"))||{});

  return (
   <div>
    <header user={user} setUser={setUser}/>
    <About />
    <Admin />
    <Create />
    <Home />
    <Signup user={user} setUser={setUser}/>
    <Login user={user} setUser={setUser}/>
    <Update />
   </div>
  )
}

export default App
