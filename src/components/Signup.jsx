function Signup([user,setUser]){
    return(
        <main>
        <div className="body_box">

  <div className="container_box">  
<h1>Signup</h1>
<form action="">
    <label htmlFor="">Firstname</label>
    <input type="firstname" name="firstname" id="firstname" placeholder="firstname" />
    <label htmlFor="">Lastname</label>
    <input type="Lastname" name="Lastname" id="Lastname" placeholder="Lastname" />
    <label htmlFor="">Email Address</label>
    <input type="email1" name="email1" id="email1" placeholder="Email"/> 
    <label htmlFor="">Password</label> 
    <input type="password" name="password" id="password" placeholder="Password"/>
    <button>SUBMIT</button>
</form>
  </div>
</div>
      </main>
    )
}


export default Signup;