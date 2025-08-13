import React from "react";

const Banner_two: React.FC = () => {
  return (
    <div
      aria-label="40% descompte en audiófons recargables - Veure oferta"
      className="max-w-md"
    >
      <div
        className="overflow-hidden rounded-2xl shadow-2xl
          bg-gradient-to-br from-teal-500/95 to-sky-700/95 p-4"
      >
        {/* Decorative blobs */}
        <svg
          aria-hidden
          className="w-72 opacity-20 absolute right-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M44.1,-69.4C57.3,-62.1,69.6,-52.6,77.4,-40.8C85.3,-29,88.7,-14.5,88.1,-0.2C87.5,14.1,82.9,28.2,75.6,39.3C68.3,50.4,58.3,58.6,46.2,64.4C34.1,70.2,20,73.6,6.1,68.9C-7.9,64.2,-15.8,51.4,-27,43.4C-38.2,35.4,-52.7,32.1,-62,24.4C-71.3,16.7,-75.3,4.6,-74.8,-7.2C-74.2,-19.1,-69.1,-30.6,-60.1,-40.3C-51.1,-50.1,-38.3,-58,-24.4,-64.4C-10.5,-70.8,4.6,-75.8,18.6,-74.9C32.6,-73.9,44.9,-67.7,44.1,-69.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="relative z-10 flex items-center gap-4 p-6 md:p-8">
          {/* Left: Big percent badge */}
          <div className="flex-shrink-0">
            <div
              className="
                w-32 h-32 md:w-36 md:h-36 rounded-full
                bg-white/10 backdrop-blur-sm border border-white/20
                flex items-center justify-center
                shadow-lg
              "
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold leading-none text-white">
                  40<span className="text-lg font-semibold">%</span>
                </div>
                <div className="mt-1 text-xs md:text-sm uppercase text-white/90 tracking-wider">
                  descompte
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Text content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Audiófons recargables
            </h3>
            <p className="mt-1 text-sm md:text-base text-white/90 leading-snug">
              Millora la teva audició amb la última tecnologia recarregable.
              Comoditat, autonomia i so cristal·lí.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_two;
