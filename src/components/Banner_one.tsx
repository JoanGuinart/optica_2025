import React from "react";

const BannerOneTailwind: React.FC = () => {
  return (
    <div
      role="img"
      aria-label="40% descompte - Ray-Ban graduada progressiva"
      className="w-[300px] h-[600px] mx-auto rounded-2xl overflow-hidden relative shadow-[0_12px_30px_rgba(2,6,23,0.6)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975915394-56a5d0a5f8b6?auto=format&fit=crop&w=1200&q=80')",
        }}
        aria-hidden
      />

      {/* Strong dark overlay (forest tone) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,61,46,0.72) 0%, rgba(11,61,46,0.78) 60%, rgba(2,6,23,0.75) 100%)",
        }}
        aria-hidden
      />

      {/* Centered content (absolute) */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[230px] bg-[rgba(255,255,255,0.06)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-2xl p-5 flex flex-col items-center gap-4 text-center">
          {/* Percent badge: GOLD background + DARK text for contrast */}
          <div className="flex flex-col items-center">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: "#D4AF37",
                boxShadow: "0 10px 24px rgba(212,175,55,0.18)",
              }}
            >
              <span
                className="text-4xl md:text-5xl font-extrabold leading-none"
                style={{ color: "#1E1309" }}
              >
                40
                <span
                  className="text-xl md:text-2xl font-semibold align-top"
                  style={{ color: "#1E1309" }}
                >
                  %
                </span>
              </span>
            </div>

            <div
              className="mt-2 text-[10px] md:text-xs uppercase tracking-wider"
              style={{ color: "#F6E7C8" }}
            >
              descompte
            </div>
          </div>

          {/* Title */}
          <h3
            className="mt-1 text-sm md:text-base font-semibold leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Ray-Ban graduada progressiva
          </h3>

          {/* Supporting line (small) */}
          <p
            className="mt-1 text-[11px] md:text-sm leading-snug"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Promoció limitada · Consulta condicions a la botiga
          </p>

          {/* Decorative divider */}
          <div
            className="mt-2 w-16 h-[2px] rounded-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
            aria-hidden
          />
        </div>
      </div>

      {/* bottom subtle stripe */}
      <div
        className="absolute bottom-0 left-0 right-0 h-6"
        style={{ background: "rgba(255,255,255,0.06)" }}
        aria-hidden
      />
    </div>
  );
};

export default BannerOneTailwind;
