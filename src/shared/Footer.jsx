import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer> 

 <div className="footer_border">
    <div className="footer_border_visitus">
        <h2>VISIT US</h2>
            <p>CodeSquad Comics 
              123Dorchester Avenue 
              Boston, MA 02124</p>     
        </div>
        <div className="footer_border_visitus">
        <h2>LINKS</h2>
        <ul>
            <li><Link to="/Home">Home</Link> </li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to= "/login">Login</Link> </li>
        </ul>
            
        </div>
        <div className="footer_border_visitus">
        <h2>FOLLOW US</h2>
        <ul>
            <li> <a className="fa-brands fa-facebook-f"></a>   </li>
            <li> <a className="fa-brands fa-instagram"></a>  </li>  
            <li> <a className="fa-brands fa-x-twitter"></a>  </li>
        </ul>
          
        </div>
        <div className="footer_border_visitus">
        <h2>A PRODUCT OF</h2>
        <img src="public/images/CodeSquad-logo-b.png" alt="Codesquad logo that is black and red"/>
        </div>

    </div>           


        </footer>
    )
}
export default Footer;