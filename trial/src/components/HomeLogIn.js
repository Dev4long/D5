import React from 'react'
import "../style/HomeLogIn.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@material-ui/core';
import {useState} from 'react';
import HttpClient from './HttpClient';
// import { useDispatch, useSelector } from 'react-redux'
// import { handle } from './slice';


function HomeLogIn() {

  // const truth = useSelector((state) => state.toggle.value)
  // const dispatch = useDispatch()

  const[signUp, toggleSignUp] = useState(false)
  const switchSignUp = () => toggleSignUp(!signUp)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
   
  const logInUser = async () => {
    console.log(email, password);

    try {
      const resp = await HttpClient.post("//127.0.0.1:5000/login", {
        email,
        password,
      });
      console.log(resp.data)
      window.location.href = "/about";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    } 
  };

  return (
    <div className="LoginContainer">
    
    <div className = "D5Logo">
    <h1 className= "D5Header" style={{color:"white"}}>D5</h1>
    </div>
    
    <div className = "formContainer">
      
      
      <div className="topBanner">
        D5
      </div>

      {signUp ? ( null ) : <div className="LoginForm">
      <div>
        <LockOutlinedIcon style={{color:"white", background:"red", marginBottom:"20px", fontSize:"30px"}}/>
        </div>
      Login
      <form>
      <div>
        <TextField label="Email address *" variant="outlined" margin="normal" color="secondary" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div style={{marginBottom:"20px"}}>
        <TextField label="Password *" variant="outlined" margin="normal"
        color="secondary" onChange={(e) => setPassword(e.target.value)}/>
      </div >
        <Button style={{marginBottom:"20px"}} variant="contained" color="secondary"    onClick={() => logInUser()}>
        sign in
        </Button>
      <div onClick={switchSignUp}>
      <Link href="#" variant="body2">
      {"Don't have an account? Sign Up"}
      </Link>
      </div>
      </form>
      </div>}

      {signUp ? (<div className="LoginForm">
      <div>
        <LockOutlinedIcon style={{color:"white", background:"red", marginBottom:"20px", fontSize:"30px"}}/></div>
      Sign Up
      <form>
      <div>
        <TextField label="Email address *" variant="outlined" margin="normal" color="secondary"/>
      </div>
      <div style={{marginBottom:"20px"}}>
        <TextField label="Password *" variant="outlined" margin="normal"
        color="secondary" type="password"/>
      </div>
        <Button style={{marginBottom:"20px"}} variant="contained" color="secondary" >
      register
      </Button>
      <div onClick={switchSignUp}>
      <Link href="#" variant="body2">
      {"Have an account? Sign In"}
      </Link>
      </div>

      </form>
      </div>):null}
      
    </div>
    
    </div>
  )
}

export default HomeLogIn