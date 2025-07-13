
import { useState ,useEffect } from "react";
import {Routes,Route} from 'react-router-dom';
import About from './components/About';
import Admin from './components/Admin';
import Create from './components/Create';
import Home from './components/Home';
import Header from "./shared/Header";
import Footer from "./shared/Footer";
// import Login from './components/Login'
// import Signup from './components/Signup'
import Update from './components/Update';
import './styles.css';



function App() {
 //state function for setting the user
  //  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user"))||{});
    const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : {};
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return {};
    }
  });

 useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
   <div>
     <Header user={user} setUser={setUser}/> 
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path= "/about" element={<About/>} />
  <Route path= "/admin" element={<Admin/>} />
  <Route path= "/create" element={<Create/>} />
  <Route path= "/home" element={<Home/>}/>
  <Route path="/update/:id" element={<Update />} />
</Routes>
    <Footer />
   
   </div>
  )
}

export default App;
