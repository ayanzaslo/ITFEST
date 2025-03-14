import Link from 'next/link';
import { usePathname } from "next/navigation";
export default function Navbar() {  

    return (
        <>
          <div className="flex bg-black p-6 items-center justify-center">
            <h2 className="text-3xl text-red-500 font-serif ">Ighorjivco</h2>
    
            {/* Navigation links */}
            <nav className="hidden lg:flex items-center gap-x-9 ml-[43%]">
            <Link href="/" className="font-mono text-red-500 hover:text-gray-300 text-xl">Home</Link>
            <Link href="/despremine" className="font-mono text-red-500 hover:text-gray-300 text-xl">Despre</Link>
            <Link href="/servicii" className="font-mono text-red-500 hover:text-gray-300 text-xl">Servicii</Link>
              <Link href="/ebook" className="font-mono text-red-500 hover:text-gray-300 text-xl">Ebook</Link>
            </nav>
    
            {/* Mobile menu button */}
            <div className="lg:hidden ml-[45%]">
              <button className="text-white" onClick={() => toggleMenu()}>☰</button>
            </div>
          </div>
    
          {/* Mobile menu */}
          <div id="mobile-menu" className="hidden lg:hidden bg-black p-6 ">
          <Link href="/" className="block font-mono text-white hover:text-gray-300 ml-[6%] text-xl mb-2 ">Home</Link> 
          <Link href="/despremine" className="block font-mono text-white hover:text-gray-300 ml-[6%] text-xl mb-2 ">Despre</Link> 
            <Link href="/muzica" className="block font-mono text-white hover:text-gray-300 ml-[6%] text-xl mb-2">Servicii</Link>
            <Link href="/contact" className="block font-mono text-white hover:text-gray-300 ml-[6%] text-xl mb-2">Ebook</Link> 
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
