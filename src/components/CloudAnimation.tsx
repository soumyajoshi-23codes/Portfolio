const CloudAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[260px] pointer-events-none z-40 overflow-hidden">
      <style>{`
        @keyframes cloudMove {
          from { transform: translateX(-40%); }
          to   { transform: translateX(120vw); }
        }

        .cloud {
          position: absolute;
          animation: cloudMove linear infinite;
        }

        .cloud-back {
          top: 0px;
          animation-duration: 160s;
          opacity: 0.35;
          filter: blur(10px);
        }

        .cloud-mid {
          top: 0px;
          animation-duration: 120s;
          opacity: 0.35;
          filter: blur(6px);
        }

        .cloud-front {
          top: 0px;
          animation-duration: 80s;
          opacity: 0.45;
          filter: blur(3px);
        }
      `}</style>

      {/* BACK CLOUD */}
      <svg className="cloud cloud-back" width="520" height="220" viewBox="0 0 520 220">
        <defs>
          <radialGradient id="g1" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dde8f3" />
          </radialGradient>
        </defs>

        {/* fluffy circles */}
        <circle cx="80" cy="130" r="55" fill="url(#g1)" />
        <circle cx="140" cy="100" r="70" fill="url(#g1)" />
        <circle cx="220" cy="85" r="75" fill="url(#g1)" />
        <circle cx="300" cy="105" r="70" fill="url(#g1)" />
        <circle cx="370" cy="135" r="60" fill="url(#g1)" />
        <ellipse cx="220" cy="155" rx="190" ry="45" fill="url(#g1)" />
      </svg>

      {/* MID CLOUD */}
      <svg className="cloud cloud-mid" width="520" height="220" viewBox="0 0 520 220">
        <defs>
          <radialGradient id="g2" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d6e5f4" />
          </radialGradient>
        </defs>

        <circle cx="90" cy="125" r="60" fill="url(#g2)" />
        <circle cx="155" cy="95" r="75" fill="url(#g2)" />
        <circle cx="240" cy="80" r="80" fill="url(#g2)" />
        <circle cx="320" cy="100" r="75" fill="url(#g2)" />
        <circle cx="400" cy="130" r="65" fill="url(#g2)" />
        <ellipse cx="245" cy="160" rx="210" ry="50" fill="url(#g2)" />
      </svg>

      {/* FRONT CLOUD */}
      <svg className="cloud cloud-front" width="520" height="220" viewBox="0 0 520 220">
        <defs>
          <radialGradient id="g3" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cfe0f2" />
          </radialGradient>
        </defs>

        <circle cx="95" cy="135" r="65" fill="url(#g3)" />
        <circle cx="170" cy="105" r="85" fill="url(#g3)" />
        <circle cx="260" cy="85" r="90" fill="url(#g3)" />
        <circle cx="350" cy="110" r="85" fill="url(#g3)" />
        <circle cx="430" cy="140" r="70" fill="url(#g3)" />
        <ellipse cx="260" cy="170" rx="230" ry="55" fill="url(#g3)" />
      </svg>

      {/* soft haze fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(240,246,251,0.9), rgba(240,246,251,0.4), rgba(240,246,251,0))",
        }}
      />
    </div>
  );
};

export default CloudAnimation;
