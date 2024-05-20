import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '@/components/ui/navbar'; // Adjust the import path based on your project structure
import Component from '@/components/ui/hero/section1'; // Import the Navbar component

const Home = () => {
  return (
    <div>


      <div>
      <div style={{ height: '200vh', width: '100%', zIndex:1000 }}>
          <Component />
        </div>
        <div style={{ height: '200vh' }}>
          <h2>Div 2</h2>
          <p>This is the content of div 2.</p>
        </div>
        <div style={{ height: '200vh' }}>
          <h2>Div 3</h2>
          <p>This is the content of div 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;