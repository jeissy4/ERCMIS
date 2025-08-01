import { Routes, Route, BrowserRouter } from "react-router-dom";
import SlaughterhousePage from "./pages/AgricultureLivestock/SlaughterhousePage";
import CropInspectionCertPage from "./pages/AgricultureLivestock/CropInspectionCertPage";
import LivestockMovementPage from "./pages/AgricultureLivestock/LivestockMovementPage";
//import AgricultureLivestockNavbar from './components/AgricultureLivestockComponents/AgricultureLivestockNavbar';
// import Navbar from "./components/AgricultureLivestockComponents/AgricultureLivestockNavbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
//
import LoadingZonePermitPage from "./pages/TransportInfrastructure/LoadingZonePermitPage";
import ParkingFeePage from "./pages/TransportInfrastructure/ParkingFeePage";
import PSVLicenseFeePage from "./pages/TransportInfrastructure/PSVLicenseFeePage";
// 
import LibraryMembershipForm from './pages/EducationCommunity/LibraryMembershipFeePage';
import ECDCenterFeesForm from './pages/EducationCommunity/ECDCenterFeesPage';
import VocationalTrainingForm from './pages/EducationCommunity/VocationalTrainingCenterFeesPage';
import AdvertisementPermitForm from './pages/BusinessTrade/AdvertisingPermitPage';
import LiquorLicensingForm from './pages/BusinessTrade/LiquorLicensingPage';
import MarketStallFeesForm from './pages/BusinessTrade/MarketStallFeesPage';
import SingleBusinessPermitForm from './pages/BusinessTrade/SingleBusinessPermitPage';
// 
import AmbulanceServiceFeePage from "./pages/SocialServices/AmbulanceServiceFeePage";
import HospitalFeePage from "./pages/SocialServices/HospitalFeePage";
import MaternityFeePage from "./pages/SocialServices/MaternityAndOutpatientFeePage";
// 
import Navbar from './components/Navbar';
import FinanceServices from './components/FinanceServices';
import Carroussel from './components/carroussel';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Header />
      <Navbar /> */}
      <Routes>
        <Route path="/" element={<><Carroussel /><FinanceServices /></>} />
        <Route path="/slaughterhouse" element={<SlaughterhousePage />} />
        <Route path="/crop-inspection" element={<CropInspectionCertPage />} />
        <Route path="/livestock-movement" element={<LivestockMovementPage />} />
        <Route path="/loadingzonepermit" element={<LoadingZonePermitPage />} />

        <Route path="/parkingfee" element={<ParkingFeePage />} />
        <Route path="/psvicensefee" element={<PSVLicenseFeePage />} />
        <Route path="/library-membership" element={<LibraryMembershipForm />} /> 
        <Route path="/ecd-center" element={<ECDCenterFeesForm />} /> 
        <Route path="/vocational-training" element={<VocationalTrainingForm />} /> 
        <Route path="/advertisment-permit" element={<AdvertisementPermitForm />} />
        <Route path="/advertisement-permit" element={<AdvertisementPermitForm />} />
        <Route path="/liquor-licensing" element={<LiquorLicensingForm/>}/> 
        <Route path="/market-stall-fees" element={<MarketStallFeesForm />} />
        <Route path="/single-business-permit" element={<SingleBusinessPermitForm />}/>

        <Route path="/ambulance-service-fee" element={<AmbulanceServiceFeePage />} />
        <Route path="/hospital-fee" element={<HospitalFeePage />} />
        <Route path="/maternity-fee" element={<MaternityFeePage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
