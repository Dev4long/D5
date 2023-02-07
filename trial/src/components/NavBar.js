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
  
    const[sidebar, setBar] = useState(false)
  
    const showBar = () => setBar(!sidebar)
  
  
    return (
      
      <div className= "navbar">
      
      <div className="container">
          <h2 className="name">D5</h2>
          
         
          <div className="menu">
          <MenuIcon className="menuIcon" style={{color:"white"}} onClick={showBar} />
          
            
            
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className= 'nav-menu-items' onClick={showBar}>
              <li className="navBar-toggle">
              <CloseIcon className="X"/>
              </li>
              <li className="links">
              <Link to="/" style={{textDecoration:"none",color:"black"}} className="linksH">About</Link>
              </li>
              <li className="links">
              <Link onClick={handleClickM} to="/merch" style={{textDecoration:"none",color:"black"}} className="linksH">Merch</Link>
              </li>
              <li onClick={handleClickC} className="links">
              <Link to="/cart"style={{textDecoration:"none",color:"black"}} className="linksH">Cart</Link>
              </li>
            </ul>
            </nav>
          
          
          </div>
          
  
      </div>
      </div>
     
    )
}

export default NavBar