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
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            E quem sai na frente fica <span className="text-gradient-gold">melhor posicionado</span> e com a <span className="text-gradient-gold">Prátice Hub</span> você tem:
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group p-6 rounded-2xl glass hover:glass-gold transition-all duration-500 hover:-translate-y-1 text-left"
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
            className="inline-block px-8 py-4 rounded-full btn-gold-gradient font-display text-lg"
          >
            QUERO FAZER PARTE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
