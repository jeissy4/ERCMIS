import React from 'react';
import './PublicHealth.css';

const PublicHealth = () => {
  const [inspectionType, setInspectionType] = React.useState('');
  const [businessType, setBusinessType] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [fee, setFee] = React.useState(0);
  const [receiptVisible, setReceiptVisible] = React.useState(false);

  const handleFeeCalculation = (bizType, inspType) => {
    let base = 0;
    if (bizType === 'restaurant') base = 1500;
    else if (bizType === 'butchery') base = 1000;
    else if (bizType === 'food_truck') base = 1200;
    else if (bizType === 'hotel') base = 2000;
    else base = 800;

    if (inspType === 'renewal') base = base * 0.75;

    setFee(base);
  };

  const handleBusinessTypeChange = (e) => {
    const value = e.target.value;
    setBusinessType(value);
    handleFeeCalculation(value, inspectionType);
  };

  const handleInspectionTypeChange = (e) => {
    const value = e.target.value;
    setInspectionType(value);
    handleFeeCalculation(businessType, value);
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
    <div className="health-container">
      <header className="header">
        <h1>Public Health Inspection Charges</h1>
        <p>Ensure compliance and safety for your food-related business by applying for a health inspection.</p>
      </header>

      <section className="section">
        <h2>Why Inspections Matter</h2>
        <p>
          Regular health inspections prevent foodborne illnesses, ensure hygiene standards,
          and build trust with customers. They are mandatory for all food-related businesses.
        </p>
      </section>

      <section className="section">
        <h2>How to Apply & Pay</h2>
        <ol>
          <li>Fill out your business and inspection details below.</li>
          <li>Choose the inspection type and payment method.</li>
          <li>Confirm and submit your payment.</li>
          <li>Print or save your receipt for record.</li>
        </ol>
      </section>

      <section className="section">
        <h2>Application Form</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Business Name:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Business Type:</label>
            <select onChange={handleBusinessTypeChange} required>
              <option value="">-- Select Type --</option>
              <option value="restaurant">Restaurant</option>
              <option value="butchery">Butchery</option>
              <option value="food_truck">Food Truck</option>
              <option value="hotel">Hotel</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Business Location:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Inspection Type:</label>
            <select onChange={handleInspectionTypeChange} required>
              <option value="">-- Select --</option>
              <option value="initial">Initial Inspection</option>
              <option value="renewal">Renewal</option>
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
            <strong>Total Fee: Ksh {fee}</strong>
          </div>

          <div className="form-group">
            <button type="submit">Submit Payment</button>
          </div>
        </form>

        {receiptVisible && (
          <div className="receipt">
            <h4>Payment Successful</h4>
            <p>Your inspection request has been received. Please print your receipt.</p>
            <button onClick={() => window.print()}>Print Receipt</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PublicHealth;
