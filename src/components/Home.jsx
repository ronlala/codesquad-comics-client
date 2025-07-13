
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function Home(){
    const [bookie, setBookies] = useState([])
    useEffect(() =>{
          fetch(`${API_BASE_URL}`)
        .then(response => response.json()) 
      .then((data) => {
        setBookies(data.data.books)
        console.log(data.data.books);
      })
      .catch((error) => {
        if (error.name === "Abort") {
          console.log("fetch Aborted");
        }
      });
  }, []);
        
        
        
        // setBookies(books);},[]);
     console.log(bookie);

return(
    <main className="body_box">
        <div className="container_box">
        <h1>CODESQUAD COMICS</h1>
        <p>CodeSquad Comics is a collection of graphic novels read by Lanae. 
            The site is intended to display comic book covers along with information about each book, including the author, a rating, 
            and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details 
            link to see even more information for each graphic novel including the publisher, genre, number of pages, and a brief synopsis. 
            The About page includes meta information about this collection. Login is only available to the site administrator at this time. </p> 
            </div>
      <div className="container_box">   
     <div className="bodysection">      
         <h2>COMPLETE COMIC COLLECTION</h2>
         
         {bookie.map((book) => (
      

            <p key={book._id}><a href="#"> <img src={`./images/${book.imageUrl}`}/></a> 
                <br /> <em>{book.title}</em> <br />
                Author: {book.author} <br />
                {book.rating} stars <br />
                <Link to="/comiccard">Details</Link>
        
            </p>)) } 
      
        <button>DISPLAY MORE</button>
        </div>
        </div>
    
   
    </main>
  

    )
}


export default Home;
