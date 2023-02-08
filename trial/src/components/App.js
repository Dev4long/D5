import * as React from 'react'
import '../style/App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './NavBar';
import Merch from './Merch';
import About from './About';
import Cart from './Cart';


function App() {
  return (

    <div className="container">
    <Router>
      <NavBar/>
            
    <div className="App">
      <Routes>
      <Route exact path="/" element={<About/>}/>
      <Route exact path="/merch" element={<Merch/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </div>

    </Router>
    </div>
  );
}

export default App;
