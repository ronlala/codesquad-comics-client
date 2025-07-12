// import booksData from "../data/books";
import React,{ useState, useEffect} from "react";

import { useParams,useNavigate } from "react-router-dom";

function Update(){
    const {bookID} =useParams();
    const navigate = useNavigate();

    
    const [books,setBook]= useState({
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
        const bookData = async () => {
            try{

            const response = await
            fetch(`${url}/${bookID}`,{
            method: "GET",
            body: JSON.stringify(books),})
        .then((response) => response.json())
        .then((result) => {console.log(result); setBook(result.data);navigate("/admin")})
        .catch((error) => console.log(error));
    },{bookID})
        // const foundBook = find(booksData => booksData._id === iD);
        // setBook(foundBook), [iD]}) 
        
    
    const handleSubmitForm =(e) => {
        e.preventDefault();
        const body={title:e.target.title.value,
                    author:e.target.author.value,
                    publisher:e.target.author.value,
                    genre:e.target.genre.value,
                    number:e.target.genre.value,
                    rate:e.target.rate.value,
                    synopsis:e.target.synopsis.value,
}
//will use the fetch command to get the iD to update 

fetch(`https://course-project-codesquad-comics-server.onrender.com/api/books/${bookID}`,{
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formBody),
})
.then((response)=> response.json())
.then((result)=> console.log(result))
.catch((error)=> console.log(error));
}
    return(
        <main>
            <div className="body_box">
    <div className="container_box">
    <h1>Update</h1>
    <form onSubmit={handleSubmitForm}>
    <label htmlFor="title">Title</label>
    <input type="Text" id="title" name="title" defaultValue="Title defaultValue stored in database"/> 
    <label htmlFor="author">Author</label>
    <input type="Text" id="author" name="author" defaultValue="Author defaultValue stored in database"/> 
    <label htmlFor="published">Publisher</label>
    <select name="publisher" id="publisher" placeholder="select" > 
        <option defaultValue="" >Publisher defaultValue stored in database</option> 
        <option defaultValue="">Marvel</option>
        <option defaultValue="">DC Comics</option>
        <option defaultValue="">Boom! Box</option>
        <option defaultValue="">Harry N. Abrams</option>
        <option defaultValue="">Icon Books</option>
        <option defaultValue="">Image Comics</option>
        <option defaultValue="">Simon & Schuster</option>
        <option defaultValue="">Top Shelf Productions</option>
        <option defaultValue="">VIZ Media LLC</option>
    </select>
    <label htmlFor="genre">Genre</label>
    <input type="text" id="genre" name="genre" defaultValue="Genre data stored in database" />
    <label htmlFor="number">Number of Pages</label>
    <input type="number" id="number" name="number" default="255"/>
    <label htmlFor="rate">Rating</label>
    <input type="number" id="rate" name="rate"  maxLength="3" size="3" />
    <label htmlFor="synopsis">Synopsis</label>
    <input type="text" id="synopsis" name="synopsis"/>
    <button>Submit</button>
    </form>
</div>

</div>
        </main>
    )
}


export default Update;