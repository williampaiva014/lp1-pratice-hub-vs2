import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Cpu, Clock, Users, ArrowRight } from "lucide-react";

/* ─── Dados dos Cards ────────────────────────────────────────── */
const reasons = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Time Skin in the Game",
    text: "Interesse real no seu crescimento. Não é vitrine, é comprometimento com resultado.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Tecnologia proprietária",
    text: "Plataforma construída, testada e validada para o profissional da construção civil e arquitetura.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Foco em liberdade",
    text: "Mais lucro, menos trabalho, mais tempo com quem você ama.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Comunidade exclusiva",
    text: "Entrada com fricção positiva. Aqui você encontra profissionais sérios, com ambição real e disposição para colaborar.",
  },
];

const DifferentiationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="differentiation" ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Background radial glow matching Section 1 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.07] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-xs font-bold tracking-widest text-primary mb-6 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Por Que É Diferente
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto"
          >
            O Prátice Hub não é grupo. Não é curso.{" "}
            <span className="text-gradient-gold">É uma infraestrutura de negócios.</span>
          </motion.h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col items-start gap-4 hover:translate-y-[-6px] transition-transform duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
