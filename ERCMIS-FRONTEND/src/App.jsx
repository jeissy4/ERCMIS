import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SlaughterhousePage from './pages/AgricultureLivestock/SlaughterhousePage';
import CropInspectionCertPage from './pages/AgricultureLivestock/CropInspectionCertPage';
import LivestockMovementPage from './pages/AgricultureLivestock/LivestockMovementPage';
//import AgricultureLivestockNavbar from './components/AgricultureLivestockComponents/AgricultureLivestockNavbar';
import Navbar from './components/AgricultureLivestockComponents/AgricultureLivestockNavbar';
import Header from './components/Header';
import Footer from './components/Footer'; 
function App() {

  return (
    <BrowserRouter>
    <Header />
    <Navbar />

     <Routes>
      <Route path="/slaughterhouse" element={<SlaughterhousePage />} />
      <Route path="/crop-inspection" element={<CropInspectionCertPage />} />
      <Route path="/livestock-movement" element={<LivestockMovementPage />} />
     </Routes>
    <Footer />
    </BrowserRouter>

    
    
  )
}

export default App
