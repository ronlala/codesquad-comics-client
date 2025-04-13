import books from "../data/books";

function Update(){
    return(
        <main>
            <div class="body_box">
    <div class="container_box">
    <h1>Update</h1>
    <label htmlFor="Text">Title</label>
    <input type="Title" id="Title" name="Title" value="Title value stored in database"/> 
    <label htmlFor="Author1">Author</label>
    <input type="Text" id="Author1" name="Author1" value="Author value stored in database"/> 
    <label htmlFor="Publisher">Publisher</label>
    <select name="Publisher" id="Publisher" placeholder="select" > 
        <option Value="" >Publisher value stored in database</option> 
        <option Value="">Marvel</option>
        <option Value="">DC Comics</option>
        <option Value="">Boom! Box</option>
        <option Value="">Harry N. Abrams</option>
        <option Value="">Icon Books</option>
        <option Value="">Image Comics</option>
        <option Value="">Simon & Schuster</option>
        <option Value="">Top Shelf Productions</option>
        <option Value="">VIZ Media LLC</option>
    </select>
    <label htmlFor="Genere">Genre</label>
    <input type="text" id="Genre2" name="Genre2" value="Genre data stored in database" />
    <label htmlFor="Number">Number of Pages</label>
    <input type="Number" id="Number" name="Number" value="255"/>
    <label htmlFor="Rating">Rating</label>
    <input type="rating" id="rating" name="rating"  maxlength="3" size="3" />
    <label htmlFor="Synopsis">Synopsis</label>
    <textarea name="Synopsis" id="Synopsis" >synopsis value stored in database</textarea>
    <button>Submit</button>
</div>

</div>
        </main>
    )
}


export default Update;