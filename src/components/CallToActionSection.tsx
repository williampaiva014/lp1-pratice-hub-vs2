import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta-final-section" ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-[#0d0d12]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Closing Card (Final CTA) */}
        <motion.div
          id="cta-final"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 sm:p-12 rounded-3xl glass-gold glow-gold text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          {/* Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-[12px] font-bold tracking-widest text-primary mb-6 uppercase">
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
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full btn-gold-gradient font-display text-lg tracking-wide w-full sm:w-auto shadow-[0_10px_40px_rgba(200,150,40,0.3)] transition-transform hover:scale-105"
          >
            QUERO ACELERAR MINHA JORNADA
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Frase de impacto final */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-12 text-sm sm:text-base text-muted-foreground italic max-w-2xl mx-auto leading-relaxed"
        >
          "Porque no final, você não perde dinheiro por falta de capacidade.{" "}
          <span className="text-foreground font-medium not-italic">Você perde por estar no ambiente errado.</span>"
        </motion.p>
      </div>
    </section>
  );
};

export default CallToActionSection;
