import React from 'react';


const Products = () => {




  return (
    <div className='d-flex flex-wrap gap-2' > 
    <div className="card" style={{width: "180px"}}> 
      <img className="card-img-top" alt="..."/> 
        <div className="card-body"> 
          <h5 className="card-title">title</h5> 
          <p className='card-text'> 
          </p> 
          <h6>$</h6> 
               <a href="#" className="btn btn-primary">
                   + add to cart
                   </a> 
         </div> 
     </div> 
         
       </div> 
  );
};

export default Products;