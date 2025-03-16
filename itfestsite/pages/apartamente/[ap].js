import { useRouter } from 'next/router';
import apartments from './detalii'; // Asigură-te că calea este corectă

export default function Detalii() {
    const router = useRouter();
    const { ap } = router.query;  // Extrage 'ap' din URL

    const apartment = apartments.find((apartment) => apartment.id == ap);  // Căutăm apartamentul cu ID-ul din URL

    // Verificăm dacă apartamentul există
   

    return (
        <>
        <div className='lg:flex lg:flex-row justify-center  gap-x-28 mt-10'>
        <div className='p-4 lg:w-[42%] w-full'>
           {apartment.iframe}
        </div>

        <div className='flex flex-col p-5 '>
            <div className='flex flex-row gap-x-5'> 
            <button className='bg-red-700 p-2 rounded text-white cursor-pointer'>Exclusive</button>
            <button className='bg-red-700 p-2 rounded text-white cursor-pointer'>Commission</button>
            <button className='bg-red-700 p-2 rounded text-white cursor-pointer'>Luxury</button>
            </div>
            <div className='border-t border-b border-gray-300 p-4 mt-6'>
                <p className='mb-2 text-xl'>Pret de vanzare:</p>
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
<div className='flex flex-row gap-x-5'>
  <img className='w-[25%]' src={apartment.selfie} alt="selfie" />
  <div className="flex flex-col justify-center">
    <p className='text-2xl'>{apartment.nume}</p>
    <button className='rounded-full w-44 text-xl p-2 bg-red-500 mt-9'>Contact me</button>
  </div>
</div>


        </div>
        </div>

      
    </>);
}
