
import { useState, useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Update(){
    const {id} = useParams();
    console.log("update page ID:",id);

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
    
   //get id to update 

    useEffect(() => { 
            fetch(`${API_BASE_URL}/${id}`)
            
        .then((response) => response.json())
        .then((result) => {
            if(result.data?.book){

             setBookData(result.data.book);}
             else {
                setErrorMessage("Book not found");
             }
            })
            
        .catch((error) => console.log(error));
    },[id]);
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
    // update the id that was previously sent
    const handleSubmitForm =(e) => {
        e.preventDefault();
    fetch(`${API_BASE_URL}/api/books/${id}`, {
    method: "PUT",
    headers:{ "Content-Type": "application/json",},
    body: JSON.stringify(bookData),
})
  .then((response) => response.json())
  .then((result) => {
                console.log(result)
                navigate('/admin');
                setErrorMessage(result.error.message);}
        )
            .catch(error =>{
                console.log(error)
                setErrorMessage(error.message);
            });
    };
      

    return(
        <main>
            <div className="body_box">
    <div className="container_box">
    <h1>Update</h1>
    <form onSubmit={handleSubmitForm}>
        <label htmlFor="Text">Title</label>
        <input type="title" id="title" name="title" placeholder="title" value={bookData.title} onChange={handleChange}/> 
        <label htmlFor="author">Author</label>
        <input type="Text" id="author" name="author" placeholder="author" value={bookData.author}onChange={handleChange}/> 
        <label htmlFor="publisher">Publisher</label>
        <select name="publisher" id="publisher" placeholder="select" value={bookData.publisher} onChange={handleChange} required > 
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
        <input type="text" id="genre" name="genre" placeholder="genre" value={bookData.genre} onChange={handleChange} />
        <label htmlFor="pages">Number of Pages</label>
        <input type="number" id="pages" name="pages" placeholder="Number of pages" value={bookData.pages}onChange={handleChange}/>
        <label htmlFor="rating">Rating</label>
        <input type="number" id="rating" name="rating"  maxLength="3" size="3" value={bookData.rating}onChange={handleChange} />
        <label htmlFor="synopsis">Synopsis</label>
        <textarea name="synopsis" id="synopsis" value={bookData.synopsis}onChange={handleChange} />
        <button>SUBMIT</button>
        {errorMessage && <p>{errorMessage}</p>}
    </form>
</div>

</div>
        </main>
    )
}


export default Update;