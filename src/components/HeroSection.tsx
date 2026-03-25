import { motion } from "framer-motion";
import { ArrowDown, Zap, TrendingDown, UserX, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-6">
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
          className="mt-16 w-full max-w-4xl mx-auto flex flex-col items-center"
        >
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-foreground text-center px-4">
            Eu demorei anos pra entender isso...
          </h3>

          {/* Simple vertical line for Mobile */}
          <div className="md:hidden w-[2px] h-[32px] bg-border" />

          {/* Desktop Flowchart Lines */}
          <div className="hidden md:flex flex-col w-full items-center opacity-60">
             {/* Stem from text */}
             <div className="w-[2px] h-[32px] bg-border glow-gold-sm" />
             {/* Horizontal bridge and 3 drops */}
             <div className="w-[calc(66.666%+18px)] h-[32px] border-x-[2px] border-t-[2px] border-border relative flex justify-center rounded-t-sm">
                <div className="w-[2px] h-full bg-border glow-gold-sm" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left relative z-10">
            <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-gold/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center text-primary mb-2">
                <TrendingDown size={24} />
              </div>
              <p className="text-foreground font-medium text-sm sm:text-base">Trabalhar mais não te faz crescer mais</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-gold/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center text-primary mb-2">
                <UserX size={24} />
              </div>
              <p className="text-foreground font-medium text-sm sm:text-base">Fazer tudo sozinho te limita</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-gold/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center text-primary mb-2">
                <Globe size={24} />
              </div>
              <p className="text-foreground font-medium text-sm sm:text-base">As melhores oportunidades não chegam para quem está isolado</p>
            </div>
          </div>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 flex justify-center pb-2"
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
