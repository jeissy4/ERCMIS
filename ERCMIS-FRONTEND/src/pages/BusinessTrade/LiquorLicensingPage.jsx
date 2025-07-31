import React, { useState } from 'react';
import './LiquorLicensingPage.css'; // 👈 Import the custom CSS

function LiquorLicensingForm() {
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
    licenseType: '',
    operatingHours: '',
    previousLicense: '',
    policeClearance: null,
    healthCertificate: null,
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
      <h2 className="form-title">Liquor License Application</h2>
      <form onSubmit={handleSubmit}>
        {[
          { name: 'businessName', placeholder: 'Business Name' },
          { name: 'applicantName', placeholder: 'Applicant Full Name' },
          { name: 'idNumber', placeholder: 'ID/Passport Number' },
          { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
          { name: 'email', placeholder: 'Email Address', type: 'email' },
          { name: 'address', placeholder: 'Business Physical Address' },
          { name: 'location', placeholder: 'County/Sub-county/Ward' },
          { name: 'businessType', placeholder: 'Type of Business' },
          { name: 'premisesNature', placeholder: 'Nature of Premises' },
          { name: 'premisesSize', placeholder: 'Size of Premises (sqm)', type: 'number' },
          { name: 'registrationNumber', placeholder: 'Business Registration Number' },
          { name: 'operatingHours', placeholder: 'Operating Hours' },
          { name: 'previousLicense', placeholder: 'Previous License Number (if renewal)' },
        ].map(({ name, placeholder, type }) => (
          <div key={name} className="form-group">
            <input
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              type={type || 'text'}
              required={name !== 'registrationNumber' && name !== 'previousLicense'}
            />
          </div>
        ))}

        <div className="form-group">
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment Method</option>
            <option value="Mobile Money">Mobile Money</option>
            <option value="Card">Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <hr />
        <div className="form-section-title">License Details</div>

        <div className="form-group">
          <select name="licenseType" value={formData.licenseType} onChange={handleChange} required>
            <option value="">Select License Type</option>
            <option value="Bar">Bar</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Distributor">Distributor</option>
            <option value="Nightclub">Nightclub</option>
          </select>
        </div>

        <div className="form-group">
          <label>Upload Police Clearance:</label>
          <input
            name="policeClearance"
            onChange={handleChange}
            type="file"
            accept="application/pdf,image/*"
            required
          />
        </div>

        <div className="form-group">
          <label>Upload Health Certificate:</label>
          <input
            name="healthCertificate"
            onChange={handleChange}
            type="file"
            accept="application/pdf,image/*"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
}

export default LiquorLicensingForm;
