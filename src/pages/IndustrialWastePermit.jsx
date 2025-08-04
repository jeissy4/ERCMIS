import React from 'react';
import './IndustrialWastePermit.css';

const IndustrialWastePermit = () => {
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [wasteCategory, setWasteCategory] = React.useState('');
  const [volume, setVolume] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [fee, setFee] = React.useState(0);
  const [receiptVisible, setReceiptVisible] = React.useState(false);

  const calculateFee = (category, vol, dur) => {
    let rate = 0;
    if (category === 'chemical') rate = 25;
    else if (category === 'hazardous') rate = 35;
    else rate = 15;

    const volNum = parseFloat(vol) || 0;
    let base = rate * volNum;

    if (dur === 'annual') base *= 12 * 0.9;

    setFee(base);
  };

  const handleChange = (type, value) => {
    if (type === 'waste') setWasteCategory(value);
    if (type === 'volume') setVolume(value);
    if (type === 'duration') setDuration(value);
    calculateFee(
      type === 'waste' ? value : wasteCategory,
      type === 'volume' ? value : volume,
      type === 'duration' ? value : duration
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) return alert('Please select payment method.');
    if (paymentMethod === 'mpesa') alert('M-Pesa prompt sent.');
    else alert('Processing Visa payment...');
    setReceiptVisible(true);
  };

  return (
    <div className="industrial-container">
      <header className="header">
        <h1>Industrial Waste Disposal Permit</h1>
        <p>For businesses producing chemical, hazardous or high-volume waste.</p>
      </header>

     <section className="section">
  <h2>Why Safe Industrial Waste Disposal Is Critical</h2>
  <p>
    Industrial waste, if improperly managed, can pollute soil, groundwater, and the air. Chemicals and hazardous materials 
    can harm local communities, wildlife, and agriculture. When burned or dumped illegally, industrial waste contributes 
    to <strong>airborne toxins</strong> and <strong>greenhouse gas emissions</strong>, directly accelerating global warming.
  </p>
  <p>
    Safe, regulated disposal through licensed channels ensures toxic waste is neutralized or recycled appropriately. 
    This helps:
  </p>
  <ul>
    <li>Prevent contamination of rivers and farmland</li>
    <li>Reduce disease outbreaks and public health emergencies</li>
    <li>Mitigate the impact of climate change by minimizing emissions</li>
    <li>Protect biodiversity and natural ecosystems</li>
  </ul>
</section>


      <section className="section">
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Company Name:</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Type of Waste:</label>
            <select onChange={(e) => handleChange('waste', e.target.value)} required>
              <option value="">-- Select --</option>
              <option value="general">General Industrial Waste</option>
              <option value="chemical">Chemical Waste</option>
              <option value="hazardous">Hazardous Waste</option>
            </select>
          </div>

          <div className="form-group">
            <label>Estimated Volume (kg/month):</label>
            <input
              type="number"
              min="1"
              onChange={(e) => handleChange('volume', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Permit Duration:</label>
            <select onChange={(e) => handleChange('duration', e.target.value)} required>
              <option value="">-- Select --</option>
              <option value="monthly">Monthly</option>
              <option value="annual">Annual (10% off)</option>
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
                />
                M-Pesa
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="visa"
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

          <button type="submit">Submit Payment</button>
        </form>

        {receiptVisible && (
          <div className="receipt">
            <h4>Payment Complete</h4>
            <p>Your industrial waste permit has been issued.</p>
            <button onClick={() => window.print()}>Print Receipt</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default IndustrialWastePermit;
