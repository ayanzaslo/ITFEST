import Link from 'next/link';
import apartments from './apartamente';
import { useState } from 'react';

export default function Services() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [altdropdownOpen, setAltdropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null); // Variabila pentru oraș selectat
    const [selectedPrice, setSelectedPrice] = useState(null); // Variabila pentru prețul selectat

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        if (!dropdownOpen) {
            setAltdropdownOpen(false);
        }
    };

    const toggleAltdropdown = () => {
        setAltdropdownOpen(!altdropdownOpen);
        if (!altdropdownOpen) {
            setDropdownOpen(false);
        }
    };

    // Obținem doar orașele unice
    const cities = [...new Set(apartments.map(apartment => apartment.locatie))];

    // Obținem lista de prețuri
    const pret = [...new Set(apartments.map(apartment => apartment.pret))];

    // Filtrare apartamente pe baza orașului și prețului
    const filterApartments = apartments.filter(apartment => {
        const matchCity = selectedCity ? apartment.locatie === selectedCity : true;
        const matchPrice = selectedPrice ? apartment.pret === selectedPrice : true;
        return matchCity && matchPrice;
    });

    return (
        <>
            <nav className='flex justify-center items-center bg-red-700 gap-x-[10%]'>
                {/* Dropdown pentru Oras */}
                <div className="relative">
                    <button className="p-2 rounded text-[#948979] cursor-pointer" onClick={toggleDropdown}>Oras</button>
                    {dropdownOpen && (
                        <div className="absolute mt-1 w-35 bg-blue-500 rounded-md shadow-lg z-10">
                            <ul className="py-1">
                                {cities.map((city, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 text-gray-700 cursor-pointer"
                                        onClick={() => setSelectedCity(city)} // Setează orașul selectat
                                    >
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Dropdown pentru Pret */}
                <div className="relative">
                    <button className="p-2 rounded text-[#948979] cursor-pointer" onClick={toggleAltdropdown}>Pret</button>
                    {altdropdownOpen && (
                        <div className="absolute mt-1 w-35 bg-amber-950 rounded-md shadow-lg z-10">
                            <ul className="py-1">
                                {pret.map((price, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 text-gray-700 cursor-pointer"
                                        onClick={() => setSelectedPrice(price)} // Setează prețul selectat
                                    >
                                        {price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Buton pentru Dimensiune */}
                <button className="p-2 rounded text-[#948979] cursor-pointer">Dimensiune</button>
            </nav>


{/* Afișare apartamente filtrate */}
<div className="flex flex-wrap +
h-full items-center justify-center gap-x-16 mt-10">
    {filterApartments.map((apartment) => (
        <div key={apartment.id} className="flex flex-col cursor-pointer bg-gray-100 p-4 m-4 rounded-lg shadow-lg w-80">
            <img src={apartment.img} className='h-64 w-80 mb-2' />

            {/* Folosim flex pentru a pune SVG-ul și textul pe același rând */}
            <p className="text-l font-light mt-4 flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg> Localizare: {apartment.locatie}
            </p>

            <p className="text-l font-mono flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
</svg>

                Suprafata: {apartment.metripatrati}
            </p>

            <p className="text-l font-mono flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>Nr. Camere: {apartment.nrcamere}  </p>

            <p className="text-l font-mono flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg> Etaj: {apartment.etaj}
               
            </p>
        </div>
    ))}
</div>

        </>
    );
}
