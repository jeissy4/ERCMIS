import React, { useState } from 'react';
import './VocationalTrainingCenterFee.css';

function VocationalTrainingForm() {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    phone: '',
    email: '',
    trainingCenter: '',
    course: '',
    duration: '',
    startDate: '',
    paymentPlan: '',
    supportingDocs: null,
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
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    console.log('Vocational form submitted', formData);
  };

  return (
    <div className="vocational-form-container">
      <h2>🏫 Vocational Training Center Application</h2>
      <form onSubmit={handleSubmit} className="vocational-form">
        <label htmlFor="name">Full Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="idNumber">ID Number</label>
        <input name="idNumber" value={formData.idNumber} onChange={handleChange} required />

        <label htmlFor="phone">Phone Number</label>
        <input name="phone" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="email">Email Address</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="trainingCenter">Training Center Name</label>
        <input name="trainingCenter" value={formData.trainingCenter} onChange={handleChange} required />

        <label htmlFor="course">Course/Program</label>
        <input name="course" value={formData.course} onChange={handleChange} required />

        <label htmlFor="duration">Course Duration</label>
        <input name="duration" value={formData.duration} onChange={handleChange} required />

        <label htmlFor="startDate">Start Date</label>
        <input name="startDate" type="date" value={formData.startDate} onChange={handleChange} required />

        <label htmlFor="paymentPlan">Payment Plan</label>
        <select name="paymentPlan" value={formData.paymentPlan} onChange={handleChange} required>
          <option value="">Select Plan</option>
          <option value="One-time">One-time Payment</option>
          <option value="Installments">Installments</option>
        </select>

        <label htmlFor="supportingDocs">Upload Supporting Documents</label>
        <input
          name="supportingDocs"
          type="file"
          accept="application/pdf,image/*"
          onChange={handleChange}
        />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default VocationalTrainingForm;
