
import React, { useState } from "react";
import minister from "../../assets/images/minister.jpg";
import ambulance1 from "../../assets/images/ambulance1.jpeg";
import ambulance2 from "../../assets/images/ambulance.jpg";
import '../../styles/Social.css';

const ambulanceImgs = [ambulance1, ambulance2];

export default function AmbulanceServiceFeePage() {
  const [form, setForm] = useState({
    Name: "",
    IDnumber: "",
    contact: "",
    reason: "",
    date: "",
    location: "",
    urgency: "emergency",
    patient: "",
  });
  const [imgIdx, setImgIdx] = useState(0);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setStatus("Processing");
    setTimeout(() => setStatus("Ambulance Dispatched"), 2000);
  };

  const nextImg = () => setImgIdx((imgIdx + 1) % ambulanceImgs.length);
  const prevImg = () => setImgIdx((imgIdx - 1 + ambulanceImgs.length) % ambulanceImgs.length);

  return (
    <div className="page-container">
      <section>
        <h1>Ambulance Services</h1>
        <p>
          Our ambulance services provide rapid emergency transport for critical cases across the county.
          We are committed to saving lives by ensuring timely medical response for all residents.
        </p>
      </section>

      <section className="minister-section">
        <img src={minister} alt="Minister of Health" className="minister-img" />
        <div>
          <h2>Message from the Minister of Health</h2>
          <p>
            "Ambulances are a lifeline for our community, ensuring that critical patients receive the care they need, when they need it most. 
            Our commitment is to provide accessible emergency transport for all, supporting hospitals, schools, and organizations countywide."
          </p>
        </div>
      </section>

      <section>
    
      <h3>Emergency Hotlines</h3>
      <ul className="hotline-list">
         <li className="hotline-item">
         <strong>Hotline 1:</strong>{' '}
      <a href="tel:0800123456" className="hotline-link">0800-123-456</a>
     </li>
    <li className="hotline-item">
    <strong>Hotline 2:</strong>{' '}
    <a href="tel:0800654321" className="hotline-link">0800-654-321</a>
  </li>
</ul>
      </section>

      <section>
        <h3>Request an Ambulance</h3>
        <form onSubmit={handleSubmit} className="form-container">
          <input name="Name" placeholder="Caller Name" value={form.Name} onChange={handleChange} required />
          <input name="IDnumber" placeholder="ID Number" value={form.IDnumber} onChange={handleChange} required />
          <input name="contact" placeholder="Contact Phone" value={form.contact} onChange={handleChange} required />
          <input name="date" type="date" value={form.date} onChange={handleChange} required />
          <input name="location" placeholder="Location/Address" value={form.location} onChange={handleChange} required />
          <select name="urgency" value={form.urgency} onChange={handleChange} required>
            <option value="emergency">Emergency (Free)</option>
            <option value="non-emergency">Non-Emergency (Fee Applies)</option>
          </select>
          <input name="patient" placeholder="Patient Name & Details" value={form.patient} onChange={handleChange} required />
          <textarea name="reason" placeholder="Reason for Request" value={form.reason} onChange={handleChange} required />
          <button type="submit">Submit Request</button>
        </form>

        <div style={{ marginTop: 12 }}>
          {form.urgency === "emergency" ? (
            <span style={{ color: "green" }}>Emergency requests are free of charge.</span>
          ) : (
            <>
              <span style={{ color: "orange" }}>Non-emergency requests may incur a service fee.</span>
              <div className="payment-buttons">
                <button className="payment-button mpesa" onClick={() => alert("Proceed to Mpesa payment")}>
                  Pay with Mpesa
                </button>
                <button className="payment-button airtel" onClick={() => alert("Proceed to Airtel Money payment")}>
                  Pay with Airtel Money
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {submitted && (
        <section className="status-section">
          <h4>Request Status</h4>
          <div>Status: <strong>{status}</strong></div>
        </section>
      )}

      <section className="ambulance-gallery">
        <h3>Our Ambulances</h3>
        <div className="ambulance-viewer">
          <button onClick={prevImg}>&lt;</button>
          <img src={ambulanceImgs[imgIdx]} alt="Ambulance" className="ambulance-img" />
          <button onClick={nextImg}>&gt;</button>
        </div>
      </section>
    </div>
  );
}