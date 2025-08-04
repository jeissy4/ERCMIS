// pages/AgricultureLivestock/SlaughterhousePage.jsx
import AgricultureLivestockServiceForm from '../../components/AgricultureLivestockComponents/AgricultureLivestockServiceForm';
import AgricultureLivestockPaymentPanel from '../../components/AgricultureLivestockComponents/AgricultureLivestockPaymentPanel';

export default function SlaughterhousePage() {
  return (
    <>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Slaughterhouse Payment</h1>
        <AgricultureLivestockServiceForm serviceType="slaughter" />
        <AgricultureLivestockPaymentPanel serviceType="slaughter" />
      </main>
      
    </>
  );
}