import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BuildingPlanApproval from "./pages/PropertyLand/BuildingPlanApprovalPage.jsx"
import ChangeOfUseApplicationPage from "./pages/PropertyLand/Change-Of-UseApplicationPage.jsx";
import LandRates from './pages/PropertyLand/LandRatesPage.jsx';
import PlotRent from './pages/PropertyLand/PlotRentPage.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/buildingPlanApproval" element={<BuildingPlanApproval />} />
          <Route path="/changeOfUseApplication" element={<ChangeOfUseApplicationPage />} />
          <Route path="/landRates" element={<LandRates />} />
         <Route path="/plotRent" element={<PlotRent />} />
          </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
