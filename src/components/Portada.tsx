import React from 'react';
import Image from 'next/image';

const Portada = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        {/* Puedes reemplazar esta URL por una imagen local en /public */}
        <Image
          src="/portada/portada.png"
          alt="Óptica Guinart - Gafas y lentes de calidad"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay más fuerte para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/60"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex min-h-screen items-center justify-center py-8 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-center text-white">
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-3 sm:mb-6 font-sans">
              <span className="block text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]">ÓPTICA</span>
              <span className="block text-emerald-400 drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)] font-black tracking-tighter">GUINART</span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-white max-w-3xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] tracking-wide">
            TU VISIÓN ES NUESTRA <span className="text-emerald-400">PASIÓN</span>
          </p>
          
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium mb-8 sm:mb-12 lg:mb-16 text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Más de 25 años cuidando tu salud visual con la mejor tecnología
          </p>

          {/* Beneficios clave */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12 lg:mb-16 text-white">
            <div className="flex flex-col items-center p-3 sm:p-6 bg-black/40 rounded-lg sm:rounded-xl backdrop-blur-md border border-emerald-400/20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 flex items-center justify-center bg-emerald-500 rounded-lg sm:rounded-xl shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm sm:text-lg font-bold tracking-wide text-center">CALIDAD GARANTIZADA</p>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-6 bg-black/40 rounded-lg sm:rounded-xl backdrop-blur-md border border-emerald-400/20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 flex items-center justify-center bg-emerald-500 rounded-lg sm:rounded-xl shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm sm:text-lg font-bold tracking-wide text-center">SERVICIO RÁPIDO</p>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-6 bg-black/40 rounded-lg sm:rounded-xl backdrop-blur-md border border-emerald-400/20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 flex items-center justify-center bg-emerald-500 rounded-lg sm:rounded-xl shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm sm:text-lg font-bold tracking-wide text-center">ATENCIÓN PERSONALIZADA</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16">
            <button className="cursor-pointer border-2 sm:border-3 border-emerald-400 hover:border-emerald-300 text-white hover:bg-emerald-600/20 px-8 sm:px-12 py-3 sm:py-5 rounded-lg font-bold text-lg sm:text-xl tracking-wide transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              RESERVAR CITA
            </button>
            <button className="cursor-pointer border-2 sm:border-3 border-emerald-400 hover:border-emerald-300 text-white hover:bg-emerald-600/20 px-8 sm:px-12 py-3 sm:py-5 rounded-lg font-bold text-lg sm:text-xl tracking-wide transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              VER PRODUCTOS
            </button>
          </div>

          {/* Información de contacto rápido */}
          <div className="text-white/80 text-sm sm:text-lg">
            <p className="mb-2 sm:mb-3 font-semibold">📍 Encuentra tu óptica más cercana</p>
            <p className="font-medium text-xs sm:text-base">📞 Llámanos: 123 456 789 | ✉️ info@opticaguinart.com</p>
          </div>
        </div>
      </div>

      {/* Indicador de scroll hacia abajo - solo en desktop */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Portada;