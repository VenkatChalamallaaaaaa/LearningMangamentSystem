import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login(){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://lms-server1.onrender.com/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data ==='Success'){
        navigate('/home')
      }
    
    })
    .catch(err=> console.log(err))
  }

  return(
    <div>
      <div>
      
        <button className='btn btn-primary' style={{marginLeft:"1000px", border:"none", borderWidth:"30px"}}><Link to="/" style={{color:"white"}}>Back</Link></button>
        
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className=' p-3 rounded w-25 background'>
        <h2 className="login">Login</h2 >
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong className="info">Email</strong>
            </label>
            <input text="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)}
             />
          </div>


          <div className='mb-3'>
            <label htmlFor='email'>
              <strong className="info">Password</strong> 
            </label>
            <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' 
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0 sign'>
            Login
          </button>
          </form>
          <p className="info">Already Have an Account</p>
          <button className='btn btn-primary w-100 rounded-0'>
          <Link to="/register" className='sign'>
            Sign Up
          </Link>
          </button>
          
        

      </div>

    </div>

    </div>
    
  )
}

export default Login