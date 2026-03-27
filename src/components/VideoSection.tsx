import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ─── Laptop 3D ──────────────────────────────────────────────────── */
const LaptopShell = ({
  lidRotation,
  screenOpacity,
}: {
  lidRotation: ReturnType<typeof useTransform>;
  screenOpacity: ReturnType<typeof useTransform>;
}) => (
  <div
    className="relative w-full max-w-[680px] mx-auto select-none"
    style={{ perspective: "1400px" }}
  >
    {/* ── TAMPA ── */}
    <motion.div
      style={{
        rotateX: lidRotation,
        transformOrigin: "bottom center",
        transformStyle: "preserve-3d",
      }}
      className="relative w-full"
    >
      {/* Moldura da tampa */}
      <div
        className="relative w-full rounded-t-2xl"
        style={{
          background: "linear-gradient(160deg, #2e2e34 0%, #1c1c22 100%)",
          boxShadow:
            "0 -4px 30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)",
          paddingBottom: "62.5%",
        }}
      >
        {/* Câmera */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />

        {/* Tela */}
        <motion.div
          className="absolute inset-[8px] rounded-xl overflow-hidden"
          style={{ opacity: screenOpacity }}
        >
          {/* Fundo da tela */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d12] to-[#14141a] flex flex-col items-center justify-center gap-4">
            {/* Play button */}
            <div
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(135deg, hsl(42,78%,55%) 0%, hsl(36,70%,40%) 100%)",
                boxShadow: "0 0 50px rgba(200,150,40,0.5)",
              }}
            >
              <svg
                className="w-6 h-6 sm:w-9 sm:h-9 text-background ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white/50 text-xs sm:text-sm tracking-widest uppercase font-medium">
              Tour pela plataforma
            </p>
          </div>

          {/*
            ── VÍDEO REAL ──
            Substitua o div acima por:
            <iframe
              src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=0&rel=0"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          */}
        </motion.div>
      </div>
    </motion.div>

    {/* ── BASE ── */}
    <div
      className="w-full rounded-b-xl"
      style={{
        height: "22px",
        background: "linear-gradient(180deg, #28282e 0%, #1c1c22 100%)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
      }}
    >
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-0.5 rounded-full bg-black/40" />
    </div>

    {/* Reflexo dourado */}
    <div
      className="absolute -bottom-8 left-1/4 right-1/4 h-4 rounded-full blur-2xl pointer-events-none"
      style={{ background: "rgba(200,150,40,0.3)" }}
    />
  </div>
);

/* ─── Seção principal ────────────────────────────────────────────── */
const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  /* Scroll que cobre os 300vh da seção inteira */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 0–60%: tampa abre de fechada (-82°) → aberta (0°)
  const lidRotation = useTransform(scrollYProgress, [0.05, 0.65], [-82, 0]);

  // 20–70%: tela aparece conforme a tampa abre
  const screenOpacity = useTransform(scrollYProgress, [0.2, 0.65], [0, 1]);

  return (
    /* 300vh garante espaço suficiente para a "âncora" de scroll */
    <section
      id="video"
      ref={sectionRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      {/* ── Sticky inner — fica preso enquanto o usuário rola os 300vh ── */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">

        {/* Glow bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px]" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center gap-10 sm:gap-14">

          {/* ── Chip + Título ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center gap-4"
          >
            {/* Chip */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background:
                  "linear-gradient(135deg, hsl(42,78%,55%) 0%, hsl(36,70%,45%) 100%)",
                color: "#1a1008",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
              Veja por dentro
            </div>

            {/* Título */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Uma infraestrutura de negócios{" "}
              <span className="text-gradient-gold">na palma da sua mão.</span>
            </h2>
          </motion.div>

          {/* ── Laptop animado ── */}
          <div className="w-full">
            <LaptopShell lidRotation={lidRotation} screenOpacity={screenOpacity} />
          </div>

          {/* Hint de scroll (some quando a tampa está quase aberta) */}
          <motion.p
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.15, 0.5], [1, 1, 0]),
            }}
            className="text-[11px] text-muted-foreground tracking-widest uppercase opacity-60 absolute bottom-6"
          >
            ↓ Role para revelar
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
