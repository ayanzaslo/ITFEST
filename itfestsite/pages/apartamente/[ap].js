import { useRouter } from 'next/router';
import apartments from './detalii'; // Asigură-te că calea este corectă
import Link from 'next/link';

export default function Detalii() {
    const router = useRouter();
    const { ap } = router.query;  // Extrage 'ap' din URL

    const apartment = apartments.find((apartment) => apartment.id == ap);  // Căutăm apartamentul cu ID-ul din URL

    // Verificăm dacă apartamentul există
   

    return (
        <>
        <div className='lg:flex lg:flex-row justify-center gap-x-56 mt-10'>
            <div className='flex flex-col'>
        <div className='p-4 lg:w-[110%] lg:full mb-4'>
           {apartment.iframe}
        </div>
        <div >
        <div className="lg:p-6 p-10 lg:w-[114%] w-full">    
  <div className="border-b border-gray-300 py-4 ">
    <h1 className="text-2xl sm:text-3xl text-black font-bold">Property Details</h1>
  </div>

  <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-12 text-black ">
    {/* Prima coloană */}
    <ul className="list-disc space-y-3 pl-5">
      <li className="text-base sm:text-lg flex items-center gap-2 mb-7">
        <span>✅</span> Availability: Immediately
      </li>
      <li className="text-base sm:text-lg flex items-center gap-2 mb-7">
        <span>🏢</span> Verbose floor: Demisol / P+3E
      </li>
      <li className="text-base sm:text-lg flex items-center gap-2 mb-7">
        <span>🏠</span> Apartment type: Apartment
      </li>
      <li className="text-base sm:text-lg flex items-center gap-2 mb-7">
        <span>🔨</span> Stage of construction: Completed
      </li>
    </ul>

    {/* A doua coloană */}
    <ul className="list-disc space-y-3 pl-5">
      <li className="text-base sm:text-lg flex items-center gap-2 mb-7">
        <span>🔥</span> Heating system: Central heating
      </li>
      <li className="text-base sm:text-lg flex items-center gap-2 mb-7">
        <span>🌿</span> Balcony: Yes, 1 balcony
      </li>
      <li className="text-base sm:text-lg flex items-center gap-2 mb-7">
        <span>🏗️</span> Building type: Residential block
      </li>
    </ul>
  </div>
</div>
</div>
        </div>

        <div className='flex flex-col p-5  '>
            <div className='flex lg:flex-row gap-x-5 items-center'> 
            <button className='bg-red-700 p-2 rounded text-white cursor-pointer'>Exclusive</button>
            <button className='bg-red-700 p-2 rounded text-white cursor-pointer'>Commission</button>
            <button className='bg-red-700 p-2 rounded text-white cursor-pointer'>Luxury</button>
            </div>
            <div className='border-t border-b border-gray-300 p-4 mt-6'>
                <p className='mb-2 text-xl'>Selling price:</p>
                <p className='text-4xl'>{apartment.pret}</p>
            </div>
            <div className='mb-4 mt-4'>
    <iframe
        className='w-full h-64 lg:w-[700px] lg:h-[450px]'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89103.94652737837!2d21.134189659252556!3d45.741154740453986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745677dcb0fb5a7%3A0x537faf6473936749!2sTimi%C8%99oara!5e0!3m2!1sro!2sro!4v1742094729754!5m2!1sro!2sro"
        style={{ border: "" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>
<div className='flex flex-row gap-x-5 mb-5 mt-16'>
  <img className='w-[25%]' src={apartment.selfie} alt="selfie" />
  <div className="flex flex-col justify-center">
    <p className='text-3xl text-red-500'>{apartment.nume}</p>
  <Link className='rounded-full w-44 text-xl p-2 bg-red-500 mt-5 hover:scale-105 cursor-pointer text-center' href="https://web.whatsapp.com/">Contact me</Link>
  </div>

  
</div>
        </div>
        
        </div>





      
    </>);
}
