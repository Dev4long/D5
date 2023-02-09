import * as React from 'react'
import '../style/App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './NavBar';
import Merch from './Merch';
import About from './About';
import Cart from './Cart';
import HomeLogIn from './HomeLogIn';
// import {useState} from 'react';
import { useSelector } from 'react-redux'



function App() {

  // const[loggedIn, toggleLogin] = useState(false)
  const truth = useSelector((state) => state.toggle.value)


  return (

    <div className="AppContainer">
    
    
    
    <Router>
    <NavBar />
            
    <div className="App">
      <Routes>
      
      {truth ? (<Route exact path="/"element={<About/>}/> ) : (<Route exact path="/homeLogin" element={<HomeLogIn/>}/>) }
      <Route exact path="/merch" element={<Merch/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </div>

    </Router>
    </div>
  );
}

export default App;
