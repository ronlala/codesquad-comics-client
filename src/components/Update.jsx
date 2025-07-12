// import booksData from "../data/books";
import React,{ useState, useEffect} from "react";

import { useParams,useNavigate } from "react-router-dom";

function Update(){
    const {bookID} =useParams();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    // const BASE_URL = "";
    
    const [bookData,setBookData]= useState({
     title: "",
        author: "",
        publisher: "",
        genre: "",
        pages: "", 
        rating: "", 
        synopsis: "",


    });
    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books"
   

    useEffect(() => { 
            fetch(`${url}/${bookID}`,{
            method: "GET",
            body: JSON.stringify(bookData),})
        .then((response) => response.json())
        .then((result) => {console.log(result); setBookData(result.data);navigate("/admin")})
        .catch((error) => console.log(error));
    },{bookID})
        // const foundBook = find(booksData => booksData._id === iD);
        // setBook(foundBook), [iD]}) 
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
    
       setBookData((prevBook) => ({
            ...prevBook,
            [name]: value
        }))
    };
    const handleSubmitForm =(e) => {
        e.preventDefault();
    fetch(`https://course-project-codesquad-comics-server.onrender.com/api/books/${bookID}`, {
    method: "PUT",
    body: JSON.stringify(bookData),
})
  .then((response) => response.json())
  .then((result) => {
                console.log(result)
                setErrorMessage(result.error.message);}
        )
            .catch(error =>{
                console.log(error)
                setErrorMessage(error.message);
            });
    };
      
//         const body={title:e.target.title.value,
//                     author:e.target.author.value,
//                     publisher:e.target.author.value,
//                     genre:e.target.genre.value,
//                     number:e.target.genre.value,
//                     rate:e.target.rate.value,
//                     synopsis:e.target.synopsis.value,
// }
//will use the fetch command to get the iD to update 

// fetch(`https://course-project-codesquad-comics-server.onrender.com/api/books/${bookID}`,{
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formBody),
// })
// .then((response)=> response.json())
// .then((result)=> console.log(result))
// .catch((error)=> console.log(error));
// }
    return(
        <main>
            <div className="body_box">
    <div className="container_box">
    <h1>Update</h1>
    <form onSubmit={handleSubmitForm}>
        <label htmlFor="Text">Title</label>
        <input type="title" id="title" name="title" placeholder="title" onChange={handleChange}/> 
        <label htmlFor="author">Author</label>
        <input type="Text" id="author" name="author" placeholder="author" onChange={handleChange}/> 
        <label htmlFor="publisher">Publisher</label>
        <select name="publisher" id="publisher" placeholder="select"  onChange={handleChange} > 
            <option value="" >Select</option> 
            <option value="">Marvel</option>
            <option value="">DC Comics</option>
            <option value="">Boom! Box</option>
            <option value="">Harry N. Abrams</option>
            <option value="">Icon Books</option>
            <option value="">Image Comics</option>
            <option value="">Simon & Schuster</option>
            <option value="">Top Shelf Productions</option>
            <option value="">VIZ Media LLC</option>
        </select>
        <label htmlFor="genre">Genre</label>
        <input type="text" id="genre" name="genre" placeholder="genre" onChange={handleChange} />
        <label htmlFor="pages">Number of Pages</label>
        <input type="Number" id="pages" name="pages" placeholder="Number of pages"onChange={handleChange}/>
        <label htmlFor="Rating">Rating</label>
        <input type="rating" id="rating" name="rating"  maxLength="3" size="3"onChange={handleChange} />
        <label htmlFor="synopsis">Synopsis</label>
        <textarea name="Synopsis" id="synopsis" placeholder="synopsis"></textarea>
        <button>SUBMIT</button>
        {errorMessage && <p>(errorMessage)</p>}
    </form>
</div>

</div>
        </main>
    )
}


export default Update;