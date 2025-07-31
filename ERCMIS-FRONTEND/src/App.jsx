import { Routes, Route, BrowserRouter } from "react-router-dom";
import SlaughterhousePage from "./pages/AgricultureLivestock/SlaughterhousePage";
import CropInspectionCertPage from "./pages/AgricultureLivestock/CropInspectionCertPage";
import LivestockMovementPage from "./pages/AgricultureLivestock/LivestockMovementPage";
//import AgricultureLivestockNavbar from './components/AgricultureLivestockComponents/AgricultureLivestockNavbar';
import Navbar from "./components/AgricultureLivestockComponents/AgricultureLivestockNavbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
//
import LoadingZonePermitPage from "./pages/TransportInfrastructure/LoadingZonePermitPage";
import ParkingFeePage from "./pages/TransportInfrastructure/ParkingFeePage";
import PSVLicenseFeePage from "./pages/TransportInfrastructure/PSVLicenseFeePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/slaughterhouse" element={<SlaughterhousePage />} />
        <Route path="/crop-inspection" element={<CropInspectionCertPage />} />
        <Route path="/livestock-movement" element={<LivestockMovementPage />} />
        <Route path="/loadingzonepermit" element={<LoadingZonePermitPage />} />
        <Route path="/parkingFee" element={<ParkingFeePage />} />
        <Route path="/psvicensefee" element={<PSVLicenseFeePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
