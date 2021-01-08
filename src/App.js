import React from 'react';
import './scss/custom.scss';
import Navigation from './components/navigation/Navigation';
import Builder from './components/builder/Builder';

function App() {
  return (
    <>
      <Navigation />
        <div className="container signature-builder">
          <Builder />
        </div>
    </>
  );
}

export default App;
