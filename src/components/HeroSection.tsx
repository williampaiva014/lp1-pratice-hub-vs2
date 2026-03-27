import { motion } from "framer-motion";
import pauloRobsonImg from "@/assets/paulo robson hd3.png";
import logoImg from "@/assets/LOGOTIPO_P_1.png";

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.07] blur-[120px]" />
      </div>

      {/* ── FULL-HEIGHT IMAGE (desktop only, absolutely positioned right) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15 }}
        className="hidden lg:block absolute pointer-events-none"
        style={{ left: "var(--hero-img-left)", width: "var(--hero-img-width)", top: "10%", bottom: 0 }}
        aria-hidden="true"
      >
        {/* White glow behind head – camufla borda superior */}
        <div
          className="absolute"
          style={{
            top: "-6%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "35%",
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 45%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />

        {/* Neon glow behind Paulo – da altura dos ombros pra baixo */}
        <div
          className="absolute"
          style={{
            zIndex: 5,
            top: "42%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            height: "65%",
            background: `
              radial-gradient(ellipse 70% 60% at 50% 0%,
                hsl(228 60% 22% / 0.9) 0%,
                hsl(220 70% 18% / 0.6) 35%,
                hsl(228 30% 11% / 0.2) 70%,
                transparent 100%
              )
            `,
            filter: "blur(22px)",
          }}
        />

        <img
          src={pauloRobsonImg}
          alt=""
          className="absolute inset-x-0 top-0 w-full h-auto object-contain object-top z-20"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%), linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 100%), linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Badge ESQUERDO – na frente, ao lado esquerdo da imagem */}
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute bottom-16 z-30"
          style={{
            left: "12%",
            filter:
              "drop-shadow(0px 8px 24px rgba(0,0,0,0.8)) drop-shadow(0px 0px 20px hsl(42 78% 55% / 0.45))",
          }}
        >
          <div className="glass rounded-2xl p-3 border border-primary/20">
            <img
              src={logoImg}
              alt="Prátice Hub logo"
              style={{ width: "var(--hero-badge-l-size)", height: "auto" }}
            />
          </div>
        </motion.div>

        {/* Badge DIREITO – atrás da imagem, mais fosco */}
        <motion.div
          variants={{
            animate: {
              y: [0, -10, 0],
              transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            },
          }}
          animate="animate"
          className="absolute right-4 z-10"
          style={{
            top: "40%",
            opacity: 0.9,
            filter: "blur(1.5px) drop-shadow(0px 4px 12px rgba(0,0,0,0.5))",
          }}
        >
          <div className="glass rounded-2xl p-4 border border-primary/10">
            <img
              src={logoImg}
              alt=""
              style={{ width: "var(--hero-badge-r-size)", height: "auto" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ── MAIN LAYOUT ── */}
      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* ── LEFT COLUMN: Copy (desktop: 50%, mobile: full) ── */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* Chip de destaque */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-xs font-bold tracking-widest text-primary mb-6 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              O Ecossistema da Construção Civil
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Cresça mais, trabalhe com mais inteligência e{" "}
              <span className="text-gradient-gold">
                pare de depender só de você mesmo!
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              O Prátice Hub é a plataforma onde engenheiros, arquitetos,
              construtores e profissionais da construção civil se conectam,
              colaboram e faturam mais,{" "}
              <span className="text-foreground font-medium">
                juntos, dentro de um ecossistema criado para o seu mercado.
              </span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            >
              <a
                href="#cta-final"
                className="inline-block px-10 py-4 rounded-full btn-gold-gradient font-display font-bold text-lg tracking-wide shadow-lg"
              >
                QUERO FAZER PARTE
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: mobile image only (desktop uses absolute) ── */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src={pauloRobsonImg}
                alt="Dr. Paulo Robson – Fundador do Prátice Hub"
                className="w-full h-auto object-cover"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 85% 85% at 50% 40%, black 50%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 85% 85% at 50% 40%, black 50%, transparent 100%)",
                }}
              />
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute bottom-6 right-4 z-30"
                style={{
                  filter:
                    "drop-shadow(0px 6px 16px rgba(0,0,0,0.7)) drop-shadow(0px 0px 14px hsl(42 78% 55% / 0.4))",
                }}
              >
                <div className="glass rounded-xl p-2 border border-primary/20">
                  <img src={logoImg} alt="Prátice Hub logo" className="w-20 h-auto" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
      {/* ── Gold arc divider – bottom border of Hero ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none" style={{ height: "10px", zIndex: 2 }}>
        <svg
          viewBox="0 0 1440 30"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gold-arc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(42,78%,55%)" stopOpacity="0" />
              <stop offset="20%" stopColor="hsl(42,78%,55%)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(42,85%,65%)" stopOpacity="1" />
              <stop offset="80%" stopColor="hsl(42,78%,55%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(42,78%,55%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Linha reta com gradiente dourado */}
          <path d="M 0,5 L 1440,5"
            fill="none" stroke="url(#gold-arc)" strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M 0,5 L 1440,5"
            fill="none" stroke="url(#gold-arc)" strokeWidth="0.5"
            strokeLinecap="round" opacity="0.35"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
