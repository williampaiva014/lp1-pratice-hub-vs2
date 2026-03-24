import { motion } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.06] blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-xs font-medium text-primary mb-8">
            <Zap size={14} />
            Acesso antecipado aberto
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          Pare de tentar{" "}
          <span className="text-gradient-gold">crescer sozinho.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-display text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-4"
        >
          Quem joga isolado só sobrevive.
          <br />
          <span className="text-foreground font-medium">Quem se conecta, domina.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-8 space-y-3 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
        >
          <p>👉 Trabalhar mais não te faz crescer mais</p>
          <p>👉 Fazer tudo sozinho te limita</p>
          <p>👉 As melhores oportunidades não chegam para quem está isolado</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#benefits"
            className="group relative px-8 py-4 rounded-full btn-gold-gradient font-display font-bold text-lg"
          >
            QUERO SABER MAIS
          </a>
          <a
            href="#final"
            className="px-8 py-4 rounded-full border border-gold/30 text-foreground font-display font-medium text-lg hover:border-gold/60 hover:text-primary transition-all duration-300"
          >
            QUERO CRESCER NA REDE
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 text-sm text-primary font-medium"
        >
          🔥 Os primeiros profissionais de cada região têm acesso gratuito garantido.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
