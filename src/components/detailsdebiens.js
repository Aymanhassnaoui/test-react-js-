import React from "react";
import { Link, useParams } from "react-router-dom";
import info from "./detail";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function ProductDetails ()  {
    const { id } = useParams();
  const product = info.find(p => p.id === parseInt(id));
  
  

  return (
    <Container fixed> <h2>Détails du produit:</h2>
    <p> nom: {product.name}</p>
    <p> type: {product.type}</p>
    <p> price: {product.price}</p>
    <Link to={`/`} ><Button  variant="contained"  >return a la liste des produits</Button></Link> 
    
    </Container>

 
  );
}

export default ProductDetails;