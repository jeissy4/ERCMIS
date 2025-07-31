// pages/AgricultureLivestock/CropInspectionCertPage.jsx

import AgricultureLivestockServiceForm from '../../components/AgricultureLivestockComponents/AgricultureLivestockServiceForm';
import AgricultureLivestockPaymentPanel from '../../components/AgricultureLivestockComponents/AgricultureLivestockPaymentPanel';

export default function CropInspectionCertPage() {
  return (
    <>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Crop Inspection Certification</h1>
        <AgricultureLivestockServiceForm serviceType="inspection" />
        <AgricultureLivestockPaymentPanel serviceType="inspection" />
      </main>
      
    </>
  );
}