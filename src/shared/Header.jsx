import { Link } from "react-router-dom";


function Header(){
    return(
        
        <header> 
         <div className="header_navbar">
         <img src={'/public/codeSquad-Comics-logo.jpg'} alt="logo that says codesquad comics and has an image of books on the logo " /> 
      
                <ul className="header_navbar">
                    <li>
                           <Link to="/home">Home</Link> 
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/Admin">Admin</Link></li>
                </ul>
             </div>      
               
        </header>
    )
}


export default Header;