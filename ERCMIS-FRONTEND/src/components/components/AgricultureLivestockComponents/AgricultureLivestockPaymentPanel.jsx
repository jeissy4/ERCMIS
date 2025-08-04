const feeMap = {
  slaughter: 500,
  movement: 300,
  inspection: 700,
};

export default function AgricultureLivestockPaymentPanel({ serviceType }) {
  const feeAmount = feeMap[serviceType] || 0;

  return (
    <section className="bg-gray-50 p-6 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-2">Payment</h3>
      <p className="mb-4">
        Total Fee: <span className="font-bold">KES {feeAmount}</span>
      </p>

      <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">
        Pay with M-Pesa
      </button>
    </section>
  );
}