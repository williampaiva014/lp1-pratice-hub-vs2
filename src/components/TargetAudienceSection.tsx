import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import praticeSymbol from "@/assets/LOGOTIPO_P_1.png";

/* ─── Dados ─────────────────────────────────────────────────────── */
const audience = [
  {
    icon: "🏗️",
    text: "Engenheiros civis que querem ampliar faturamento sem depender só de obra.",
  },
  {
    icon: "🎨",
    text: "Arquitetos e designers de interiores que querem se posicionar como referência e atrair clientes de maior valor.",
  },
  {
    icon: "🏢",
    text: "Construtores e incorporadores que buscam parcerias estratégicas e novas fontes de receita.",
  },
  {
    icon: "📐",
    text: "Projetistas que querem fazer parte de um ecossistema que gera negócios de verdade.",
  },
  {
    icon: "🤝",
    text: "Corretores e representantes do setor que entendem que a conexão certa vale mais do que qualquer comissão isolada.",
  },
];

const floatingBadges = [
  { text: "💼 Nova parceria fechada", delay: 0, x: "-110%", y: "10%" },
  { text: "🤝 Indicação recebida", delay: 1.2, x: "-95%", y: "55%" },
  { text: "📈 Meta batida!", delay: 2.4, x: "5%", y: "80%" },
];

/* ─── iPhone mockup ─────────────────────────────────────────────── */
const IPhoneMockup = ({ inView }: { inView: boolean }) => (
  <div className="relative flex items-center justify-center h-full min-h-[520px]">
    {/* Glow dourado atrás do phone */}
    <div
      className="absolute inset-0 rounded-full blur-[80px] opacity-30 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, hsl(42,78%,55%) 0%, transparent 70%)",
      }}
    />

    {/* ── Corpo do iPhone ── */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative z-10"
      style={{ width: "340px" }}
    >
      {/* Frame */}
      <div
        className="relative rounded-[36px] overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #2a2a2e 0%, #18181c 100%)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.06)",
          padding: "10px",
        }}
      >
        {/* Câmera dinâmica */}
        <div className="flex justify-center mb-2">
          <div
            className="w-16 h-5 rounded-full flex items-center justify-center gap-1.5"
            style={{ background: "#0d0d10" }}
          >
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-1 h-1 rounded-full bg-white/5" />
          </div>
        </div>

        {/* Tela do app */}
        <div
          className="rounded-[28px] overflow-hidden"
          style={{
            background: "linear-gradient(170deg, #0d0d12 0%, #121218 100%)",
            aspectRatio: "9/19.5",
          }}
        >
          {/* Conteúdo placeholder do app */}
          <div className="w-full h-full flex flex-col">
            {/* Header do app */}
            <div
              className="px-4 pt-4 pb-3 flex items-center justify-between"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="w-6 h-6 rounded-lg bg-primary/80 flex items-center justify-center">
                <span className="text-[8px] font-bold text-background">P</span>
              </div>
              <span className="text-[9px] font-bold text-foreground tracking-wider uppercase">
                Prátice Hub
              </span>
              <div className="w-5 h-5 rounded-full bg-white/10" />
            </div>

            {/* Conteúdo fake do app */}
            <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
              {/* Greeting */}
              <p className="text-[8px] text-muted-foreground">Bem-vindo de volta 👋</p>
              <p className="text-[11px] font-bold text-foreground">Seu hub de negócios</p>

              {/* Cards de stats */}
              <div className="grid grid-cols-2 gap-1.5 mt-1">
                {[
                  { label: "Conexões", val: "127" },
                  { label: "Projetos", val: "8" },
                  { label: "Indicações", val: "34" },
                  { label: "Eventos", val: "3" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg p-2"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-primary text-[10px] font-bold">{s.val}</p>
                    <p className="text-[7px] text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Feed de atividade */}
              <p className="text-[8px] font-semibold text-foreground mt-2">Atividade recente</p>
              {[
                { icon: "🤝", msg: "Nova parceria · João MP" },
                { icon: "📊", msg: "Trilha concluída · Monetização" },
                { icon: "💬", msg: "3 mensagens novas" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 py-1.5 px-2 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="text-[10px]">{item.icon}</span>
                  <span className="text-[7px] text-muted-foreground">{item.msg}</span>
                </div>
              ))}

              {/* CTA interno */}
              <div
                className="mt-auto rounded-lg py-2 text-center"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(42,78%,45%) 0%, hsl(36,70%,35%) 100%)",
                }}
              >
                <span className="text-[9px] font-bold text-background tracking-wider">
                  VER OPORTUNIDADES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* ── Logo P flutuando ── */}
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="absolute top-6 right-4 z-20"
      style={{
        animation: inView ? "float 3s ease-in-out infinite" : undefined,
        filter: "drop-shadow(0px 8px 24px rgba(0,0,0,0.8)) drop-shadow(0px 0px 20px hsl(42 78% 55% / 0.45))",
      }}
    >
      <div className="glass rounded-2xl p-3 border border-primary/20 w-16 h-16 flex items-center justify-center">
        <img src={praticeSymbol} alt="Prátice" className="w-full h-full object-contain shadow-sm" />
      </div>
    </motion.div>

    {/* ── Badges flutuantes ── */}
    {floatingBadges.map((badge, i) => (
      <motion.div
        key={i}
        className="absolute z-20 whitespace-nowrap"
        style={{ left: badge.x, top: badge.y }}
        initial={{ opacity: 0, x: -20 }}
        animate={
          inView
            ? {
                opacity: [0, 1, 1, 0],
                x: [-20, 0, 0, -10],
              }
            : {}
        }
        transition={{
          duration: 3.5,
          delay: badge.delay + 1,
          repeat: Infinity,
          repeatDelay: floatingBadges.length * 3.5 - 3.5,
        }}
      >
        <div
          className="px-3 py-1.5 rounded-full text-xs font-semibold text-foreground"
          style={{
            background: "rgba(20,20,26,0.92)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            backdropFilter: "blur(12px)",
          }}
        >
          {badge.text}
        </div>
      </motion.div>
    ))}

    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
    `}</style>
  </div>
);

/* ─── Seção principal ────────────────────────────────────────────── */
const TargetAudienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="para-quem" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── ESQUERDA: Copy ── */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-xs font-bold tracking-widest text-primary uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Para Quem É
              </div>
            </motion.div>

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Quem sai na frente fica{" "}
              <span className="text-gradient-gold">melhor posicionado.</span>{" "}
              Esse ambiente foi feito para você.
            </motion.h2>

            {/* Lista de audiências */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              {audience.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check size={11} className="text-primary" />
                  </span>
                  <span className="text-base text-muted-foreground leading-relaxed">
                    <span className="mr-1.5">{item.icon}</span>
                    {item.text}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Texto de fechamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="glass rounded-2xl p-5 border border-primary/20"
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                Dentro do Prátice Hub você tem acesso a{" "}
                <span className="text-foreground font-semibold">
                  comunidade ativa, trilhas de monetização, eventos estratégicos, gamificação
                </span>{" "}
                e networking qualificado.
              </p>
              <p className="mt-3 text-lg font-bold text-foreground">
                A diferença não é capacidade.{" "}
                <span className="text-gradient-gold">É acesso.</span>
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full btn-gold-gradient font-display text-base font-bold tracking-wide"
              >
                QUERO FAZER PARTE
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

          </div>

          {/* ── DIREITA: iPhone mockup ── */}
          <div className="w-full lg:w-1/2 flex-shrink-0 flex items-center justify-center">
            <IPhoneMockup inView={inView} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
