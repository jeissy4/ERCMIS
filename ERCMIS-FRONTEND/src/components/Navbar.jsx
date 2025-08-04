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
            <a className="nav-link dropdown-toggle"  data-bs-toggle="dropdown">Home</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Dashboard</a></li>
              <li><a className="dropdown-item" href="revenuereport">Revenue Report</a></li>
              <li><a className="dropdown-item" href="contact">Contact</a></li>
            </ul>
          </li>
        </ul>

        <ul className="navbar-nav mx-auto">
          {[
            { title: 'Business & Trade', items: [['Advertising Permit', '/advertismentpermit'], ['Liquor Licensing', '/liquorlicensing'], ['Market Stall Fees', '/marketstallfees'], ['Single Business Permit', '/singlebusinesspermit']] },
            { title: 'Transport & Infrastructure', items: [['Road Tolls', '/roadtolls'], ['Loading Zone Permit', '/loadingzonepermit'], ['PSV License Fee', '/psvicensefee'], ['Packing Fee', '/parkingfee']] },
            { title: 'Environmental & Health Services', items: [['Waste Disposal Permits', '/wastedisposal'], ['Garbage Collection Fee', '/garbagecollection'], ['Cemetery And Burial Plot Fee', '/cemeteryburial'], ['Public Health Inspection Charges', '/publichealthinspection']] },
            { title: 'Social Services', items: [['Ambulance Services Fees', '/ambulanceservicefee'], ['Hospital Fees', '/hospitalfee'], ['Maternity And Outpatient Fees', '/maternityfee']] },
            { title: 'Education & Community Services', items: [['ECD Center Fees', '/ecdcenter'], ['Library Membership Fees', '/librarymembership'], ['Vocational Training Center Fees', '/vocationaltraining']] },
            { title: 'Agriculture & Livestock', items: [['Crop Inspection Certification', '/cropinspection'], ['Livestock Movement', '/livestockmovement'], ['Slaughterhouse', '/slaughterhouse']] },
            { title: 'Property & Land', items: [['Building Plan Approval', '/buildingplanapproval'], ['Change Of Use Application', '/changeofuseapplication'], ['Land Rates', '/landrates'], ['Plot Rent', '/plotrent']] }
          ].map((obj, i) => (
            <li className="nav-item dropdown" key={i}>
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{obj.title}</a>
              <ul className="dropdown-menu">
                {obj.items.map((item, j) => (
                  <li key={j}><a className="dropdown-item" href={item[1]}>{item[0]}</a></li>
                ))}
              </ul>
            </li>
          ))}
          {/*  */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
