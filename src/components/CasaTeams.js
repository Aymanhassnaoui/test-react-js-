import React, { useState } from 'react';
import Casal from "./Casa"
import info from './detail';



   function Casam  (){
       
      const [data, setData] = useState(info);
        
       const deleteMember = (id) => {
         const updatedData = data.filter((member) => member.id !== id);
         setData(updatedData);
       };



       const modifyItem = (id, updatedProperties) => {
         const updatedData = data.map((member) => {
           if (member.id === id) {
             return {
               ...member,
               ...updatedProperties
             };
           }
           return member;
         });
         setData(updatedData);
       };


       const mem =  data.map(function(member){
  
  return (
    <Casal
   
     
    key={member.id}
    id={member.id}
    name={member.name}
    type={member.type}
    price={member.price}
    rating={member.rating}
    warranty_years={member.warranty_years}
    deleteMember={() => deleteMember(member.id)}
    modifyItem={modifyItem}
    
  /> 
);
});  
return (

    
      <div className='row'>
                {mem}
      </div>
    
);
   } 

export default Casam ;