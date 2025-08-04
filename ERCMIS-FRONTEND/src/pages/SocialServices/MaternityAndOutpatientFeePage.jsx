
import React, { useState } from 'react';
import '../../styles/Social.css';

const maternityFees = [
  { service: 'Normal Delivery', fee: 11200 },
  { service: 'Caesarean Section', fee: 32600 },
  { service: 'Anti-D Serum', fee: 6000 },
  { service: 'Neonatal Complication Management', fee: 0 }, // Variable fee
];

const outpatientFees = [
  { service: 'General Consultation', fee: 2000 },
  { service: 'Basic Radiology', fee: 0 },
  { service: 'Lab Tests', fee: 0 },
  { service: 'Chronic Condition Management', fee: 0 },
];

const allServices = [...maternityFees, ...outpatientFees];

export default function MaternityFeePage() {
  const [form, setForm] = useState({
    patientName: '',
    contact: '',
    selectedService: '',
    fee: 0,
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'selectedService') {
      const selected = allServices.find((s) => s.service === value);
      setForm({ ...form, selectedService: value, fee: selected ? selected.fee : 0 });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of KES ${form.fee} submitted for ${form.selectedService} via ${form.paymentMethod}`);
  };

  return (
    <div className="maternity-fee-page">
      <h1>Maternity & Outpatient Fees</h1>

      {/* Fee Tables */}
      <section>
        <h2>🤰 Maternity Services</h2>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Fee (KES)</th>
            </tr>
          </thead>
          <tbody>
            {maternityFees.map((item, index) => (
              <tr key={index}>
                <td>{item.service}</td>
                <td>{item.fee ? item.fee.toLocaleString() : 'Variable'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>🩺 Outpatient Services</h2>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Fee (KES)</th>
            </tr>
          </thead>
          <tbody>
            {outpatientFees.map((item, index) => (
              <tr key={index}>
                <td>{item.service}</td>
                <td>{item.fee ? item.fee.toLocaleString() : 'Free'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Payment Form */}
      <section className="form-section">
        <h2>💳 Make a Payment</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          <input
            name="patientName"
            placeholder="Patient Full Name"
            value={form.patientName}
            onChange={handleChange}
            required
          />
          <input
            name="contact"
            placeholder="Contact Number"
            value={form.contact}
            onChange={handleChange}
            required
          />
          <select name="selectedService" value={form.selectedService} onChange={handleChange} required>
            <option value="">-- Select Service --</option>
            {allServices.map((s, idx) => (
              <option key={idx} value={s.service}>
                {s.service}
              </option>
            ))}
          </select>

          {form.selectedService && (
            <div className="fee-display">
              <strong>Fee:</strong> KES {form.fee ? form.fee.toLocaleString() : 'Variable (Confirm at facility)'}
            </div>
          )}

          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            <option value="">-- Select Payment Method --</option>
            <option value="Mpesa">Mpesa</option>
            <option value="Airtel Money">Airtel Money</option>
          </select>

          <button type="submit">Submit Payment</button>
        </form>
      </section>
    </div>
  );
}