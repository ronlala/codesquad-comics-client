function Admin(){
    return(
        <Main className="body_box">
  
<div className="container_box"> 
    <h1>ADMIN PAGE</h1>
    <BUtton>ADD NEW COMIC</BUtton> 
    <div className="admintable"> 
    <table>
      <thead>
        <tr>
          <th>COMIC TITLE</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Batman: the Dark Knight Returns</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>Black Panther: A Nation Under Our Feet Book 1</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>Fun Home: A Family Tragicomic</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td> Hunter X Hunter Vol.1</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>Lumberjanes Vol.1</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>March: Book One</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>One Piece, Vol.1: Romance Dawn</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>Parable of Sower</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>Queer: A graphic History</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>The Walking Dead, Vol.1: Days Gone Bye</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>Wake: The Hidden History OF Women-Led Slave Revolts</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
        <tr>
          <td>Watchmen</td>
          <td><button>EDIT</button></td>
          <td><Button>DELETE</Button></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div> 
   </Main>
    )
}


export default Admin;