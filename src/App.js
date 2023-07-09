import React, { Component } from 'react';
import './App.css';

import Casam from './components/CasaTeams';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/detailsdebiens';



class App extends Component {

  render() {
  
    return (
    <div className='container'>  
     <BrowserRouter>
     <Routes>
           <Route exact path="/" element =   { <Casam /> }/>
          
           <Route   exact path="/:id" element =   {<ProductDetails/>} />
        </Routes>
    </BrowserRouter>
  
 
</div>
  );
}
}
export default App;
