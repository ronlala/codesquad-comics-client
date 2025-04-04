function Signup(){
    return(
        <main>
        <div className="body_box">
<body>
  <div className="container_box">  
<H1>LOGIN</H1>
<form action="">
    <label htmlFor="">Firstname</label>
    <input type="firstname" name="firstname" id="firstname" placeholder="firstname" />
    <label htmlFor="">Lastname</label>
    <input type="Lastname" name="Lastname" id="Lastname" placeholder="Lastname" />
    <label htmlFor="">Email Address</label>
    <input type="email" name="Email" id="Email" placeholder="Email"/> 
    <label htmlFor="">Password</label> 
    <input type="password" name="password" id="password" placeholder="Password"/>
    <button>SUBMIT</button>
</form>
  </div>
</body>
      </main>
    )
}


export default Signup;