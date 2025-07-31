import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const darkBlue = "#0a2342",
  lightBlue = "#1e3a5c",
  accent = "#1976d2";

export default function LoadingZonePermitPage() {
  const [form, setForm] = useState({
    uniqueId: "",
    vehicleReg: "",
    amount: "",
    paymentMethod: "mpesa",
  });
  const [previousPayments, setPreviousPayments] = useState([]);
  const [lastPayment, setLastPayment] = useState(null);
  const [overdue, setOverdue] = useState([]);
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState({ email: "", query: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching user data
    const userId = "12345678";
    setForm((f) => ({ ...f, uniqueId: userId }));
    // Fetch previous payments, overdue, and balance
    // Replace with real API calls
    setPreviousPayments([
      { date: "2024-05-01", amount: 2000, method: "mpesa", status: "Paid" },
    ]);
    setLastPayment({
      vehicleReg: "KDA123A",
      amount: 2000,
      paymentMethod: "mpesa",
    });
    setOverdue([
      { date: "2024-04-01", amount: 500, penalty: 50, status: "Overdue" },
    ]);
    setBalance(1500);
  }, []);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleReuseLast = () => {
    if (lastPayment) {
      setForm((f) => ({
        ...f,
        vehicleReg: lastPayment.vehicleReg,
        amount: lastPayment.amount,
        paymentMethod: lastPayment.paymentMethod,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setMessage("Payment submitted successfully!");
      setLoading(false);
    }, 1000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setMessage("Your query has been sent. We'll get back to you soon.");
    setContact({ email: "", query: "" });
  };

  return (
    <div
      className="container-fluid min-vh-100 py-4"
      style={{
        background: `linear-gradient(135deg, ${darkBlue}, ${lightBlue})`,
        color: "#fff",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9 col-12">
          <div
            className="card shadow-lg"
            style={{ background: lightBlue, border: "none" }}
          >
            <div className="card-body">
              <p
                className="mb-4 text-info opacity-75"
                style={{ fontSize: "1.2rem" }}
              >
                <strong>Loading Zone Permit</strong> allows you to pay for
                loading and unloading zones within XX County. Choose your
                preferred payment method and fill in the required details.
              </p>
              <div className="mb-3">
                <span className="badge bg-info text-dark me-2">
                  Wallet Balance: KES {balance}
                </span>
                {balance < (form.amount || 0) && (
                  <span className="badge bg-warning text-dark">
                    Insufficient balance, please pay manually.
                  </span>
                )}
              </div>
              {overdue.length > 0 && (
                <div className="alert alert-danger">
                  {" "}
                  <strong>Overdue Payments:</strong>{" "}
                  <ul className="mb-0">
                    {" "}
                    {overdue.map((o, i) => (
                      <li key={i}>
                        {" "}
                        {o.date}: KES {o.amount} + Penalty KES {o.penalty}{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                </div>
              )}
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                  <label className="form-label">Unique ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="uniqueId"
                    value={form.uniqueId}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Vehicle Registration</label>
                  <input
                    type="text"
                    className="form-control"
                    name="vehicleReg"
                    value={form.vehicleReg}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Amount (KES)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={1000}
                    onChange={handleFormChange}
                    required
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Payment Method</label>
                  <select
                    className="form-select"
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleFormChange}
                  >
                    <option value="mpesa">M-Pesa</option>
                    <option value="visa">Visa Card</option>
                    <option value="paypal">PayPal</option>
                    <option
                      value="wallet"
                      disabled={balance < (form.amount || 0)}
                    >
                      {" "}
                      Wallet{" "}
                    </option>
                  </select>
                </div>
                {lastPayment && (
                  <div className="mb-3">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      style={{ background: accent, color: "#fff" }}
                      onClick={handleReuseLast}
                    >
                      {" "}
                      Re-use Last Payment Details{" "}
                    </button>{" "}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: accent, border: "none" }}
                  disabled={loading}
                >
                  {" "}
                  {loading ? "Processing..." : "Pay Now"}{" "}
                </button>
              </form>
              {message && <div className="alert alert-success">{message}</div>}
              <div className="mb-4">
                <h6 className="text-light">Previous Payments</h6>
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Method</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previousPayments.map((p, i) => (
                      <tr key={i}>
                        <td>{p.date}</td>
                        <td>{p.amount}</td>
                        <td>{p.method}</td>
                        <td>{p.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mb-2">
                <h6 className="text-light">Need Help?</h6>
                <form onSubmit={handleContactSubmit}>
                  <div className="mb-2">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      value={contact.email}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <textarea
                      className="form-control"
                      name="query"
                      placeholder="Your Query or Refund Request"
                      value={contact.query}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-light btn-sm"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
