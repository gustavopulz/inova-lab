import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#2987c5] text-white px-8 md:pl-60 md:pr-60 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
            <a href="/" className="flex items-center gap-4">
                <img src="/assets/logo2.png" alt="Inova Lab Logo" className="h-14" />
            </a>
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <FiMenu className="h-6 w-6" />
            </button>
            <nav
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } md:flex gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-[#2987c5] md:bg-transparent p-4 md:p-0`}
            >
                <a href="#sobre-nos" className="block md:inline hover:underline py-2 md:py-0">Sobre nós</a>
                <a href="#services-section" className="block md:inline hover:underline py-2 md:py-0">Nossos serviços</a>
                <a href="#orcamentos" className="block md:inline hover:underline py-2 md:py-0">Orçamentos</a>
                <a
                    href="#services-section"
                    className="block md:hidden bg-white text-[#2987c5] px-4 w-40 py-2 rounded hover:bg-gray-200 mt-4"
                >
                    Contratar serviço
                </a>
            </nav>
            <a
                href="#services-section"
                className="hidden md:block bg-white text-[#2987c5] px-4 py-2 rounded hover:bg-gray-200"
            >
                Contratar serviço
            </a>
        </header>
    );
}

export default Header;