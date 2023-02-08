import React from 'react'
import "../style/HomeLogIn.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

function HomeLogIn() {
  return (
    <div className="LoginContainer">
    
    <div className = "D5Logo">
    <h1 className= "D5Header" style={{color:"white"}}>D5</h1>
    </div>
    
    <div className = "formContainer">
      
      <div className="LoginForm">
      Login
      <form>
      <div>
      <TextField label="Email address" variant="outlined" margin="normal" color="secondary"/>
      </div>
      <div>
        <TextField label="Password" variant="outlined" margin="normal"
        color="secondary"/>
      </div>
      <Button variant="contained" color="secondary" >
      Submit
      </Button>

      </form>
      </div>
      
    </div>
    
    </div>
  )
}

export default HomeLogIn