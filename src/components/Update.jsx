import books from "../data/books";
import { useState } from "react";
import { useEffect } from "react";

function Update(){
    const iD = "66b62a49-a8de-4914-ab3f-49fe0554c08a";
    const [book, setBook]= useState({books},[]);
   
    
    useEffect(() => { 
        const foundBook = find(book => book._id === iD);
        setBook(foundBook), [book]}) 
        
        const handleSubmitForm =(e) => {
        e.preventDefault();
        const formData = Update; formData(e.target);
    
    }
    return(
        <main>
            <div className="body_box">
    <div className="container_box">
    <h1>Update</h1>
    <form onSubmit={handleSubmitForm}>
    <label htmlFor="Text">Title</label>
    <input type="Text" id="Titlebook" name="bookTitle" defaultValue="Title defaultValue stored in database"/> 
    <label htmlFor="Author1">Author</label>
    <input type="Text" id="Author1" name="Author1" defaultValue="Author defaultValue stored in database"/> 
    <label htmlFor="Published">Publisher</label>
    <select name="Publisher" id="Publishers" placeholder="select" > 
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
    <label htmlFor="Genere">Genre</label>
    <input type="text" id="Genre2" name="Genre2" defaultValue="Genre data stored in database" />
    <label htmlFor="Numbers">Number of Pages</label>
    <input type="Number" id="Num" name="Nums" default="255"/>
    <label htmlFor="Rate">Rating</label>
    <input type="rating" id="rated" name="rating"  maxLength="3" size="3" />
    <label htmlFor="Synopsis">Synopsis</label>
    <input type="text" id="description" name="synopsis"/>
    <button>Submit</button>
    </form>
</div>

</div>
        </main>
    )
}


export default Update;