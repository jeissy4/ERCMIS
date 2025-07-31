import React, { useState } from 'react';
import './ECDCenterFees.css';

function ECDCenterFeesForm() {
  const [formData, setFormData] = useState({
    guardianName: '',
    idNumber: '',
    phone: '',
    email: '',
    childName: '',
    dob: '',
    classLevel: '',
    centerName: '',
    term: '',
    feeType: [],
    birthCert: null,
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'select-multiple') {
      const selected = Array.from(e.target.selectedOptions).map(o => o.value);
      setFormData({ ...formData, [name]: selected });
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
    console.log('ECD Form submitted');
  };

  return (
    <div className="ecd-form-container">
      <h2>ECD Center Fees Application</h2>
      <form onSubmit={handleSubmit} className="ecd-form">

        <input
          name="guardianName"
          value={formData.guardianName}
          onChange={handleChange}
          placeholder="Parent/Guardian Name"
          required
        />
        <input
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          placeholder="ID/Passport Number"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          type="tel"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          type="email"
          required
        />
        <input
          name="childName"
          value={formData.childName}
          onChange={handleChange}
          placeholder="Child’s Full Name"
          required
        />
        <input
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          type="date"
          required
        />

        <select
          name="classLevel"
          value={formData.classLevel}
          onChange={handleChange}
          required
        >
          <option value="">Select Class Level</option>
          <option value="Baby">Baby</option>
          <option value="Middle">Middle</option>
          <option value="Pre-Unit">Pre-Unit</option>
        </select>

        <input
          name="centerName"
          value={formData.centerName}
          onChange={handleChange}
          placeholder="Center Name"
          required
        />

        <select
          name="term"
          value={formData.term}
          onChange={handleChange}
          required
        >
          <option value="">Select Term</option>
          <option value="Term 1">Term 1</option>
          <option value="Term 2">Term 2</option>
          <option value="Term 3">Term 3</option>
        </select>

        <label>Fee Type (hold Ctrl to select multiple):</label>
        <select
          name="feeType"
          multiple
          value={formData.feeType}
          onChange={handleChange}
        >
          <option value="Tuition">Tuition</option>
          <option value="Meals">Meals</option>
          <option value="Transport">Transport</option>
          <option value="Uniform">Uniform</option>
        </select>

        <label>Upload Birth Certificate:</label>
        <input
          name="birthCert"
          onChange={handleChange}
          type="file"
          accept="image/*,application/pdf"
          required
        />

        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="Mobile Money">Mobile Money</option>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>

        <button type="submit" className="ecd-submit-button">Submit Application</button>
      </form>
    </div>
  );
}

export default ECDCenterFeesForm;
