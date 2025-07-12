// function Signup({user, setUser}){
//   const  handleSignupSubmission =(e) => {
//     fetch the register auth route
//     method for post and header and content type and stringify the body and use localstorage to set the user. and the data that you get back
//     handler function 
//     prevent default 
//     body again 
   
    
//     e.preventDefault();
//     const body = {
//     console.log(handleSignupSubmission,"form submission done");
//     console.log(e.target.firstname.value)
//     console.log(e.targe.Lastname.value)
//     console.log(e.target.email.value)
//     console.log(e.target.password.value)

// }
  
//   return(
//         <main>
//         <div className="body_box">

//   <div className="container_box">  
// <h1>Signup</h1>
// <form onSubmit={handleSignupSubmission}>
//     <label htmlFor="">Firstname</label>
//     <input type="firstname" name="firstname" id="firstname" placeholder="firstname" />
//     <label htmlFor="">Lastname</label>
//     <input type="Lastname" name="Lastname" id="Lastname" placeholder="Lastname" />
//     <label htmlFor="">Email Address</label>
//     <input type="email1" name="email1" id="email1" placeholder="Email"/> 
//     <label htmlFor="">Password</label> 
//     <input type="password" name="password" id="password" placeholder="Password"/>
//     <button>SUBMIT</button>
// </form>
//   </div>
// </div>
//       </main>
//     )
// }


// export default Signup;