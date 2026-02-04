const SnowfallAnimation = () => {
  const snowflakes = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 12 + Math.random() * 6,
    size: 4 + Math.random() * 6,
    drift: -40 + Math.random() * 80,
    rotate: Math.random() * 360,
    layer: Math.random(), // depth layer
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      <style>{`
        @keyframes snow-fall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          50% {
            transform: translateY(50vh) translateX(calc(var(--drift) / 2)) rotate(180deg);
          }
          100% {
            transform: translateY(110vh) translateX(var(--drift)) rotate(360deg);
            opacity: 0.2;
          }
        }

        .snowflake {
          position: fixed;
          top: -20px;
          background: radial-gradient(circle at 30% 30%, #ffffff, #dfefff);
          border-radius: 50%;
          animation-name: snow-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          pointer-events: none;
        }

        /* depth layers */
        .layer-far {
          opacity: 0.25;
          filter: blur(2px);
        }

        .layer-mid {
          opacity: 0.5;
          filter: blur(1px);
        }

        .layer-near {
          opacity: 0.8;
          filter: blur(0px);
        }
      `}</style>

      {snowflakes.map((flake) => {
        const layerClass =
          flake.layer < 0.33
            ? "layer-far"
            : flake.layer < 0.66
            ? "layer-mid"
            : "layer-near";

        return (
          <div
            key={flake.id}
            className={`snowflake ${layerClass}`}
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              ["--drift" as any]: `${flake.drift}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default SnowfallAnimation;
