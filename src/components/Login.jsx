import { useState } from "react";

function Login({user, setUser}){
  return(
  <main>
  <div className="body_box">
<h1>LOGIN</h1>
<form action="">
    <label htmlFor="">Email Address</label>
    <input type="email" id="email2" name="emailer" placeholder="Email"/> 
    <label htmlFor="">Password</label> 
    <input id="confirm-password" placeholder="Confirm Password" type="password" name="confirm-password"/>
    {/* <input type="password" name="password" id="password" placeholder="Password"/> */}
    <button>SUBMIT</button>
</form>
</div>
</main>
    )
}


export default Login;