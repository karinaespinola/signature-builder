import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import Navigation from './components/navigation/Navigation';
import Builder from './components/builder/Builder';

function App() {
  return (
    <>
      <Navigation />
        <div className="container">
          <Builder />
        </div>
    </>
  );
}

export default App;
