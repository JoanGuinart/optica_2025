"use client";

import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { useEffect, useState } from "react";
import { isUnderConstruction } from "@/lib/under-construction";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest(`.${styles.nav}`) && !t.closest(`.${styles.hamburger}`)) {
        setIsMenuOpen(false);
      }
    };
    if (window.innerWidth < 1024 && isMenuOpen) {
      document.addEventListener("click", onClickOutside);
    }
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((o) => !o);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Optica Guinart</Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
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
                <li key={href}>
                  {underConstruction ? (
                    <span 
                      className={styles.disabledLink}
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Esta sección estará disponible muy pronto. ¡Gracias por tu paciencia!');
                      }}
                    >
                      {label}
                    </span>
                  ) : (
                    <Link href={href} onClick={() => setIsMenuOpen(false)}>
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.hamburger}>
          <label>
            <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
