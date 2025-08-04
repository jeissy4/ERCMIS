import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SlaughterhousePage from "./pages/AgricultureLivestock/SlaughterhousePage";
import CropInspectionCertPage from "./pages/AgricultureLivestock/CropInspectionCertPage";
import LivestockMovementPage from "./pages/AgricultureLivestock/LivestockMovementPage";
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
// 
import Footer from './components/components/Footer';
// 
import BuildingPlanApproval from "./pages/PropertyLand/BuildingPlanApprovalPage.jsx"
import ChangeOfUseApplicationPage from "./pages/PropertyLand/Change-Of-UseApplicationPage.jsx";
import LandRates from './pages/PropertyLand/LandRatesPage.jsx';
import PlotRent from './pages/PropertyLand/PlotRentPage.jsx';
// 
import CemeteryFees from './pages/EnvironmentHealth/CemeteryFees.jsx';
import PublicHealth from './pages/EnvironmentHealth/PublicHealth.jsx';
import GarbageFees from './pages/EnvironmentHealth/GarbageFees.jsx';
import SanitationPermit from './pages/EnvironmentHealth/SanitationPermit.jsx';
// import WasteDisposalPermits from './pages/EnvironmentHealth/WasteDisposalPermits.jsx';
import IndustrialWastePermit from './pages/EnvironmentHealth/IndustrialWastePermit';
import RoadTolls from './pages/TransportInfrastructure/RoadTolls';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Carroussel /><FinanceServices /></>} />   {/* LandingPage */}
        
        <Route path="/slaughterhouse" element={<SlaughterhousePage />} />   {/* AgricultureLivestock */}
        <Route path="/cropinspection" element={<CropInspectionCertPage />} />   {/* AgricultureLivestock */}
        <Route path="/livestockmovement" element={<LivestockMovementPage />} />   {/* AgricultureLivestock */}

        <Route path="/loadingzonepermit" element={<LoadingZonePermitPage />} />   {/* TransportInfrastructure */}
        <Route path="/parkingfee" element={<ParkingFeePage />} />   {/* TransportInfrastructure */}
        <Route path="/psvicensefee" element={<PSVLicenseFeePage />} />   {/* TransportInfrastructure */}
        <Route path="/roadtolls" element={<RoadTolls />} />   {/* TransportInfrastructure */}

        <Route path="/librarymembership" element={<LibraryMembershipForm />} />   {/* EducationCommunity */}
        <Route path="/ecdcenter" element={<ECDCenterFeesForm />} />   {/* EducationCommunity */}
        <Route path="/vocationaltraining" element={<VocationalTrainingForm />} />   {/* EducationCommunity */}

        <Route path="/advertisementpermit" element={<AdvertisementPermitForm />} />   {/* BusinessTrade */}
        <Route path="/liquorlicensing" element={<LiquorLicensingForm/>} />   {/* BusinessTrade */}
        <Route path="/marketstallfees" element={<MarketStallFeesForm />} />   {/* BusinessTrade */}
        <Route path="/singlebusinesspermit" element={<SingleBusinessPermitForm />}/>   {/* BusinessTrade */}

        <Route path="/ambulanceservicefee" element={<AmbulanceServiceFeePage />} />   {/* SocialServices */}
        <Route path="/hospitalfee" element={<HospitalFeePage />} />   {/* SocialServices */}
        <Route path="/maternityfee" element={<MaternityFeePage />} />   {/* SocialServices */}

        <Route path="/buildingplanapproval" element={<BuildingPlanApproval />} />
        <Route path="/changeofuseapplication" element={<ChangeOfUseApplicationPage />} />
        <Route path="/landrates" element={<LandRates />} />
        <Route path="/plotrent" element={<PlotRent />} />

        <Route path="/cemeteryfees" element={<CemeteryFees />} />   {/* EnvironmentHealth */}
        <Route path="/publichealth" element={<PublicHealth />} />   {/* EnvironmentHealth */}
        <Route path="/garbagefees" element={<GarbageFees/>} />   {/* EnvironmentHealth */}
        <Route path="/sanitationpermit" element={<SanitationPermit />} />   {/* EnvironmentHealth */}
        <Route path="/industrialwastepermit" element={<IndustrialWastePermit />} />   {/* EnvironmentHealth */}

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
