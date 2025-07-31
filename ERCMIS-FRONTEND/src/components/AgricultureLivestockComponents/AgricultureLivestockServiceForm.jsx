import { useState } from 'react';

const serviceLabels = {
  slaughter: 'Animal Type',
  movement: 'Destination & Origin',
  inspection: 'Crop Type',
};

export default function AgricultureLivestockServiceForm({ serviceType }) {
  const [idNumber, setIdNumber] = useState('');
  const [serviceInput, setServiceInput] = useState('');

  const label = serviceLabels[serviceType] || 'Details';

  return (
    <form className="bg-white shadow-md rounded px-6 pt-4 pb-6 mb-6">
      <div className="mb-4">
        <label className="block font-medium mb-2">ID Number</label>
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter your ID"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">{label}</label>
        <input
          type="text"
          value={serviceInput}
          onChange={(e) => setServiceInput(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      </div>
    </form>
  );
}