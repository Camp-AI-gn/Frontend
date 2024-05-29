import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playground from './pages/playground/playground';
import Home from './pages/Home';
import Navbar from './components/ui/Navbar/Navbar'; // Assuming you have a Navbar component
import Footer from './components/ui/footer'; // Assuming you have a Navbar component

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: '60px' }}> {/* Adjust this value based on the height of your navbar */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    <Footer /> 
    </BrowserRouter>
  );
}
export default App;
