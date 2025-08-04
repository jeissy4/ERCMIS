import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Uasin Gishu County</h1>

        {/* Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Nav Links */}
        <div className={`flex-col md:flex md:flex-row md:space-x-6 ${isOpen ? 'flex' : 'hidden'} md:items-center`}>
          <Link to="/slaughterhouse" className="block py-2 md:py-0 hover:text-yellow-300">Slaughterhouse</Link>
          <Link to="/crop-inspection" className="block py-2 md:py-0 hover:text-yellow-300">Crop Inspection</Link>
          <Link to="/livestock-movement" className="block py-2 md:py-0 hover:text-yellow-300">Livestock Movement</Link>
        </div>
      </div>
    </nav>
  );
}