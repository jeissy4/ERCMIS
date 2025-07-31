import React, { useState } from 'react';
import './LibraryMembership.css';

function LibraryMembershipForm() {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    phone: '',
    email: '',
    address: '',
    membershipType: '',
    preferredBranch: '',
    duration: '',
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    console.log('Library membership form submitted', formData);
  };

  return (
    <div className="library-form-container">
      <h2>📚 Library Membership Application</h2>
      <form onSubmit={handleSubmit} className="library-form">
        <label htmlFor="name">Full Name</label>
        <input
          name="name"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="idNumber">ID Number</label>
        <input
          name="idNumber"
          type="text"
          id="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Residential Address</label>
        <input
          name="address"
          type="text"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="membershipType">Membership Type</label>
        <select
          name="membershipType"
          id="membershipType"
          value={formData.membershipType}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          <option value="Adult">Adult</option>
          <option value="Student">Student</option>
          <option value="Child">Child</option>
        </select>

        <label htmlFor="preferredBranch">Preferred Library Branch</label>
        <input
          name="preferredBranch"
          type="text"
          id="preferredBranch"
          value={formData.preferredBranch}
          onChange={handleChange}
          required
        />

        <label htmlFor="duration">Membership Duration (e.g. 12 months)</label>
        <input
          name="duration"
          type="text"
          id="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />

        <label htmlFor="documents">Upload ID / Proof of Residence</label>
        <input
          name="documents"
          type="file"
          id="documents"
          accept="application/pdf,image/*"
          onChange={handleChange}
        />

        <button type="submit">Submit Membership</button>
      </form>
    </div>
  );
}

export default LibraryMembershipForm;
