import books from "../data/books";

function Home(){
    return(
    
    <main className="body_box">
        <div className="container_box">
        <h1>CODESQUAD COMICS</h1>
        <p>CodeSquad Comics is a collection of graphic novels read by Lanae. 
            The site is intended to display comic book covers along with information about each book, including the author, a rating, 
            and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details 
            link to see even more information for each graphic novel including the publisher, genre, number of pages, and a brief synopsis. 
            The About page includes meta information about this collection. Login is only available to the site administrator at this time. </p> 
            </div>
      <div className="container_box">   
     <div className="bodysection">      
         <h2>COMPLETE COMIC COLLECTION</h2>
         
         {books.map((book) => (
            // <p key={book._id}>
            // {book.img}
            // {book.title}
            // {book.author}
            // {book.genre}
            // {book.publisher}
            // {book.rating}
            // <a href="#">Details</a>

            <p key={book._id}><a href="#"> <img src={`./images/${book.imageUrl}`}/></a> 
                <em>{book.title}</em>
                by {book.author}
                {book.rating} stars 
                <a href="#">Details</a>
        
            </p>)) } 
        {/* <article>
            <p> <a href="#"><img src="public/images/watchmen.jpg" alt="Bright picture of the watchman comic " /> </a> 
                <em>The watchmen </em>
                by Alan moore 
                5 stars 
                <a href="#">Details</a>
            </p> 
        </article> */}
        {/* <article>
            <p> <a href="#"> <img src="public/images/hunter-x-hunter.jpg" alt="Picture of the hunter comic is a boy riding a frog"/> </a>
                <em>Hunter X Hunter Vol. 1</em> 
                by Yoshiro Togashi 
                5 stars 
                <a href="#">Details</a> 
            </p>
        </article> */}
        {/* <article>
            <p> <a href="#"> <img src="public/images/lumberjanes.jpg" alt="Picture of the 5 teens drawn as cartoon caracters"/></a> 
                <em>Lumberjanes Vol.1</em> 
                by Noelle Stevenson 
                4 Stars 
                <a href="#">Details</a>
            </p>
        </article>
        <article>
            <p> <a href="#"><img src="public/images/one-piece.jpg" alt="Picture of one piece character with red vest and straw hat with his two friends having fun"/> </a>
                <em>One Piece, Vol.1: Romance Dawn</em> 
                y Eiichiro Oda  5 stars 
                <a href="#">Details</a> 
            </p>
        </article>
        <article>
            <p> <a href="#"><img src="public/images/wake.jpg" alt="Pictures of a group of minorities" /></a> 
                <em>Wake: THe Hidden History of Women Led Slave Revolts</em> 
                by Rebecca Hall 
                4 Stars 
                <a href="#">Details</a>
            </p>
        </article>
        <article>
            <p><a href="#"><img src="public/images/black-panther.jpg"  alt="Picture of man wearing a super hero suit that looks like a black panther"/></a>
           
                <em>Black Panther: A Nation Under our Feet Book 1</em> 
                by Ta-Nehisi Coates 
                3 Stars 
                <a href="#">Details</a>
           </p> 
        </article>
        <article>
            <p> <a href="#"><img src="public/images/the-walking-dead.jpg" alt="Picture of walking dead comic which has zombies"/></a> 
                <em>The Walking Dead, Vol.1: Days Gone Bye</em> 
                by Robert Kirkman 
                4 stars 
                <a href="#">Details</a>
            </p>
        </article>
        <article>
            <p>
                <a href="#"><img src="public/images/march.jpg" alt=" Images of african americans siting at a Counter for coloreds"/></a> 
                <em>March: Book One</em> 
                by John Lewis 
                5 Stars 
                <a href="#">Details</a>
            </p>
        </article>
        <article>
            <p>
                <a href="#"><img src="public/images/batman.jpg" alt="Image of a man in batman costume jumping in the air at lightening"/></a> 
                <em>Batman: The Dark Knight Returns</em> 
                by Frank Miller 
                3 stars 
                <a href="#">Details</a>
            </p>
        </article>
        <article>
            <p>
                <a href="#"><img src="public/images/queer.jpg" alt="image of a person holding an umbrella walking over an rainbow made of arrows"/></a>
                <em>Queer: A Graphic History</em> 
                by Meg-John Barker 
                4 Stars
                <a href="#">Details /</a>
            </p>
        </article>
        <article>
            <p>
                <a href="#"><img src="public/images/parable-of-the-sower.jpg" alt="Image of a black woman with dreadlocks with serious face in front of fire"/></a>
                <em>Parable of the Sower</em> 
                by Octavia E Butler 
                4 Stars 
                <a href="#">Details</a>
            </p>
        </article> */}
        <button>DISPLAY MORE</button>
        </div>
        </div>
    
   
    </main>
  

    )
}


export default Home;
