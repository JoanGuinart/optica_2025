import React from "react";

type Props = {
  className?: string;
};

const Banner_three: React.FC<Props> = ({ className = "" }) => {
  return (
    <div
      aria-label="15% descompte en montures de marca - Veure col·lecció"
      className={`block max-w-md mx-auto relative ${className}`}
    >
      <div
        className="
          relative overflow-hidden rounded-2xl shadow-xl
          bg-gradient-to-r from-stone-900 via-stone-800 to-amber-600
          h-72 md:h-80
        "
      >
        {/* decorative shape (dorado suave) */}
        <svg
          aria-hidden
          className="absolute -top-12 -left-10 w-56 opacity-12 pointer-events-none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0" x2="1">
              <stop offset="0" stopColor="#fff7ed" stopOpacity="0.06" />
              <stop offset="1" stopColor="#92400e" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            fill="url(#goldGrad)"
            d="M43.6,-66.1C57.4,-58.6,71.5,-50.3,76.2,-38.2C80.9,-26.2,76.3,-10.4,73.2,6.6C70.1,23.6,68.6,41.9,59.6,54.7C50.6,67.5,34.1,74.8,17.2,78.7C0.4,82.6,-16.7,83.1,-30.9,77.7C-45.1,72.4,-56.5,61.3,-64.1,48.9C-71.8,36.4,-75.6,22.6,-77.2,8.1C-78.8,-6.4,-78.2,-21.6,-70.3,-33.7C-62.4,-45.8,-47.3,-54.9,-32.1,-62C-16.9,-69.1,-0.7,-74.1,12.7,-73.5C26.1,-72.9,39.8,-66.5,43.6,-66.1Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* inner content (absolute centered) - SOLO TEXTO */}
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
          <div
            className="
              w-full max-w-xs md:max-w-md
              bg-white/6 backdrop-blur-sm border border-white/10
              rounded-xl p-4 md:p-6
              flex items-center gap-4 md:gap-6
            "
            role="region"
            aria-label="Oferta 15% montures de marca"
          >
            {/* left: percent badge (texto grande) */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/8 border border-white/8 flex items-center justify-center shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-50 leading-none">
                  15<span className="text-sm md:text-base font-semibold">%</span>
                </div>
              </div>
              <div className="mt-1 text-[10px] text-amber-100 uppercase tracking-wider text-center">
                descompte
              </div>
            </div>

            {/* middle: solo texto descriptivo */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm md:text-lg font-semibold text-amber-50 leading-tight">
                Montures de marca
              </h3>
              <p className="mt-1 text-[11px] md:text-sm text-amber-100/90 leading-snug">
                Descobreix la selecció de montures de marca: disseny cuidat, materials
                premium i confort per a tot el dia.
              </p>

              <p className="mt-2 text-[10px] md:text-xs text-amber-100/80">
                Oferta limitada · Consulta condicions a la botiga
              </p>
            </div>

            {/* right: accento pequeño (solo decorativo) */}
            <div className="hidden md:flex flex-shrink-0 items-center">
              <svg
                width="44"
                height="44"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                role="img"
              >
                <rect width="64" height="64" rx="10" fill="#fff7ed" opacity="0.04" />
                <path
                  d="M20 24c2-4 6-7 11-7 5 0 9 3 11 7 2 4 2 9 0 13-1.3 2.4-3.6 4.1-6.3 4.7-2.7.6-5.6.1-7.8-1.3-1.8-1.1-3-2.9-3.5-4.9-.6-2.4-.2-5 .6-7.5z"
                  fill="#fff7ed"
                  opacity="0.9"
                />
                <circle cx="44" cy="44" r="2" fill="#fff7ed" opacity="0.85" />
              </svg>
            </div>
          </div>
        </div>

        {/* bottom stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-white/6" />
      </div>
    </div>
  );
};

export default Banner_three;
