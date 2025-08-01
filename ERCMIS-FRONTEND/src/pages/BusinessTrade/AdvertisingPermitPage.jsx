import React, { useState } from 'react';
import './AdvertisingPermitPage.css';

function AdvertisementPermitForm() {
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
    signageType: '',
    signageSize: '',
    signageLocation: '',
    signageDuration: '',
    artwork: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    console.log('Form submitted');
  };

  return (
    <div className="form-container">
      <h2>Advertisement Permit Application</h2>
      <form onSubmit={handleSubmit}>
        <input name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" className="form-field" required />
        <input name="applicantName" value={formData.applicantName} onChange={handleChange} placeholder="Applicant Full Name" className="form-field" required />
        <input name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="ID/Passport Number" className="form-field" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" type="tel" className="form-field" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" className="form-field" required />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Business Physical Address" className="form-field" required />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="County/Sub-county/Ward" className="form-field" required />
        <input name="businessType" value={formData.businessType} onChange={handleChange} placeholder="Type of Business" className="form-field" required />
        <input name="premisesNature" value={formData.premisesNature} onChange={handleChange} placeholder="Nature of Premises" className="form-field" required />
        <input name="premisesSize" value={formData.premisesSize} onChange={handleChange} placeholder="Size of Premises (sqm)" type="number" className="form-field" required />
        <input name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} placeholder="Business Registration Number" className="form-field" />

        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="form-field" required>
          <option value="">Select Payment Method</option>
          <option value="Mobile Money">Mobile Money</option>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>

        <h3>Signage Details</h3>
        <input name="signageType" value={formData.signageType} onChange={handleChange} placeholder="Type of Signage" className="form-field" required />
        <input name="signageSize" value={formData.signageSize} onChange={handleChange} placeholder="Size and Dimensions" className="form-field" required />
        <input name="signageLocation" value={formData.signageLocation} onChange={handleChange} placeholder="Location of Signage" className="form-field" required />
        <input name="signageDuration" value={formData.signageDuration} onChange={handleChange} placeholder="Duration (e.g. 1 month)" className="form-field" required />

        <label className="form-label">Upload Artwork/Mockup:</label>
        <input name="artwork" onChange={handleChange} type="file" className="form-field" accept="image/*,application/pdf" required />

        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
}

export default AdvertisementPermitForm;
