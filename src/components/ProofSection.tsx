import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Handshake, GitPullRequest, BarChart3 } from "lucide-react";

const ecosystemData = [
  { 
    icon: Users, 
    title: "+550 profissionais", 
    desc: "dentro do ecossistema que eu construí" 
  },
  { 
    icon: Handshake, 
    title: "indicações", 
    desc: "acontecem todos os dias" 
  },
  { 
    icon: GitPullRequest, 
    title: "parcerias", 
    desc: "estão sendo formadas" 
  },
  { 
    icon: BarChart3, 
    title: "negócios", 
    desc: "estão surgindo" 
  },
];

const ProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proof" ref={ref} className="relative py-32 section-gradient overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Um movimento real
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Uma infraestrutura de negócios <br className="hidden md:block" />
            <span className="text-gradient-gold">real e pulsante</span>
          </h2>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative z-10">
          {ecosystemData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + 0.15 * i }}
              className="p-8 rounded-3xl glass hover:glass-gold transition-all duration-500 group text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2 text-gradient-gold">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Conclusion Subheadline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center p-12 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-sm relative"
        >
          {/* Subtle glow background */}
          <div className="absolute inset-0 bg-primary/[0.03] blur-[100px] -z-10" />
          
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
            O ambiente já existe. <br />
            <span className="text-gradient-gold font-bold">Você só ainda não entrou.</span>
          </p>
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#final"
            className="inline-block px-8 py-4 rounded-full btn-gold-gradient font-display text-lg"
          >
            QUERO ENTRAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};



export default ProofSection;
