import Link from 'next/link';
import apartments from './apartamente/detalii';
import { useState } from 'react';

export default function Services() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [altdropdownOpen, setAltdropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        if (!dropdownOpen) setAltdropdownOpen(false);
    };

    const toggleAltdropdown = () => {
        setAltdropdownOpen(!altdropdownOpen);
        if (!altdropdownOpen) setDropdownOpen(false);
    };

    const cities = [...new Set(apartments.map(apartment => apartment.locatie))];
    const pret = [...new Set(apartments.map(apartment => apartment.pret))];

    const filterApartments = apartments.filter(apartment => {
        const matchCity = selectedCity ? apartment.locatie === selectedCity : true;
        const matchPrice = selectedPrice ? apartment.pret === selectedPrice : true;
        return matchCity && matchPrice;
    });


    return (
        <>
          <nav className="flex justify-center items-center bg-blue-950 text-[#ffffff] gap-x-40 py-1">
  <div className="relative  left-6">
    <button className="p-2 rounded text-[#948979] cursor-pointer font-bold" onClick={toggleDropdown}>City</button>
    {dropdownOpen && (
      <div className="absolute left-1/2 -translate-x-1/2 w-40 bg-gray-300 rounded-2xl shadow-lg z-10">
        <ul className="py-1 flex flex-col justify-center items-center" onClick={toggleDropdown}>
          {cities.map((city, index) => (
            <li key={index} id="mobile-menu" className="px-2 py-2 text-gray-700 cursor-pointer" onClick={() => setSelectedCity(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>

  <div className="relative">
    <button className="p-2 rounded text-[#948979] cursor-pointer font-bold" onClick={toggleAltdropdown}>Price</button>
    {altdropdownOpen && (
      <div className="absolute left-1/2 -translate-x-1/2 w-40 bg-gray-300  rounded-2xl  shadow-lg z-10">
        <ul className="py-1 flex flex-col justify-center items-center" onClick={toggleAltdropdown}>
          {pret.map((price, index) => (
            <li key={index} className="px-4 py-2 text-gray-700 cursor-pointer" onClick={() => setSelectedPrice(price)}>
              {price}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</nav>


            <div className="flex flex-wrap h-full items-center justify-center gap-x-16 mt-10">
                {filterApartments.map(apartment => (
                    <Link key={apartment.id} href={`/apartamente/${apartment.id}`} passHref>
                        <div className="flex flex-col cursor-pointer bg-gray-100 p-4 m-4 rounded-lg shadow-lg w-80">
                            <img src={apartment.img} className='h-64 w-80 mb-2' />

                            <p className="text-l font-light mt-4 flex items-center mb-3">
                                📍 Location: {apartment.locatie}
                            </p>
                            <p className="text-l font-mono flex items-center mb-3">
                                📏 Area: {apartment.metripatrati} 
                            </p>
                            <p className="text-l font-mono flex items-center mb-3">
                                🏠 No. rooms: {apartment.nrcamere}
                            </p>
                            <p className="text-l font-mono flex items-center">
                                🏢 Story: {apartment.etaj}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );}
    
