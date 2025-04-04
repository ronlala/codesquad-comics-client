function Update(){
    return(
        <main>
            <div class="body_box">
<body>
    <div class="container_box">
    <label htmlFor="Text">Title</label>
    <input type="Title" id="Title" name="Title" value="Title value stored in database"/> 
    <label htmlFor="Author">Author</label>
    <input type="Text" id="Author" name="Author" value="Author value stored in database"/> 
    <label htmlFor="Publisher">Publisher</label>
    <select name="Publisher" id="Publisher" placeholder="select" > 
        <option value="" >Publisher value stored in database</option> 
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
    <input type="text" id="Genre" name="Genre" value="Genre data stored in database" />
    <label htmlFor="Number">Number of Pages</label>
    <input type="Number" id="Number" name="Number" value="255"/>
    <label htmlFor="Rating">Rating</label>
    <input type="rating" id="rating" name="rating"  maxlength="3" size="3" />
    <label htmlFor="Synopsis">Synopsis</label>
    <textarea name="Synopsis" id="Synopsis" >synopsis value stored in database</textarea>
    <button>Submit</button>
</div>
</body>
</div>
        </main>
    )
}


export default Update;