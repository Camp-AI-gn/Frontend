// src/components/Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
const Navbar = () => {
  return (
                 <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                      <div class="container-fluid">
                            <span class="navbar-brand mb-0 h1">Navbar</span>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"> </span>
                          </button>
                          
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                              </li>
                          </ul>
                        </div>
                      </nav>
  );
};

export default Navbar;
