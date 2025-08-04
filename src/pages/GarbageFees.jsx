import React from 'react';
import './GarbageFees.css';

const GarbageFees = () => {
const [plan, setPlan] = React.useState('');
const [amount, setAmount] = React.useState(0);
const [receiptVisible, setReceiptVisible] = React.useState(false);
const [paymentMethod, setPaymentMethod] = React.useState('');


const handlePlanChange = (e) => {
  const value = e.target.value;
  setPlan(value);

  switch (value) {
    case 'weekly': setAmount(250); break;
    case 'monthly': setAmount(250 * 4); break;
    case 'quarterly': setAmount(750 * 3); break;
    case 'annually': setAmount(250 * 52); break;
    default: setAmount(0);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
    if (paymentMethod === 'mpesa') {
    alert('M-Pesa prompt sent to your phone. Please complete the payment.');
  } else if (paymentMethod === 'visa') {
    alert('Processing Visa card payment...');
  } else {
    alert('Select a valid payment method.');
    return;
  }

  setReceiptVisible(true);
};
 


// export default function GarbageFees(){
  return (
    <div className="garbage-container">
      <header className="header">
        <h1>Garbage Collection Fees</h1>
        <p>Promoting a cleaner, safer, and healthier environment for everyone.</p>
      </header>

      <section className="section">
        <h2>Why Keeping Our City Clean Matters</h2>
        <p>
          Clean neighborhoods reduce the risk of diseases, enhance property value, and foster a sense of pride
          among residents. Proper waste disposal helps minimize pollution and improves the quality of life.
        </p>
      </section>

      <section className="section">
        <h2>Why the Fee Is Important</h2>
        <p>
          The garbage collection fee ensures regular pickups, safe waste handling, and availability of
          resources like garbage trucks, bins, and sanitation staff. Your contribution supports better waste
          infrastructure and efficient management.
        </p>
      </section>

      <section className="section">
        <h2>How to Pay the Garbage Collection Fee</h2>
        <ol>
          <li>Enter your property ID or residence address.</li>
          <li>Select your garbage collection plan (monthly, quarterly, annually).</li>
          <li>Choose a payment method (Mobile Money, Bank, Card).</li>
          <li>Confirm and submit your payment.</li>
          <li>Download or print your receipt.</li>
        </ol>
      </section>
      <section className="section">
  <h2>Pay Your Garbage Collection Fee</h2>
  <form onSubmit={handleSubmit} className="payment-form">
    <div className="form-row">
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" required />
      </div>
    </div>

    <div className="form-group">
      <label>Property Address:</label>
      <input type="text" name="address" required />
    </div>

    <div className="form-group">
      <label>Collection & Payment Plan:</label>
      <select onChange={handlePlanChange} required>
        <option value="">-- Select Plan --</option>
        <option value="weekly">Weekly </option>
        <option value="monthly">Monthly </option>
        <option value="quarterly">Quarterly</option>
        <option value="annually">Annually </option>
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
        />{' '} 
        M-Pesa
        </label>
        <label>
          <input 
          type="radio" 
          name="paymentMethod" 
          value="visa" 
          checked={paymentMethod === 'visa'}
          onChange={(e) => setPaymentMethod(e.target.value)}
           
          />{''} 
          Visa
          </label>
      </div>
    </div>

     {paymentMethod === 'mpesa' && (
    <div className="form-group">
      <label>Phone Number (M-Pesa):</label>
      <input
        type="tel"
        name="phone"
        placeholder="e.g. 07XXXXXXXX"
        pattern="07[0-9]{8}"
        required
      />
    </div>
  )}

  {paymentMethod === 'visa' && (
    <div className="form-group">
      <label>Card Number:</label>
      <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" required />
      <div className="form-row">
        <div>
          <label>Expiry:</label>
          <input type="text" name="expiry" placeholder="MM/YY" required />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" name="cvv" placeholder="123" required />
        </div>
      </div>
    </div>
  )}


    <div className="form-group">
      <strong>Total: Ksh {amount}</strong>
    </div>

    <div className="form-group">
      <button type="submit">Submit Payment</button>
    </div>
  </form>

  {receiptVisible && (
    <div className="receipt">
      <h4>Payment Successful</h4>
      <p>Thank you, your payment has been recorded.</p>
      <button onClick={() => window.print()}>Print Receipt</button>
    </div>
  )}
</section>



      <div className="cta">
        <button onClick={() => alert('Redirecting to Payment Portal...')}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default GarbageFees;