import { useEffect, useState } from "react";

import { Link } from "react-router-dom"; 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Admin(){
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
   console.log(bookie);
   
const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/delete/${id}`, {
      method: "DELETE",
      headers: {
                    "Content-Type": "application/json",
                },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBookies((prevBooks) => prevBooks.filter((book) => book._id !== id));
      })
      .catch((error) => console.log(error));
  };

    return(
<main className="body_box">
  
<div className="container_box"> 

    <h1>ADMIN PAGE</h1>
    <Link to="/create"><button>ADD NEW COMIC</button> </Link> 
    <div className="admintable"> 
    <table>
      <thead>
        <tr >
          <th>COMIC TITLE</th>
          <th>EDIT</th> 
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
      {bookie.map((book) => ( 
        <tr key={book._id}>
          <td>{book.title}</td>
         <td>  <Link to={`/update/${book.id}`}><button>EDIT</button></Link></td>
           <td><button onClick={() => handleDelete(book._id)} >DELETE</button></td> 
        </tr> ))}

      </tbody>
    </table>
    </div>
  </div> 
   </main>
    )
}


export default Admin;