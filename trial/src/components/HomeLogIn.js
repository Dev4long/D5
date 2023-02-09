import React from 'react'
import "../style/HomeLogIn.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@material-ui/core';
import {useState} from 'react';


function HomeLogIn() {

  const[signUp, toggleSignUp] = useState(false)
  
  const switchSignUp = () => toggleSignUp(!signUp)


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
        <LockOutlinedIcon style={{color:"white", background:"red", marginBottom:"20px"}}/>
        </div>
      Login
      <form>
      <div>
        <TextField label="Email address *" variant="outlined" margin="normal" color="secondary"/>
      </div>
      <div style={{marginBottom:"20px"}}>
        <TextField label="Password *" variant="outlined" margin="normal"
        color="secondary"/>
      </div>
        <Button style={{marginBottom:"20px"}} variant="contained" color="secondary" >
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
      <div><LockOutlinedIcon style={{color:"white", background:"red", marginBottom:"20px"}}/></div>
      Sign Up
      <form>
      <div>
        <TextField label="Email address *" variant="outlined" margin="normal" color="secondary"/>
      </div>
      <div style={{marginBottom:"20px"}}>
        <TextField label="Password *" variant="outlined" margin="normal"
        color="secondary"/>
      </div>
        <Button style={{marginBottom:"20px"}} variant="contained" color="secondary" >
      sign in
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