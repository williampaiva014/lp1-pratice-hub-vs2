import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";

const TicketSVG = () => (
  <motion.div
    variants={{
      animate: {
        y: [0, -12, 0],
        rotate: [0, 2, 0, -2, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      },
    }}
    animate="animate"
    className="relative w-full max-w-[280px] aspect-[2/1] flex items-center justify-center filter drop-shadow-[0_20px_50px_rgba(234,179,8,0.15)] mb-10"
  >
    <svg viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="ticketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(42, 78%, 65%)" stopOpacity="0.2" />
          <stop offset="50%" stopColor="hsl(42, 78%, 55%)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="hsl(42, 78%, 45%)" stopOpacity="0.2" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path
        d="M15 0C6.71573 0 0 6.71573 0 15V45C4.41828 45 8 48.5817 8 53C8 57.4183 4.41828 61 0 61V105C0 113.284 6.71573 120 15 120H225C233.284 120 240 113.284 240 105V61C235.582 61 232 57.4183 232 53C232 48.5817 235.582 45 240 45V15C240 6.71573 233.284 0 225 0H15Z"
        fill="url(#ticketGradient)"
        stroke="hsl(42, 78%, 55%)"
        strokeWidth="2"
        filter="url(#goldGlow)"
      />
      <line x1="175" y1="15" x2="175" y2="105" stroke="hsl(42, 78%, 55%)" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.3" />
      <text x="88" y="58" fill="hsl(42, 78%, 65%)" fontSize="14" fontWeight="900" fontFamily="system-ui" letterSpacing="0.2em" textAnchor="middle">
        CONVITE
      </text>
      <text x="88" y="78" fill="hsl(42, 78%, 55%)" fontSize="10" fontWeight="700" fontFamily="system-ui" letterSpacing="0.1em" textAnchor="middle" opacity="0.9">
        EXCLUSIVO
      </text>
      <path d="M190 53 L205 53 M197.5 45.5 L197.5 60.5" stroke="hsl(42, 78%, 60%)" strokeWidth="2" strokeOpacity="0.6" />
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
        <motion.div
          id="cta-final"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 sm:p-12 md:p-20 rounded-[48px] glass-gold glow-gold relative overflow-hidden"
        >
          {/* Top Divider */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16">
            
            {/* Left Side: Messaging */}
            <div className="w-full lg:w-[50%] flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex items-center self-center lg:self-start gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-[12px] font-bold tracking-widest text-primary mb-8 uppercase">
                Crescimento Exponencial
              </div>

              <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light">
                A diferença entre quem trava e quem escala não é talento.
              </p>
              <h3 className="font-display text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight">
                <span className="text-gradient-gold">É acesso.</span>
              </h3>

              <div className="space-y-6 mb-12 text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p className="text-base sm:text-lg">Você pode continuar tentando crescer sozinho… ou <span className="text-primary font-bold">aproveitar o convite</span> que recebeu para entrar no ambiente criado para acelerar esse processo.</p>
                
                <div className="flex flex-col items-center lg:items-start gap-3.5 pt-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary shadow-[0_4px_20px_rgba(234,179,8,0.05)]"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span className="text-sm sm:text-[15px] font-bold tracking-tight">
                      Você não chegou aqui por acaso.
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary shadow-[0_4px_20px_rgba(234,179,8,0.05)]"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span className="text-sm sm:text-[15px] font-bold tracking-tight">
                      Esse acesso não é aberto ao público.
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Side: Exclusive Action Box */}
            <div className="w-full lg:w-[45%] relative">
               <div className="h-full flex flex-col items-center justify-center p-8 sm:p-12 rounded-[32px] bg-white/[0.02] border border-white/5 relative group transition-all duration-500 hover:bg-white/[0.04]">
                  {/* Internal Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[70%] bg-primary/[0.04] blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  <TicketSVG />

                  <p className="font-display text-xl sm:text-2xl font-bold text-white mb-8 opacity-80">
                    A decisão é simples:
                  </p>

                  <div className="flex flex-col items-center gap-8 w-full relative z-10">
                    <a
                      href="https://engpaulorobson.com.br/formconvidado/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full btn-gold-gradient font-display text-lg font-bold tracking-wide w-full shadow-[0_10px_40px_rgba(200,150,40,0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(200,150,40,0.4)]"
                    >
                      QUERO ATIVAR MEU ACESSO
                      <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex flex-col items-center gap-1.5 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/25 text-primary shadow-[0_0_30px_rgba(234,179,8,0.052)] hover:scale-[1.02] transition-transform duration-300 w-full text-center"
                    >
                      <div className="flex items-center gap-2.5">
                        <AlertCircle className="w-5 h-5 animate-pulse" />
                        <span className="text-base font-bold tracking-tight">
                          Convites limitados por região.
                        </span>
                      </div>
                      <p className="text-muted-foreground text-[11px] sm:text-xs font-medium">
                        Quem entra primeiro, se posiciona melhor.
                      </p>
                    </motion.div>
                  </div>
               </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
