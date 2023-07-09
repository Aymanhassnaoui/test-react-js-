import React from 'react';


function Header(props)  {

    return (
      <div className='navbar bg-dark rounded text-white d-flex justify-content-center'>
      
    <h1> {props.name} </h1>
  
    </div>
  );
}

export default Header;