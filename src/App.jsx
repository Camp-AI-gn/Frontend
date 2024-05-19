import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playground from './pages/playground/playground';
import Home from './pages/Home'; // Assuming you have a Home component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
