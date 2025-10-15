import React from "react";

const MainContent = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen pt-20 sm:pt-24 lg:pt-28">
      {/* Sección de Ofertas Especiales */}
      <div className="py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
              OFERTAS <span className="text-emerald-400">ESPECIALES</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Descubre nuestras promociones exclusivas y cuida tu visión con los
              mejores precios
            </p>
          </div>

          {/* Grid de Ofertas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
            {/* Oferta 1 - Gafas de Sol */}
            <div className="relative group h-full">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-400/30 overflow-hidden hover:bg-slate-700/80 h-full flex flex-col">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -30%
                </div>
                <div className="w-20 h-20 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    Gafas de Sol
                  </h3>
                  <p className="text-slate-300 text-center mb-4 leading-relaxed flex-grow">
                    Protección UV total con las mejores marcas. Estilo y calidad
                    garantizada.
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-black text-emerald-400">
                      desde 49€
                    </span>
                    <span className="text-lg text-slate-500 line-through ml-2">
                      70€
                    </span>
                  </div>
                  <button className="w-full mt-auto bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-lg font-bold transition-colors duration-300 shadow-lg">
                    VER OFERTA
                  </button>
                </div>
              </div>
            </div>

            {/* Oferta 2 - Graduadas */}
            <div className="relative group h-full">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-400/30 overflow-hidden hover:bg-slate-700/80 h-full flex flex-col">
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  2x1
                </div>
                <div className="w-20 h-20 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    Gafas Graduadas
                  </h3>
                  <p className="text-slate-300 text-center mb-4 leading-relaxed flex-grow">
                    Llévate 2 pares por el precio de 1. Monta y cristales
                    incluidos.
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-black text-emerald-400">
                      desde 89€
                    </span>
                    <span className="text-lg text-slate-500 line-through ml-2">
                      178€
                    </span>
                  </div>
                  <button className="w-full mt-auto bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-lg font-bold transition-colors duration-300 shadow-lg">
                    VER OFERTA
                  </button>
                </div>
              </div>
            </div>

            {/* Oferta 3 - Lentillas */}
            <div className="relative group h-full">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-400/30 overflow-hidden hover:bg-slate-700/80 h-full flex flex-col">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  NUEVO
                </div>
                <div className="w-20 h-20 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    Lentillas
                  </h3>
                  <p className="text-slate-300 text-center mb-4 leading-relaxed flex-grow">
                    Comodidad absoluta con las lentillas más avanzadas del
                    mercado.
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-black text-emerald-400">
                      desde 25€
                    </span>
                    <span className="text-sm text-slate-400 block">
                      pack mensual
                    </span>
                  </div>
                  <button className="w-full mt-auto bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-lg font-bold transition-colors duration-300 shadow-lg">
                    VER OFERTA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Productos Destacados */}
      <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800 text-white border-t border-emerald-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight drop-shadow-lg">
              PRODUCTOS <span className="text-emerald-400">DESTACADOS</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Selección de las mejores marcas y los modelos más populares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Producto 1 */}
            <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-emerald-400/20">
              <div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-400 text-sm">
                  Imagen del producto
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">Ray-Ban Aviator</h4>
              <p className="text-slate-300 text-sm mb-4">
                Clásicas gafas de sol con estilo atemporal
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-2xl font-black text-emerald-400">
                  159€
                </span>
                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                  VER
                </button>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-emerald-400/20">
              <div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-400 text-sm">
                  Imagen del producto
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">Oakley Sport</h4>
              <p className="text-slate-300 text-sm mb-4">
                Rendimiento y protección para deportistas
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-2xl font-black text-emerald-400">
                  189€
                </span>
                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                  VER
                </button>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-emerald-400/20">
              <div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-400 text-sm">
                  Imagen del producto
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">Persol Vintage</h4>
              <p className="text-slate-300 text-sm mb-4">
                Elegancia italiana en cada detalle
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-2xl font-black text-emerald-400">
                  225€
                </span>
                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                  VER
                </button>
              </div>
            </div>

            {/* Producto 4 */}
            <div className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-emerald-400/20">
              <div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-400 text-sm">
                  Imagen del producto
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">Guess Modern</h4>
              <p className="text-slate-300 text-sm mb-4">
                Tendencia y glamour para el día a día
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-2xl font-black text-emerald-400">
                  129€
                </span>
                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                  VER
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-emerald-400/30">
            <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight drop-shadow-lg">
              ¿NECESITAS ASESORAMIENTO?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Nuestros expertos te ayudarán a encontrar la solución perfecta
              para tu visión
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl border border-gray-200">
                PEDIR CITA GRATUITA
              </button>
              <button className="bg-slate-900 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 transition-colors duration-300 shadow-xl">
                LLAMAR AHORA
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
