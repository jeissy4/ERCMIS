
import React, { useState, useEffect } from "react";
import "../../styles/Social.css";
import directorImg from "../../assets/images/directorImg.jpg";
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";

const services = [
  { name: "Inpatient Care (Level 3)", fee: 2400 },
  { name: "Inpatient Care (Level 4–6)", fee: 5000 },
  { name: "Optical Services", fee: 1000 },
  { name: "Cancer Screening", fee: 3600 },
  { name: "Mortuary Services", fee: 500 },
];

const serviceImages = [service1, service2, service3];

export default function HospitalFeePage() {
  const [form, setForm] = useState({
    patientName: "",
    contact: "",
    service: "",
    fee: 0,
    paymentMethod: "",
  });

  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prevIdx) => (prevIdx + 1) % serviceImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "service") {
      const selected = services.find((s) => s.name === value);
      setForm({ ...form, service: value, fee: selected ? selected.fee : 0 });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment of KES ${form.fee} submitted for ${form.service}`);
  };

  return (
    <div className="page-container">
      
      <section className="director-section">
        <img src={directorImg} alt="County Director of Health" className="director-img" />
        <div>
          <h2>Message from our County Director of Health</h2>
          <p>
            "Our county is committed to providing accessible and affordable healthcare services to all residents.
            From inpatient care to specialized screenings, we aim to ensure that no one is left behind in receiving quality medical attention."
          </p>
        </div>
      </section>

      
      <section className="carousel-section">
        <h3>Hospital Services Gallery</h3>
        <div className="carousel-wrapper">
          <img src={serviceImages[imgIdx]} alt="Hospital Service" className="carousel-img" />
        </div>
      </section>

      
      <section className="form-section">
        <h3>💳 Hospital Service Payment</h3>
        <form onSubmit={handleSubmit} className="hospital-form">
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
          <select name="service" value={form.service} onChange={handleChange} required>
            <option value="">-- Select Service --</option>
            {services.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>

          {form.service && (
            <div className="fee-display">
              <strong>Fee:</strong> KES {form.fee.toLocaleString()}
            </div>
          )}

          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            <option value="">-- Select Payment Method --</option>
            <option value="Mpesa">Mpesa</option>
            <option value="Airtel Money">Airtel Money</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>

          <button type="submit">Submit Payment</button>
        </form>
      </section>
    </div>
  );
}