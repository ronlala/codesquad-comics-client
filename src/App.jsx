
import About from './components/About'
import Admin from './components/Admin'
import Create from './components/Create'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Update from './components/Update'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'


function App() {
 //state function for setting the user
   const [user,setUser] = useState(JSON.parse(localStorage.getItem("user"))||{});

  return (
   <div>
    <header user={user} setUser={setUser}/>
<Routes>
  <Route path="/" element={ <Home/>} />
  <Route path= "/about" element={<About/>} />
  <Route path= "/admin" element={<Admin/>} />
  <Route path= "/Create" element={<Create/>} />
  <Route path= "/Signup" element={<Signup/>} />
  <Route path= "/Login" element={<Login/>} />
  <Route path= "/Update" element={<Update/>} />
</Routes>
    <footer />
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
