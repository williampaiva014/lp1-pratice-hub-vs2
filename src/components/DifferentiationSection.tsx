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
    text: "Plataforma construída, testada e validada para o profissional da construção civil.",
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
    <section id="differentiation" ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-[#0d0d12]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />

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

        {/* Closing Card (Final CTA) */}
        <motion.div
          id="cta-final"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl glass-gold glow-gold text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          {/* Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest text-primary mb-6 uppercase">
            Comece Agora
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground mb-2">
            A diferença entre quem trava e quem escala não é talento.
          </p>
          <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient-gold">É acesso.</span>
          </h3>

          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Você pode continuar tentando crescer sozinho... ou entrar no ambiente criado para acelerar esse processo.{" "}
            <span className="text-foreground font-semibold">A entrada é gratuita. O crescimento começa agora!</span>
          </p>

          <a
            href="https://engpaulorobson.com.br/formnovomembro"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full btn-gold-gradient font-display text-lg tracking-wide w-full sm:w-auto shadow-[0_10px_40px_rgba(200,150,40,0.3)]"
          >
            QUERO FAZER PARTE DO PRÁTICE HUB
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Frase de impacto final */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12 text-sm sm:text-base text-muted-foreground italic max-w-2xl mx-auto leading-relaxed"
        >
          "Porque no final, você não perde dinheiro por falta de capacidade.{" "}
          <span className="text-foreground font-medium not-italic">Você perde por estar no ambiente errado.</span>"
        </motion.p>

      </div>
    </section>
  );
};

export default DifferentiationSection;
