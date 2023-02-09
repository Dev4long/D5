import React from 'react'
import '../style/navbar.css'
import {useState} from 'react';
import { Link, useNavigate} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    const navigate = useNavigate()

    const handleClickM = () => {
      navigate("/merch")
    }
  
    const handleClickC = () => {
      navigate("/cart")
    }
  
    const handleClickA = () => {
      navigate("/about")
    }

    const[sidebar, setBar] = useState(false)
  
    const showBar = () => setBar(!sidebar)
  
  
    return (
      
      <div className= "navbar">
      
      <div className="container">
          <h2 className="name" style={{fontSize:"40px"}}>D5</h2>
          
         
          <div className="menu">
          <MenuIcon className="menuIcon" style={{fontSize:"50px", marginTop:"5px"}} onClick={showBar} />
          
            
            
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className= 'nav-menu-items'>
              <li onClick={showBar}  className="navBar-toggle">
              <CloseIcon className="X"/>
              </li>
              <li onClick={showBar} className="links">
              <Link onClick={handleClickA} to="/" style={{textDecoration:"none",color:"white"}} className="linksH">About</Link>
              </li>
              <li onClick={showBar}className="links">
              <Link onClick={handleClickM} to="/merch" style={{textDecoration:"none",color:"white"}} className="linksH">Merch</Link>
              </li>
              <li onClick={showBar} className="links">
              <Link onClick={handleClickC} to="/cart"style={{textDecoration:"none",color:"white"}} className="linksH">Cart</Link>
              </li>
            </ul>
            </nav>
          
          
          </div>
          
  
      </div>
      </div>
     
    )
}

export default NavBar