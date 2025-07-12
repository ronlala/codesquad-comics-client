import { useEffect, useState } from "react";
import books from "../data/books";
import { Link } from "react-router-dom"; 


function Admin(){
  const [bookie, setBookies] = useState([])
  useEffect(() =>{ setBookies(books);},[]);
   console.log(bookie);
    
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
      {books.map((book) => ( 
        <tr key={book._id}>
          <td>{book.title}</td>
          <Link to="/update"><td><button>EDIT</button></td></Link>
          <Link to="/update"><td><button>DELETE</button></td> </Link>
        </tr> ))}
        {/* <tr>
          <td>Black Panther: A Nation Under Our Feet Book 1</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Fun Home: A Family Tragicomic</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td> Hunter X Hunter Vol.1</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Lumberjanes Vol.1</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>March: Book One</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>One Piece, Vol.1: Romance Dawn</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Parable of Sower</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Queer: A graphic History</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>The Walking Dead, Vol.1: Days Gone Bye</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Wake: The Hidden History OF Women-Led Slave Revolts</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr>
        <tr>
          <td>Watchmen</td>
          <td><button>EDIT</button></td>
          <td><button>DELETE</button></td>
        </tr> */}
      </tbody>
    </table>
    </div>
  </div> 
   </main>
    )
}


export default Admin;