// import { useState } from "react";

// function Login({user, setUser}){
//   //fetch for the auth/login
//    //fetch to the login path and method of post header content type and credentials inculde body jason.stringify body
//     //response . joson and put in local storage.setitem
//     // login to setuser as a prop
//     // part of the fetch it is part of the .then you need to give the response and result in those 
//   const  handleloginSubmission =(e) => {
//     e.preventDefault();
//     console.log(handleloginSubmission,"form submission done");
//     console.log(e.target.email.value)
//     console.log(e.target.password.value)
//  }
//   return(
//   <main>
//   <div className="body_box">
// <h1>LOGIN</h1>
// <form onSubmit={handleloginSubmission}>
//     <label htmlFor="">Email Address</label>
//     <input type="email" id="email2" name="emailer" placeholder="Email"/> 
//     <label htmlFor="">Password</label> 
//     <input id="confirm-password" placeholder="Confirm Password" type="password" name="confirm-password"/>
//     {/* <input type="password" name="password" id="password" placeholder="Password"/> */}
//     <button>SUBMIT</button>
// </form>
// </div>
// </main>
//     )
// }


// export default Login;