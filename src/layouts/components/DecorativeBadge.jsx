import React from 'react'

const DecorativeBadge = () => {
  return (
    <div className="w-full h-80 rounded-2xl flex items-center justify-center px-4">
      <div className="relative w-full max-w-md h-64 bg-blue-900 rounded-2xl flex items-center justify-center shadow-inner">
        {/* Animated circuit rings */}
        <div className="absolute w-48 h-48 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-blue-400/10 blur-sm"></div>
          <div
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: "0 10px 40px rgba(59,130,246,0.15)" }}
          />
        </div>

        {/* Glowing chip circle */}
        <div className="relative w-48 h-48 rounded-full bg-blue-950 flex items-center justify-center shadow-2xl">
          {/* glowing ring */}
          <span 
            className="absolute w-56 h-56 rounded-full opacity-30" 
            style={{ 
              background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.25), transparent 25%), radial-gradient(circle at 70% 70%, rgba(37,99,235,0.18), transparent 30%)", 
              filter: "blur(18px)" 
            }} 
          />

          {/* central chip SVG */}
          <svg
            className="w-28 h-28 text-blue-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* stylized microchip */}
            <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="1.5" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 10h2M19 10h2M3 14h2M19 14h2M10 3v2M14 3v2M10 19v2M14 19v2" />
            <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" fill="currentColor" opacity="0.1" />
          </svg>

          {/* small circuit lines that rotate slowly */}
          <span className="absolute w-40 h-40 rounded-full pointer-events-none" style={{ animation: "spin-slow 8s linear infinite" }}>
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <path d="M50 6 L50 18" stroke="rgba(147,197,253,0.1)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M82 50 L70 50" stroke="rgba(147,197,253,0.1)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M50 94 L50 82" stroke="rgba(147,197,253,0.1)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 50 L30 50" stroke="rgba(147,197,253,0.1)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        {/* small decorative chips (tech feel) */}
        <div className="absolute top-6 right-8 w-10 h-6 rounded-md bg-blue-700/30 flex items-center justify-center text-xs text-blue-300"></div>
        <div className="absolute top-10 left-8 w-12 h-6 rounded-md bg-blue-700/20 flex items-center justify-center text-xs text-blue-300"></div>

        {/* Custom keyframes for spin (scoped to this component) */}
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default DecorativeBadge