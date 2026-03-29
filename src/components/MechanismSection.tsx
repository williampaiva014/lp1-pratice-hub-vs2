import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LogIn, Users, RefreshCw, Briefcase, TrendingUp, ArrowRight } from "lucide-react";

// Imagens de depoimentos
import img1136 from "@/assets/IMG_1136.PNG";
import img1146 from "@/assets/IMG_1146.PNG";
import img1147 from "@/assets/IMG_1147.PNG";
import img1148 from "@/assets/IMG_1148.PNG";
import img1149 from "@/assets/IMG_1149.PNG";
import img1151 from "@/assets/IMG_1151.PNG";

const testimonialImages = [
  img1136, img1146, img1147, img1148, img1149, img1151
];

const steps = [
  { icon: <LogIn className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />, title: "Você baixa o app e entra no ecossistema" },
  { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />, title: "Conecta com quem importa" },
  { icon: <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />, title: "Troca indicações" },
  { icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />, title: "Recebe oportunidades" },
  { icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />, title: "Fatura com novas fontes" },
];

const MechanismSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mechanism" ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-background border-t border-white/5">
      {/* Background glow similar to Hero Section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.07] blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Texts */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-[10px] sm:text-xs font-bold tracking-widest text-primary mb-6 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            As Trilhas de Monetização
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            E foi exatamente isso que <br className="hidden md:block" /> eu estruturei dentro do <span className="text-gradient-gold">Hub:</span>
          </motion.h2>
        </div>

        {/* Core Timeline Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-md max-w-[1200px] mx-auto shadow-2xl relative w-full"
        >
          <p className="text-center text-xl sm:text-3xl font-bold text-white mb-16 sm:mb-20">
            Na prática:
          </p>

          <div className="relative z-10">
            {/* Horizontal Timeline Line (Desktop only) */}
            <div className="absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/60 via-primary/30 to-transparent hidden lg:block z-0" />

            {/* Timeline Steps (Responsive Grid/Flex) */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between items-center lg:items-start relative z-10 w-full">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.15 }}
                  className="flex flex-col items-center gap-4 group relative flex-1 text-center w-full max-w-[200px]"
                >
                  {/* Icon Box */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-gold flex items-center justify-center shrink-0 border border-primary/30 text-primary relative transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg bg-[#0d0d12]">
                    <span className="absolute top-1 left-2 text-[10px] font-bold opacity-40">{idx + 1}</span>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <div className="mt-2 px-2">
                    <h4 className="text-sm sm:text-base font-bold text-gray-300 group-hover:text-white transition-colors leading-snug">
                      {step.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-20 lg:mt-24 text-center"
          >
            <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-3">
              E quanto mais você participa...
            </p>
            <p className="text-2xl sm:text-4xl font-bold text-white mb-10">
              <span className="mr-2">💰</span> mais você <span className="text-gradient-gold">cresce dentro da rede e fatura com indicações.</span>
            </p>

            {/* Carrossel de Prova Social – Sangria Total no Bloco */}
            <div className="mb-12 relative overflow-hidden w-auto py-4 -mx-8 sm:-mx-12 lg:-mx-16">
              <motion.div
                className="flex gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                style={{ width: "max-content" }}
              >
                {[...testimonialImages, ...testimonialImages].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="h-[600px] sm:h-[450px] w-auto rounded-3xl shadow-2xl border border-white/10 opacity-95 hover:opacity-100 transition-all hover:scale-105"
                  />
                ))}
              </motion.div>
            </div>

            <a
              href="#cta-final"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-14 py-4 sm:py-6 rounded-full btn-gold-gradient font-display text-base sm:text-lg font-bold tracking-widest w-full sm:w-auto hover:scale-105 transition-transform duration-300 shadow-[0_10px_40px_rgba(200,150,40,0.25)] uppercase"
            >
              QUERO FATURAR
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default MechanismSection;
