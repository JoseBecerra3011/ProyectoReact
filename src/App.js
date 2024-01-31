import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de motocicletas!" />
    </div>
  );
};

export default App;
