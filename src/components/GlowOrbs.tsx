const GlowOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/3 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
    <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-primary/4 blur-[80px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
  </div>
);

export default GlowOrbs;
