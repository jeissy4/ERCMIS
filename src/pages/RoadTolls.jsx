import React from 'react';
import './RoadTolls.css';

const RoadTolls = () => {
  const [vehicleType, setVehicleType] = React.useState('');
  const [route, setRoute] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [fee, setFee] = React.useState(0);
  const [receiptVisible, setReceiptVisible] = React.useState(false);

  const handleFeeCalc = (v, r) => {
    let base = 0;
    if (r === 'nakuru-naivasha') base = 100;
    else if (r === 'nakuru-eldoret') base = 200;
    else base = 150;

    if (v === 'truck') base *= 2;
    if (v === 'bus') base *= 1.5;

    setFee(base);
  };

  const handleChange = (type, value) => {
    if (type === 'vehicle') setVehicleType(value);
    if (type === 'route') setRoute(value);
    handleFeeCalc(type === 'vehicle' ? value : vehicleType, type === 'route' ? value : route);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) return alert('Select payment method');
    alert(paymentMethod === 'mpesa' ? 'Prompt sent to your phone' : 'Processing Visa...');
    setReceiptVisible(true);
  };

  return (
    <div className="roadtoll-container">
      <header className="header">
        <h1>Road Tolls & Highway Usage Fees</h1>
        <p>Pay tolls for using select public highways and bypass routes.</p>
      </header>

      
         <section className="section">
  <h2>Why Road Toll Payments Matter</h2>
  <p>
    Road tolls are not just fees — they are direct contributions to the <strong>maintenance and development of critical infrastructure</strong>. 
    These funds are used to:
  </p>
  <ul>
    <li>Maintain and repair public highways, bridges, and bypass roads</li>
    <li>Install and power street lighting for safer nighttime travel</li>
    <li>Maintain road signage and lane markings</li>
    <li>Enhance drainage systems to prevent flooding</li>
    <li>Improve traffic safety through barriers and smart monitoring systems</li>
  </ul>
  <p>
    By paying your road toll, you're helping build a safer, more efficient, and sustainable road network for all users.
  </p>
</section>
<section className="section">
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Vehicle Type:</label>
            <select onChange={(e) => handleChange('vehicle', e.target.value)} required>
              <option value="">-- Select --</option>
              <option value="private">Private Car</option>
              <option value="bus">Public Bus</option>
              <option value="truck">Cargo Truck</option>
            </select>
          </div>

          <div className="form-group">
            <label>Route:</label>
            <select onChange={(e) => handleChange('route', e.target.value)} required>
              <option value="">-- Select Route --</option>
              <option value="nakuru-naivasha">Nakuru - Naivasha Highway</option>
              <option value="nakuru-eldoret">Nakuru - Eldoret Road</option>
              <option value="nakuru-bypass">Nakuru Bypass Road</option>
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
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />{' '}
                M-Pesa
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="visa"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{' '}
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
            <strong>Toll Fee: Ksh {fee}</strong>
          </div>

          <button type="submit">Submit Payment</button>
        </form>

        {receiptVisible && (
          <div className="receipt">
            <h4>Payment Received</h4>
            <p>Highway toll payment confirmed.</p>
            <button onClick={() => window.print()}>Print Receipt</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default RoadTolls;
