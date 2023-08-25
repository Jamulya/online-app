import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <Link to='/products' className="nav-link active" >Products</Link>
        <Link to='/cart' className="nav-link" >Cart</Link>
   
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
};

export default Header;