import React from 'react';
import './SanitationPermit.css';

const SanitationPermit = () => {
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [wasteType, setWasteType] = React.useState('');
  const [volume, setVolume] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [fee, setFee] = React.useState(0);
  const [receiptVisible, setReceiptVisible] = React.useState(false);

  const calculateFee = (vol, dur) => {
    let ratePerKg = 10; // Base rate
    if (wasteType === 'medical') ratePerKg = 20;
    else if (wasteType === 'industrial') ratePerKg = 15;

    const volumeNum = parseFloat(vol) || 0;
    let fee = ratePerKg * volumeNum;

    if (dur === 'annual') {
      fee = fee * 12 * 0.9; // 10% discount for annual
    }

    setFee(fee);
  };

  const handleVolumeChange = (e) => {
    const value = e.target.value;
    setVolume(value);
    calculateFee(value, duration);
  };

  const handleDurationChange = (e) => {
    const value = e.target.value;
    setDuration(value);
    calculateFee(volume, value);
  };

  const handleWasteTypeChange = (e) => {
    const value = e.target.value;
    setWasteType(value);
    calculateFee(volume, duration);
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
    <div className="sanitation-container">
      <header className="header">
        <h1>Sanitation & Waste Disposal Permit</h1>
        <p>Apply for legal authorization to dispose of business or institutional waste responsibly.</p>
      </header>

      <section className="section">
        <h2>Why This Permit Matters</h2>
        <p>
          This permit ensures your facility complies with local environmental and sanitation laws. It helps
          prevent pollution and guarantees safe disposal practices.
        </p>
      </section>

      <section className="section">
        <h2>Application Procedure</h2>
        <ol>
          <li>Provide business and waste type information</li>
          <li>Enter waste volume and select permit duration</li>
          <li>Choose payment method and complete the fee</li>
          <li>Download or print your receipt</li>
        </ol>
      </section>

      <section className="section">
        <h2>Permit Application Form</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Applicant Full Name:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Facility/Business Type:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Waste Type:</label>
            <select onChange={handleWasteTypeChange} required>
              <option value="">-- Select Type --</option>
              <option value="organic">Organic</option>
              <option value="medical">Medical</option>
              <option value="industrial">Industrial</option>
              <option value="recyclable">Recyclable</option>
            </select>
          </div>

          <div className="form-group">
            <label>Estimated Monthly Volume (kg):</label>
            <input type="number" min="1" onChange={handleVolumeChange} required />
          </div>

          <div className="form-group">
            <label>Permit Duration:</label>
            <select onChange={handleDurationChange} required>
              <option value="">-- Select Duration --</option>
              <option value="monthly">Monthly</option>
              <option value="annual">Annual (10% Discount)</option>
            </select>
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
            <strong>Permit Fee: Ksh {fee}</strong>
          </div>

          <div className="form-group">
            <button type="submit">Submit Payment</button>
          </div>
        </form>

        {receiptVisible && (
          <div className="receipt">
            <h4>Payment Successful</h4>
            <p>Your sanitation permit request has been submitted.</p>
            <button onClick={() => window.print()}>Print Receipt</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default SanitationPermit;
