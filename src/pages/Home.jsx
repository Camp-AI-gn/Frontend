import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '@/components/ui/Navbar/Navbar'; // Adjust the import path based on your project structure
import Component from '@/components/ui/hero/section1'; // Import the Navbar component
import Presentation from '@/components/ui/Card/Presentation';
import Section3 from '@/components/ui/section3'; // Import the Navbar component



const Home = () => {
  return (
    <div>


      <div>
         <div style={{ height: '90vh', width: '100%', zIndex:1000 }}>
          <Component />
        </div>
        <div style={{ height: '60vh' }}>
          <Presentation />
        </div>
        <div style={{ height: '90vh' }}>

        <Section3 />
        </div>

      </div>
    </div>
  );
};

export default Home;