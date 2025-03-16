import Link from 'next/link';
import { usePathname } from "next/navigation";
import Services from './services';

export default function Navbar() {  

    return (
        <>
          <div className="flex bg-[#DFD0B8] p-4 lg:w-full w-full">
            <h2 className="text-2xl text-[#948979] font-serif lg:mr-[39%] mr-[30%] ">Imova</h2>
    
            {/* Navigation links */}
            <nav className="hidden lg:gap-x-9 lg:flex lg:justify-center lg:items-center">
            <Link href="/" className="font-mono text-[#948979] hover:text-[#795458] text-l">Home</Link>
            <Link href="/about" className="font-mono text-[#948979] hover:text-[#795458] text-l">About</Link>
            <Link href="/services" className="font-mono text-[#948979] hover:text-[#795458] text-l">Services</Link>
              <Link href="/contact" className="font-mono text-[#948979] hover:text-[#795458] text-l">Contact</Link>
            </nav>
            <button className="hidden lg:block p-1 rounded text-[#948979] ml-auto cursor-pointer">Log in</button>
    
            {/* Mobile menu button */}
            <div className="lg:hidden ml-[45%]">
              <button className="text-black " onClick={() => toggleMenu()}>☰</button>
            </div>
          </div>
    
          {/* Mobile menu */}
          <div id="mobile-menu" className="hidden lg:hidden bg-black p-6 "> 
          <Link href="/" className="block font-mono text-white hover:text-gray-300  text-xl mb-2 " onClick={() => toggleMenu()}>Home</Link> 
          <Link href="/about" className="block font-mono text-white hover:text-gray-300  text-xl mb-2 " onClick={() => toggleMenu()}>About</Link> 
            <Link href="/services" className="block font-mono text-white hover:text-gray-300 text-xl mb-2" onClick={() => toggleMenu()}>Services</Link>
            <Link href="/contact" className="block font-mono text-white hover:text-gray-300 text-xl mb-2" onClick={() => toggleMenu()}>Contact</Link> 
          </div>
        </>
      );
    
      function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
          menu.classList.toggle('hidden');
        }
      }
}