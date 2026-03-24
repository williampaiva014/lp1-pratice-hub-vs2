import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Users, Rocket, Award, ChevronRight } from "lucide-react";

const results = [
  { icon: DollarSign, text: "Profissionais ganham com indicações" },
  { icon: Users, text: "Networking que gera contratos reais" },
  { icon: Rocket, text: "Crescimento acelerado pelo ecossistema" },
  { icon: Award, text: "Reconhecimento e posicionamento de mercado" },
];

const steps = [
  { num: "01", title: "Entre na rede", desc: "Crie seu perfil e seja encontrado por quem precisa do seu serviço." },
  { num: "02", title: "Conecte-se", desc: "Participe de eventos, troque experiências e construa parcerias." },
  { num: "03", title: "Monetize", desc: "Receba indicações, feche negócios e evolua no ranking." },
  { num: "04", title: "Escale", desc: "Use a infraestrutura completa para crescer sem limites." },
];

const ProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proof" ref={ref} className="relative py-32 section-gradient">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Resultados reais
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            O que eu vejo{" "}
            <span className="text-gradient-gold">acontecer hoje</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-24">
          {results.map((r, i) => (
            <motion.div
              key={r.text}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="flex items-center gap-4 p-5 rounded-xl glass hover:glass-gold transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon size={18} className="text-primary" />
              </div>
              <span className="text-sm sm:text-base font-medium">{r.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Mechanism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            O Mecanismo
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Como funciona o ecossistema
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + 0.15 * i }}
              className="relative p-6 rounded-2xl glass group hover:glass-gold transition-all duration-500"
            >
              <span className="font-display text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                {s.num}
              </span>
              <h4 className="font-display text-lg font-semibold mt-2 mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <ChevronRight size={16} className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center p-10 rounded-3xl glass-gold glow-gold"
        >
          <p className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-gold mb-3">
            +550
          </p>
          <p className="text-xl text-foreground font-medium mb-1">profissionais na rede</p>
          <p className="text-muted-foreground">e contando...</p>
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#final"
            className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold glow-gold-sm hover:scale-105 transition-transform duration-300"
          >
            QUERO ENTRAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
