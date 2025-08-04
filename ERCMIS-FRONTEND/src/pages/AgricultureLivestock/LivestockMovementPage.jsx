// pages/AgricultureLivestock/LivestockMovementPage.jsx
import AgricultureLivestockServiceForm from '../../components/AgricultureLivestockComponents/AgricultureLivestockServiceForm';
import AgricultureLivestockPaymentPanel from '../../components/AgricultureLivestockComponents/AgricultureLivestockPaymentPanel';

export default function LivestockMovementPage() {
  return (
    <>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Livestock Movement Permit</h1>
        <AgricultureLivestockServiceForm serviceType="movement" />
        <AgricultureLivestockPaymentPanel serviceType="movement" />
      </main>
      
    </>
  );
}