// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darkblue px-4">
      <img src={logo} alt="Logo" className="logo-img" />
      <a className="navbar-brand text-white fw-bold" href="#">Finance</a>
       
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#financeNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse custom-collapse" id="financeNavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Dashboard</a></li>
              <li><a className="dropdown-item" href="#">Revenue Report</a></li>
              <li><a className="dropdown-item" href="#">Contact</a></li>
            </ul>
          </li>
        </ul>

        <ul className="navbar-nav mx-auto">
          {[
            { title: 'Business & Trade', items: ['Advertising Permit', 'Liquor Licensing', 'Market Stall Fees', 'Single Business Permit'] },
            { title: 'Transport & Infrastructure', items: ['Road Tolls', 'Loading Zone Permit', 'PSV License Fee', 'Packing Fee'] },
            { title: 'Environmental & Health Services', items: ['Waste Disposal Permits', 'Garbage Collection Fee', 'Cemetery And Burial Plot Fee', 'Public Health Inspection Charges'] },
            { title: 'Social Services', items: ['Ambulance Services Fees', 'Hospital Fees', 'Maternity And Outpatient Fees'] },
            { title: 'Education & Community Services', items: ['ECD Center Fees', 'Library Membership Fees', 'Vocational Training Center Fees'] },
            { title: 'Agriculture & Livestock', items: ['Crop Inspection Certification', 'Livestock Movement', 'Slaughterhouse'] }
          ].map((section, i) => (
            <li className="nav-item dropdown" key={i}>
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">{section.title}</a>
              <ul className="dropdown-menu">
                {section.items.map((item, j) => (
                  <li key={j}><a className="dropdown-item" href="#">{item}</a></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
