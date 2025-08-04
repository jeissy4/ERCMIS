// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FinanceServices from './components/FinanceServices';
import Carroussel from './components/carroussel';
import GarbageFees from './pages/GarbageFees';
import PublicHealth from './pages/PublicHealth';
import SanitationPermit from './pages/SanitationPermit';
import CemeteryFees from './pages/CemeteryFees';
import IndustrialWastePermit from './pages/IndustrialWastePermit';
import RoadTolls from './pages/RoadTolls';

function App() {
  return (
    <>
      {/* <Navbar />
       <Carroussel />
      <FinanceServices />  */}
      {/* <GarbageFees /> 
      <PublicHealth />  */}
      {/* <SanitationPermit />  */}
      {/* <CemeteryFees /> */}
        <IndustrialWastePermit />  
       {/* <RoadTolls />  */}
    
     
      
    </>
  );
}


export default App;
