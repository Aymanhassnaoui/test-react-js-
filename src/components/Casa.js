
import {  Link, } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';



function Casal(props) {
  const { id, name, type, price, rating, warranty_years, deleteMember, modifyItem } = props;

  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedType, setUpdatedType] = useState(type);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedRating, setUpdatedRating] = useState(rating);
  const [updatedWarrantyYears, setUpdatedWarrantyYears] = useState(warranty_years);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    const updatedProperties = {
      name: updatedName,
      type: updatedType,
      price: updatedPrice,
      rating: updatedRating,
      warranty_years: updatedWarrantyYears
    };
    modifyItem(id, updatedProperties);
    setEditing(false);
  };

  const handleDelete = () => {
    deleteMember(id);
  };

  return (
    <div className='col-md-4 col-sm-6 border'>
      <div className='card'>
        <div className='card-body'>
          {editing ? (
            <div>
              <input value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
              <input value={updatedType} onChange={(e) => setUpdatedType(e.target.value)} />
              <input value={updatedPrice} onChange={(e) => setUpdatedPrice(e.target.value)} />
              <input value={updatedRating} onChange={(e) => setUpdatedRating(e.target.value)} />
              <input value={updatedWarrantyYears} onChange={(e) => setUpdatedWarrantyYears(e.target.value)} />
              <button onClick={handleSaveClick}>Enregistrer</button>
            </div>
          ) : (
            <div>
              <h2>{name}</h2>
              <h5>{type}</h5>
              <div>{price}</div>
        <Link to={`/${props.id}`} ><Button  variant="contained"  >View Details</Button></Link> 
              <Button variant="contained"    onClick={handleEditClick} >Modifier</Button>
              <Button variant="contained"    onClick={handleDelete} >Supprimer</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Casal;





         
          
          
         
         
 