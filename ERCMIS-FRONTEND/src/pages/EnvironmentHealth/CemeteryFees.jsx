import React, { useState } from 'react';
import './CemeteryFees.css';

const CemeteryFees = () => {
  const [plotType, setPlotType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [fee, setFee] = useState(0);
  const [receiptVisible, setReceiptVisible] = useState(false);

  const handlePlotChange = (e) => {
    const type = e.target.value;
    setPlotType(type);

    switch (type) {
      case 'standard':
        setFee(10000);
        break;
      case 'premium':
        setFee(20000);
        break;
      case 'vault':
        setFee(40000);
        break;
      default:
        setFee(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'mpesa') {
      alert('M-Pesa prompt sent to your phone.');
    } else if (paymentMethod === 'visa') {
      alert('Processing Visa payment...');
    } else {
      alert('Please select a valid payment method.');
      return;
    }

    setReceiptVisible(true);
  };

  return (
    <div className="cemetery-container">
      <header className="header">
        <h1>Cemetery & Burial Plot Fees</h1>
        <p>Secure and pay for burial space in official public cemeteries.</p>
      </header>

      <section className="section">
        <h2>Why This Service Matters</h2>
        <p>
          Proper burial arrangements help families avoid disputes and ensure dignified final rites.
          This system ensures transparency, orderly cemetery management, and continuous maintenance.
        </p>
      </section>

      <section className="section">
        <h2>Procedure</h2>
        <ol>
          <li>Fill out the burial request form</li>
          <li>Select plot type and cemetery</li>
          <li>Choose your payment method and submit</li>
          <li>Print or save your receipt</li>
        </ol>
      </section>

      <section className="section">
        <h2>Burial Plot Request Form</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Deceased Full Name:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Requestor Full Name:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Relationship to Deceased:</label>
            <input type="text" placeholder="e.g. Father, Sister, Spouse" required />
          </div>

          <div className="form-group">
            <label>Cemetery Location:</label>
            <select required>
              <option value="">-- Select Location --</option>
              <option>Nakuru North Public Cemetery</option>
              <option>Nakuru South Memorial Grounds</option>
              <option>Langalanga Cemetery</option>
            </select>
          </div>

          <div className="form-group">
            <label>Plot Type:</label>
            <select onChange={handlePlotChange} required>
              <option value="">-- Select Plot Type --</option>
              <option value="standard">Standard (Ksh 10,000)</option>
              <option value="premium">Premium (Ksh 20,000)</option>
              <option value="vault">Family Vault (Ksh 40,000)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Planned Burial Date:</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Payment Method:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mpesa"
                  checked={paymentMethod === 'mpesa'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                M-Pesa
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="visa"
                  checked={paymentMethod === 'visa'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Visa
              </label>
            </div>
          </div>

          {paymentMethod === 'mpesa' && (
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="tel" placeholder="07XXXXXXXX" required />
            </div>
          )}

          {paymentMethod === 'visa' && (
            <div className="form-group">
              <label>Card Number:</label>
              <input type="text" placeholder="1234 5678 9012 3456" required />
              <div className="form-row">
                <div>
                  <label>Expiry:</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                <div>
                  <label>CVV:</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>
            </div>
          )}

          <div className="form-group">
            <strong>Total Fee: Ksh {fee}</strong>
          </div>

          <div className="form-group">
            <button type="submit">Submit Payment</button>
          </div>
        </form>

        {receiptVisible && (
          <div className="receipt">
            <h4>Payment Successful</h4>
            <p>Burial plot request received and confirmed.</p>
            <button onClick={() => window.print()}>Print Receipt</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default CemeteryFees;
