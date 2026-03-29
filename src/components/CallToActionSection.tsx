import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";

const TicketSVG = () => (
  <motion.div
    variants={{
      animate: {
        y: [0, -10, 0],
        rotate: [0, 1, 0, -1, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      },
    }}
    animate="animate"
    className="relative w-full max-w-[240px] aspect-[2/1] flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] mb-8 lg:mb-12"
  >
    <svg viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ticketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(42, 78%, 65%)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(42, 78%, 45%)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M15 0C6.71573 0 0 6.71573 0 15V45C4.41828 45 8 48.5817 8 53C8 57.4183 4.41828 61 0 61V105C0 113.284 6.71573 120 15 120H225C233.284 120 240 113.284 240 105V61C235.582 61 232 57.4183 232 53C232 48.5817 235.582 45 240 45V15C240 6.71573 233.284 0 225 0H15Z"
        fill="url(#ticketGradient)"
        stroke="hsl(42, 78%, 55%)"
        strokeWidth="1.5"
        strokeOpacity="0.8"
      />
      <line x1="175" y1="15" x2="175" y2="105" stroke="hsl(42, 78%, 55%)" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
      <text x="88" y="65" fill="hsl(42, 78%, 55%)" fontSize="12" fontWeight="900" fontFamily="system-ui" letterSpacing="0.15em" textAnchor="middle">
        CONVITE EXCLUSIVO
      </text>
      <path d="M190 53 L205 53 M197.5 45.5 L197.5 60.5" stroke="hsl(42, 78%, 55%)" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  </motion.div>
);

const CallToActionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta-final-section" ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-[#0d0d12]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.03] blur-[150px]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Closing Card (Final CTA) */}
        <motion.div
          id="cta-final"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 sm:p-12 md:p-16 rounded-[40px] glass-gold glow-gold relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-[55%] text-center lg:text-left">
              {/* Chip */}
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-[12px] font-bold tracking-widest text-primary mb-8 uppercase">
                Crescimento Exponencial
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground mb-4">
                A diferença entre quem trava e quem escala não é talento.
              </p>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-8">
                <span className="text-gradient-gold">É acesso.</span>
              </h3>

              <div className="space-y-6 mb-12 text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg">Você pode continuar tentando crescer sozinho… ou <span className="text-primary font-bold">aproveitar o convite</span> que recebeu para entrar no ambiente criado para acelerar esse processo.</p>
                
                <div className="flex flex-col items-center lg:items-start gap-3 pt-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-[0_0_15px_rgba(234,179,8,0.05)]"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm sm:text-base font-bold tracking-tight">
                      Você não chegou aqui por acaso.
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-[0_0_15px_rgba(234,179,8,0.05)]"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm sm:text-base font-bold tracking-tight">
                      Esse acesso não é aberto ao público.
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Side: Ticket & CTA */}
            <div className="w-full lg:w-[40%] flex flex-col items-center text-center">
              <TicketSVG />

              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
                A decisão é simples:
              </p>

              <div className="flex flex-col items-center gap-8 w-full">
                <a
                  href="https://engpaulorobson.com.br/formconvidado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full btn-gold-gradient font-display text-lg font-bold tracking-wide w-full shadow-[0_10px_40px_rgba(200,150,40,0.3)] transition-all hover:scale-105 hover:shadow-[0_15px_50px_rgba(200,150,40,0.4)]"
                >
                  QUERO ATIVAR MEU ACESSO
                  <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>

                {/* Urgência Final - Estilo Chip como no Hero */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex flex-col items-center gap-1.5 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/25 text-primary shadow-[0_0_30px_rgba(234,179,8,0.1)] group hover:scale-[1.02] transition-transform duration-300 w-full"
                >
                  <div className="flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 animate-pulse" />
                    <span className="text-base font-bold tracking-tight">
                      Convites limitados por região.
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs font-medium">
                    Quem entra primeiro, se posiciona melhor.
                  </p>
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
