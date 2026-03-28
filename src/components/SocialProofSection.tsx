import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Imagens de depoimentos
import img1136 from "@/assets/IMG_1136.PNG";
import img1146 from "@/assets/IMG_1146.PNG";
import img1147 from "@/assets/IMG_1147.PNG";
import img1148 from "@/assets/IMG_1148.PNG";
import img1149 from "@/assets/IMG_1149.PNG";
import img1151 from "@/assets/IMG_1151.PNG";
import img3945 from "@/assets/IMG_3945.PNG";
import img3946 from "@/assets/IMG_3946.PNG";
import img3947 from "@/assets/IMG_3947.PNG";

/* ─── Estatísticas de destaque ──────────────────────────────────── */
const stats = [
  {
    number: "+550",
    label: "profissionais dentro do ecossistema",
    icon: "👷",
  },
  {
    number: "+17M",
    label: "de negócios gerados com Indicações",
    icon: "🤝",
  },
  {
    number: "R$ 10M+",
    label: "já gerados em economia para clientes",
    icon: "💰",
  },
];

/* ─── Imagens do carrossel infinito ───────────────────────────────── */
const testimonialImages = [
  img1136,
  img1146,
  img1147,
  img1148,
  img1149,
  img1151,
  img3945,
  img3946,
  img3947,
];

/* ─── Card individual de imagem ────────────────────────────────────── */
const TestimonialCard = ({ src }: { src: string }) => (
  <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 rounded-2xl shadow-sm overflow-hidden flex items-center justify-center pointer-events-none">
    <img 
      src={src} 
      alt="Depoimento de membro do Prátice Hub" 
      className="w-full h-auto object-cover rounded-2xl select-none"
      draggable={false}
    />
  </div>
);

/* ─── Carrossel infinito ─────────────────────────────────────────── */
const InfiniteCarousel = () => {
  // Duplica os itens para criar o loop sem interrupção
  const doubled = [...testimonialImages, ...testimonialImages];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade esquerdo */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
      />
      {/* Fade direito */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
      />

      {/* Track animado */}
      <motion.div
        className="flex gap-4 py-2"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {doubled.map((src, i) => (
          <TestimonialCard key={i} src={src} />
        ))}
      </motion.div>
    </div>
  );
};

/* ─── Seção principal ────────────────────────────────────────────── */
const SocialProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proof-hub" className="relative py-20 md:py-28 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>

        {/* ── Card branco com bordas arredondadas ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)" }}
        >
          {/* ── Topo: Chip + Título + Stats ── */}
          <div className="px-8 sm:px-12 pt-12 pb-10">

            {/* Chip + Título – centralizados */}
            <div className="flex flex-col items-center text-center mb-10">

              {/* Chip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                style={{
                  background: "linear-gradient(135deg, hsl(42,78%,55%) 0%, hsl(36,70%,45%) 100%)",
                  color: "#1a1008",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                Um Movimento Real
              </motion.div>

              {/* Título */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900"
              >
                Uma infraestrutura de negócios{" "}
                <span style={{ background: "linear-gradient(135deg, hsl(42,78%,45%) 0%, hsl(36,70%,35%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  real e pulsante.
                </span>
              </motion.h2>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.12 }}
                  className="flex flex-col items-center text-center gap-1 rounded-2xl px-6 py-6"
                  style={{ background: "#f9f9f9", boxShadow: "0 4px 20px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-3xl mb-1">{stat.icon}</span>
                  <span
                    className="font-display text-3xl sm:text-4xl font-bold"
                    style={{ background: "linear-gradient(135deg, hsl(42,78%,45%) 0%, hsl(36,70%,35%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {stat.number}
                  </span>
                  <span className="text-gray-500 text-sm leading-snug">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Linha divisória */}
          <div className="mx-8 sm:mx-12 h-px bg-gray-100" />

          {/* ── Carrossel ── */}
          <div className="py-8 px-0">
            <InfiniteCarousel />
          </div>

          {/* ── Rodapé do card ── */}
          <div className="px-8 sm:px-12 pb-12 border-t border-gray-100 pt-10 flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-center text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Parcerias estão sendo formadas. Novos negócios estão surgindo.{" "}
              <span className="text-gray-900 font-bold">
                O ambiente já existe. Você só ainda não entrou!
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a
                href="#cta-final"
                className="group flex flex-row items-center gap-3 px-8 py-4 rounded-full btn-gold-gradient font-display text-base font-bold tracking-wide shadow-[0_10px_30px_rgba(200,150,40,0.25)] hover:shadow-[0_15px_40px_rgba(200,150,40,0.35)] transition-all"
              >
                FAZER PARTE DO MOVIMENTO
                <span className="w-5 h-5 rounded-full bg-background/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-3.5 h-3.5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
