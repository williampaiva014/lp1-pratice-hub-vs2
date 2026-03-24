import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, TrendingUp, Calendar, Gamepad2, Handshake } from "lucide-react";

const benefits = [
  { icon: Users, title: "Comunidade ativa", desc: "Profissionais reais trocando oportunidades todos os dias." },
  { icon: TrendingUp, title: "Trilhas de monetização", desc: "Caminhos claros para gerar receita com suas habilidades." },
  { icon: Calendar, title: "Eventos estratégicos", desc: "Encontros presenciais e online que geram negócios." },
  { icon: Gamepad2, title: "Gamificação", desc: "Painel de evolução que mostra seu progresso e engajamento." },
  { icon: Handshake, title: "Networking qualificado", desc: "Conexões que se transformam em contratos reais." },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" ref={ref} className="relative py-32 section-gradient">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Por que funciona
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            O mercado está aquecido.<br />
            <span className="text-muted-foreground font-light">
              Mas quem cresce mais não é quem trabalha mais.
            </span>
          </h2>
          <p className="font-display text-xl sm:text-2xl text-gradient-gold font-semibold">
            É quem está mais bem posicionado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group p-6 rounded-2xl glass hover:glass-gold transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <b.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-muted-foreground mb-6">
            👉 A diferença não é capacidade. <span className="text-foreground font-medium">É acesso.</span>
          </p>
          <a
            href="#final"
            className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold glow-gold-sm hover:scale-105 transition-transform duration-300"
          >
            QUERO FAZER PARTE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
