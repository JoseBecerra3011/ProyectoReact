import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar hero is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Motorcycle Home
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          {/* Categorías clickeables */}
          <a className="navbar-item" href="/categoria1">
            ECONO
          </a>
          <a className="navbar-item" href="/categoria2">
            SCOOTER
          </a>
          <a className="navbar-item" href="/categoria3">
            CALLE
          </a>
          <a className="navbar-item" href="/categoria4">
            ENDURO
          </a>
        </div>
      </div>

      {/* Nuevo componente CartWidget */}
      <div className="navbar-end">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;