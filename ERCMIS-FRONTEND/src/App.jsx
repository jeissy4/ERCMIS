//import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AmbulanceServiceFeePage from "./pages/SocialServices/AmbulanceServiceFeePage";
import HospitalFeePage from "./pages/SocialServices/HospitalFeePage";
import MaternityFeePage from "./pages/SocialServices/MaternityAndOutpatientFeePage";
function App() {

  return (
  
    <BrowserRouter>
 <Routes>
      <Route path="/ambulance-service-fee" element={<AmbulanceServiceFeePage />} />
      <Route path="/hospital-fee" element={<HospitalFeePage />} />
      <Route path="/maternity-fee" element={<MaternityFeePage />} />
 </Routes>
    </BrowserRouter>
  )
}

export default App
