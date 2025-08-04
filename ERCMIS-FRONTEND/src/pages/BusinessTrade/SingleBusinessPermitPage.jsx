import React, { useState } from 'react';
import './SingleBusinessPermitPage.css'; // ✅ Import the CSS

function SingleBusinessPermitForm() {
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
    permitType: '',
    startDate: '',
    annualTurnover: '',
    businessCategory: '',
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
    <div className="form-container">
      <h2>Single Business Permit Application</h2>
      <form onSubmit={handleSubmit}>
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
        <input name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} placeholder="Business Registration Number" />

        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
          <option value="">Select Payment Method</option>
          <option value="Mobile Money">Mobile Money</option>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>

        <h3>Permit Details</h3>
        <select name="permitType" value={formData.permitType} onChange={handleChange} required>
          <option value="">Select Permit Type</option>
          <option value="New">New</option>
          <option value="Renewal">Renewal</option>
        </select>
        <input name="startDate" value={formData.startDate} onChange={handleChange} type="date" required />
        <input name="annualTurnover" value={formData.annualTurnover} onChange={handleChange} placeholder="Annual Turnover Estimate" type="number" required />
        <input name="businessCategory" value={formData.businessCategory} onChange={handleChange} placeholder="Business Category" required />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default SingleBusinessPermitForm;
