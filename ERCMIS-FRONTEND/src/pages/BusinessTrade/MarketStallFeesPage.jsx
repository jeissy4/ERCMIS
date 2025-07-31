import React, { useState } from 'react';
import './MarketStallFeesPage.css';

function MarketStallFeesForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    applicantName: '',
    idNumber: '',
    phone: '',
    email: '',
    address: '',
    location: '',
    businessType: '',
    premisesNature: '',
    premisesSize: '',
    registrationNumber: '',
    paymentMethod: '',
    marketName: '',
    stallNumber: '',
    productType: '',
    licenseFrequency: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="market-form-container">
      <h2>Market Stall Fees & Vendor License Application</h2>
      <form onSubmit={handleSubmit} className="market-form">
        <input name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" required />
        <input name="applicantName" value={formData.applicantName} onChange={handleChange} placeholder="Applicant Full Name" required />
        <input name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="ID/Passport Number" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" type="tel" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" required />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Business Physical Address" required />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="County/Sub-county/Ward" required />
        <input name="businessType" value={formData.businessType} onChange={handleChange} placeholder="Type of Business" required />
        <input name="premisesNature" value={formData.premisesNature} onChange={handleChange} placeholder="Nature of Premises" required />
        <input name="premisesSize" value={formData.premisesSize} onChange={handleChange} placeholder="Size of Premises (sqm)" type="number" required />
        <input name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} placeholder="Business Registration Number (optional)" />

        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
          <option value="">Select Payment Method</option>
          <option value="Mobile Money">Mobile Money</option>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>

        <hr />
        <h3>Market Stall Details</h3>
        <input name="marketName" value={formData.marketName} onChange={handleChange} placeholder="Market Name or Location" required />
        <input name="stallNumber" value={formData.stallNumber} onChange={handleChange} placeholder="Stall Number / Size" required />
        <input name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type Sold" required />
        <select name="licenseFrequency" value={formData.licenseFrequency} onChange={handleChange} required>
          <option value="">Select License Duration</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default MarketStallFeesForm;
