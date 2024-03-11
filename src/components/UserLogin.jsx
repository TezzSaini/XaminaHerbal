import React from 'react'
import '../css/userlogin.css'

const UserLogin = () => {
  return (
    <>
    <div className='login-arena'>
      <form className='login-box'>
        <center><h1 className='login-box-head'>LOGIN</h1></center>
        <div class="form-group lgn-bar">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group lgn-bar">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check lgn-bar">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn login-submit-btn">Submit</button>
    </form>
    </div>
    </>
  )
}

export default UserLogin;