import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="final" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[120px]" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-xs font-medium text-primary mb-8">
            <Shield size={14} />
            Acesso antecipado • Vagas limitadas
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            O Prátice Hub não é grupo.<br />
            Não é curso.<br />
            <span className="text-gradient-gold">É uma infraestrutura de negócios.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Estou abrindo o acesso antecipado. Mas com um critério claro:
            <span className="text-foreground font-medium block mt-2">
              👉 Apenas os primeiros profissionais de cada região entram agora sem custo.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 sm:p-12 rounded-3xl glass-gold glow-gold text-center"
        >
          <Sparkles size={32} className="text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Agora a decisão é sua.
          </h3>
          <p className="text-muted-foreground mb-2 max-w-lg mx-auto">
            Você pode continuar tentando crescer sozinho…
          </p>
          <p className="text-foreground font-medium mb-8 max-w-lg mx-auto">
            Ou entrar no ambiente que eu criei para acelerar esse processo.
          </p>

          <a
            href="#"
            className="group inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-10 sm:py-5 rounded-full btn-gold-gradient font-display text-base sm:text-lg w-full sm:w-auto"
          >
            ACESSAR OPORTUNIDADES AGORA
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <p className="mt-6 text-sm text-muted-foreground">
            🔥 Acesso gratuito para os primeiros de cada região
          </p>
        </motion.div>

        {/* Final phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-xl sm:text-2xl text-muted-foreground italic leading-relaxed">
            "Porque no final… você não perde dinheiro por falta de capacidade.
            <br />
            Você perde…{" "}
            <span className="text-gradient-gold font-semibold not-italic">
              por não estar no ambiente certo."
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
