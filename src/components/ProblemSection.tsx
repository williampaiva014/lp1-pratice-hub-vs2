import { motion } from "framer-motion";
import { Users, TrendingUp, Clock, LayoutGrid } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Isolamento Técnico",
    desc: "Muita técnica, mas pouca troca. Ficar preso apenas ao operacional limita sua visão de mercado."
  },
  {
    icon: TrendingUp,
    title: "Teto de Faturamento",
    desc: "Trabalhando muito, mas ganhando o mesmo. A dificuldade em escalar o valor dos seus contratos."
  },
  {
    icon: Clock,
    title: "Gargalo de Gestão",
    desc: "Perdendo tempo com burocracias e imprevistos que impedem a escala do seu negócio."
  },
  {
    icon: LayoutGrid,
    title: "Invisibilidade",
    desc: "Ser um excelente profissional, mas não ter uma rede que te posicione como autoridade e gere indicações."
  }
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-lg border border-white/10 text-[10px] tracking-widest uppercase text-muted-foreground mb-6">
            A Sua Realidade
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Hoje eu vejo profissionais extremamente capacitados <span className="text-gradient-gold">travados…</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((prob, i) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <prob.icon size={28} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{prob.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto border-t border-white/5 pt-16"
        >
          <p className="text-2xl md:text-4xl font-display font-medium text-foreground leading-snug">
            não por falta de competência — <br className="hidden md:block" />
            <span className="text-gradient-gold font-bold">mas por não estarem conectados a uma rede que gera indicações, faturamento e negócios.</span>
          </p>
          
          <div className="mt-12">
             <a href="#benefits" className="inline-block px-10 py-4 rounded-full btn-gold-gradient font-display font-bold text-lg">
                QUERO SAIR DA INÉRCIA
             </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;
