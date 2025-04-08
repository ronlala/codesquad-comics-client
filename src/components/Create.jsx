function Create(){
    return(
       <main className="body_box">
    <div className="container_box">
    <h1>CREATE NEW COMIC</h1>
    <form>
        <label htmlFor="Text">Title</label>
        <input type="Title" id="Title" name="Title" placeholder="Title"/> 
        <label htmlFor="Author">Author</label>
        <input type="Text" id="Author" name="Author" placeholder="Author"/> 
        <label htmlFor="Publisher">Publisher</label>
        <select name="Publisher" id="Publisher" placeholder="select" > 
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
        <label htmlFor="Genre">Genre</label>
        <input type="text" id="Genre" name="Genre" placeholder="Genre" />
        <label htmlFor="Number">Number of Pages</label>
        <input type="Number" id="Number" name="Number" placeholder="Number of pages"/>
        <label htmlFor="Rating">Rating</label>
        <input type="rating" id="rating" name="rating"  maxLength="3" size="3" />
        <label htmlFor="Synopsis">Synopsis</label>
        <textarea name="Synopsis" id="Synopsis" placeholder="Synopsis"></textarea>
        <button>SUBMIT</button>

    </form>
</div>
</main>
    )
}


export default Create;