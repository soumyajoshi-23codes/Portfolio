const MorningHaze = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Top light haze */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white/70 via-[#f0f6fb]/60 to-transparent"></div>

      {/* Soft center glow */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/40 blur-[120px] rounded-full"></div>
    </div>
  );
};

export default MorningHaze;
