import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Create(){
// const navigate = useNavigate();

const [errorMessage, setErrorMessage] = useState(null);
//  const navigate = useNavigate();

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

    
        fetch(`${API_BASE_URL}/create/new`, { 
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
        <select name="publisher" id="publisher" placeholder="select"  onChange={handleChange} required > 
            <option value="" >Select an option</option> 
            <option value="Marvel">Marvel</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Boom! Box">Boom! Box</option>
            <option value="Harry N. Abrams">Harry N. Abrams</option>
            <option value="Icon Books">Icon Books</option>
            <option value="Image Comics">Image Comics</option>
            <option value="Simon & Schuster">Simon & Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="VIZ Media LLC">VIZ Media LLC</option>
        </select>
        <label htmlFor="genre">Genre</label>
        <input type="text" id="genre" name="genre" placeholder="genre" onChange={handleChange} />
        <label htmlFor="pages">Number of Pages</label>
        <input type="number" id="pages" name="pages" placeholder="Number of pages"onChange={handleChange}/>
        <label htmlFor="rating">Rating</label>
        <input type="number" id="rating" name="rating"  maxLength="3" size="3"onChange={handleChange} />
        <label htmlFor="synopsis">Synopsis</label>
        <textarea name="synopsis" id="synopsis" />
        <button>SUBMIT</button>
        {errorMessage && <p>(errorMessage)</p>}
    </form>
</div>
</main>
    )
}


export default Create;