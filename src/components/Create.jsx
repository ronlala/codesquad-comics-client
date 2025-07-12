import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Create(){
// const navigate = useNavigate();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const [errorMessage, setErrorMessage] = useState(null);
 const navigate = useNavigate();

const [bookData, setBook] = useState({
        title: "",
        author: "",
        publisher: "",
        genre: "",
        pages: "", 
        rating: "", 
        synopsis: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }))
    };
  console.log(bookData);

    const  handleFormSubmission = async(e) => {
       e.preventDefault();
       console.log("BookSubmitted");

    
        fetch(API_BASE_URL`/create`, { 
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
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
 
            navigate("/admin");


  console.log(errorMessage);

    return(
       <main className="body_box">
    <div className="container_box">
    <h1>CREATE NEW COMIC</h1>
    <form onSubmit={handleFormSubmission}>
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
</main>
    )
}


export default Create;