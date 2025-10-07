"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isUnderConstruction } from "@/lib/under-construction";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", onResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((o) => !o);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-lg border-b border-emerald-400/20 shadow-2xl' 
        : 'bg-black/40 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className={`text-xl font-black ${
                isScrolled ? 'text-white' : 'text-white/90'
              } tracking-wide group-hover:text-emerald-400 transition-colors duration-300`}>
                ÓPTICA <span className="text-emerald-400">GUINART</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {[
              { href: "/about", label: "Sobre Nosaltres" },
              { href: "/brands", label: "Marques" },
              { href: "/contact", label: "Contacte" },
              { href: "/faq", label: "FAQ" },
              { href: "/products", label: "Productes" },
              { href: "/services", label: "Serveis" },
            ].map(({ href, label }) => {
              const underConstruction = isUnderConstruction();
              
              return (
                <div key={href} className="relative group">
                  {underConstruction ? (
                    <span 
                      className={`${
                        isScrolled ? 'text-white/90' : 'text-white/70'
                      } hover:text-emerald-400 font-medium tracking-wide cursor-not-allowed opacity-60 transition-all duration-300`}
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Esta sección estará disponible muy pronto. ¡Gracias por tu paciencia!');
                      }}
                    >
                      {label}
                    </span>
                  ) : (
                    <Link 
                      href={href} 
                      className={`${
                        isScrolled ? 'text-white' : 'text-black/80'
                      } hover:text-emerald-400 font-medium tracking-wide transition-all duration-300 relative`}
                    >
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-xl border border-emerald-400/30 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
            >
              <div className="flex flex-col space-y-1.5">
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="bg-black/95 backdrop-blur-xl border-t border-emerald-400/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-4">
                {[
                  { href: "/about", label: "Sobre Nosaltres" },
                  { href: "/brands", label: "Marques" },
                  { href: "/contact", label: "Contacte" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/products", label: "Productes" },
                  { href: "/services", label: "Serveis" },
                ].map(({ href, label }) => {
                  const underConstruction = isUnderConstruction();
                  
                  return (
                    <div key={href} className="group">
                      {underConstruction ? (
                        <span 
                          className={`block w-full text-left py-3 px-4 ${
                            isScrolled ? 'text-white/80' : 'text-white/70'
                          } font-medium tracking-wide cursor-not-allowed opacity-60 bg-white/5 rounded-lg`}
                          onClick={(e) => {
                            e.preventDefault();
                            alert('Esta sección estará disponible muy pronto. ¡Gracias por tu paciencia!');
                          }}
                        >
                          {label}
                        </span>
                      ) : (
                        <Link 
                          href={href} 
                          onClick={() => setIsMenuOpen(false)}
                          className={`block w-full text-left py-3 px-4 ${
                            isScrolled ? 'text-white' : 'text-white/90'
                          } hover:text-emerald-400 font-medium tracking-wide bg-white/5 hover:bg-emerald-500/10 rounded-lg transition-all duration-300 border border-transparent hover:border-emerald-400/30`}
                        >
                          {label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
