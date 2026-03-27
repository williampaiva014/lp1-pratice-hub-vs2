import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Dados do gráfico ────────────────────────────────────────── */
const bars = [
  {
    label: "PIB",
    sublabel: "Construção Civil",
    value: 6,
    max: 10,
    color: "hsl(42,78%,55%)",
    colorDark: "hsl(36,70%,35%)",
    suffix: "% do PIB",
  },
  {
    label: "Empregos",
    sublabel: "Diretos",
    value: 8,
    max: 10,
    color: "hsl(42,78%,60%)",
    colorDark: "hsl(36,70%,38%)",
    suffix: "M+",
  },
  {
    label: "Déficit",
    sublabel: "Habitacional",
    value: 8,
    max: 10,
    color: "hsl(42,85%,65%)",
    colorDark: "hsl(36,70%,40%)",
    suffix: "M unidades",
  },
  {
    label: "Mcmv",
    sublabel: "Até 2026",
    value: 2,
    max: 10,
    color: "hsl(42,78%,52%)",
    colorDark: "hsl(36,68%,32%)",
    suffix: "M unidades",
  },
];

/* ─── Barra 3D individual ─────────────────────────────────────── */
const Bar3D = ({
  bar,
  index,
  inView,
  mobile,
}: {
  bar: (typeof bars)[0];
  index: number;
  inView: boolean;
  mobile: boolean;
}) => {
  const heightPct = (bar.value / bar.max) * 100;
  const maxBarH = mobile ? 160 : 280;
  const barW = mobile ? 42 : 56;
  const sideW = mobile ? 9 : 13;
  const colW = mobile ? 52 : 68;
  const barH = (heightPct / 100) * maxBarH;

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
    >
      {/* Valor flutuante */}
      <motion.span
        className="text-xs font-bold text-primary"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 + index * 0.15 }}
      >
        {bar.suffix}
      </motion.span>

      {/* Container da barra 3D */}
      <div
        className="relative flex items-end justify-center"
        style={{ height: `${maxBarH}px`, width: `${colW}px` }}
      >
        {/* Sombra difusa abaixo */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "60px",
            height: "16px",
            borderRadius: "50%",
            background: `radial-gradient(ellipse, ${bar.color}50 0%, transparent 70%)`,
            filter: "blur(6px)",
          }}
        />

        {/* Corpo principal da barra */}
        <motion.div
          className="relative rounded-t-sm overflow-hidden"
          style={{ width: `${barW}px` }}
          initial={{ height: 0 }}
          animate={inView ? { height: barH } : { height: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.3 + index * 0.15,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          {/* Face frontal – gradiente principal */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${bar.color} 0%, ${bar.colorDark} 100%)`,
            }}
          />
          {/* Brilho interno vertical */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, transparent 45%)",
            }}
          />
          {/* Reflexo superior */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "30%",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Face lateral direita – efeito 3D */}
        <motion.div
          className="absolute right-0 bottom-0"
          style={{
            width: `${sideW}px`,
            transformOrigin: "left bottom",
            transform: "skewY(-45deg)",
            background: `linear-gradient(180deg, ${bar.colorDark} 0%, hsl(228,30%,8%) 100%)`,
          }}
          initial={{ height: 0 }}
          animate={inView ? { height: barH } : { height: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.3 + index * 0.15,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />

        {/* Tampa superior – efeito 3D */}
        <motion.div
          className="absolute"
          style={{
            width: `${barW}px`,
            height: `${sideW}px`,
            transformOrigin: "bottom left",
            transform: "skewX(-45deg)",
            background: `linear-gradient(90deg, rgba(255,255,255,0.55) 0%, ${bar.color} 100%)`,
            right: `-${sideW}px`,
            bottom: `${barH}px`,
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.1 + index * 0.15 }}
        />
      </div>

      {/* Label */}
      <div className="text-center">
        <p className="text-xs font-bold text-foreground">{bar.label}</p>
        <p className="text-[10px] text-muted-foreground">{bar.sublabel}</p>
      </div>
    </motion.div>
  );
};

/* ─── Seção principal ─────────────────────────────────────────── */
const MarketContextSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  // Detecção de mobile (server-safe)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="market"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >

          {/* ── ESQUERDA: Gráfico 3D ─────────────────────────────── */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            {/* Título do gráfico */}
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">
              Dados do Setor • Brasil 2024
            </p>

            {/* Grid do gráfico com perspectiva 3D */}
            <div
              className="relative w-full"
              style={{
                perspective: "800px",
              }}
            >
              {/* Plano base – chão do gráfico */}
              <motion.div
                className="relative mx-auto"
                style={{
                  width: "fit-content",
                  transformStyle: "preserve-3d",
                }}
                initial={{ rotateX: 8, rotateY: -6 }}
                animate={inView ? { rotateX: 8, rotateY: -6 } : {}}
              >
                {/* Barras */}
                <div className="flex items-end gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 pb-4">
                  {bars.map((bar, i) => (
                    <Bar3D key={bar.label} bar={bar} index={i} inView={inView} mobile={isMobile} />
                  ))}
                </div>

                {/* Linha de base */}
                <div
                  className="mx-8 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, hsl(42,78%,55%,0.5) 40%, hsl(42,78%,55%,0.5) 60%, transparent 100%)",
                  }}
                />

                {/* Reflexo das barras no chão */}
                <div className="relative flex items-start gap-3 sm:gap-6 px-4 sm:px-8 pt-0 opacity-20 scale-y-[-1] blur-sm">
                  {bars.map((bar, i) => {
                    const barH = ((bar.value / bar.max) * (isMobile ? 160 : 280)) * 0.4;
                    return (
                      <div key={i} className="flex flex-col items-center" style={{ width: "68px" }}>
                        <motion.div
                          style={{
                            width: "44px",
                            background: `linear-gradient(180deg, ${bar.color} 0%, transparent 100%)`,
                            borderRadius: "0 0 2px 2px",
                          }}
                          initial={{ height: 0 }}
                          animate={inView ? { height: barH } : { height: 0 }}
                          transition={{ duration: 1.1, delay: 0.3 + i * 0.15 }}
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Glow dourado embaixo do gráfico */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: "80%",
                  height: "60px",
                  background:
                    "radial-gradient(ellipse, hsl(42,78%,55%,0.15) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
            </div>

            {/* Fonte */}
            <p className="text-[10px] text-muted-foreground mt-6 opacity-50">
              Fontes: IBGE, CBIC, Governo Federal, FGV • 2024
            </p>
          </motion.div>

          {/* ── DIREITA: Copy ────────────────────────────────────── */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-xs font-bold tracking-widest text-primary mb-6 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              O Mercado
            </motion.div>

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6"
            >
              O setor nunca teve tanto trabalho disponível...{" "}
              <span className="text-gradient-gold">
                então por que tantos profissionais continuam no mesmo lugar?
              </span>
            </motion.h2>

            {/* Parágrafo */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-base text-muted-foreground font-light leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
            >
              A construção civil representa mais de{" "}
              <span className="text-foreground font-medium">6% do PIB brasileiro</span>,
              emprega mais de{" "}
              <span className="text-foreground font-medium">8 milhões de pessoas</span>{" "}
              e carrega um déficit habitacional de{" "}
              <span className="text-foreground font-medium">8 milhões de moradias</span>.
              O Minha Casa Minha Vida projeta{" "}
              <span className="text-foreground font-medium">2 milhões de novas unidades</span>{" "}
              até 2026. O setor cresce acima da média da economia nacional há três anos
              consecutivos.
            </motion.p>

            {/* Destaque final */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="glass rounded-2xl p-5 border border-primary/20"
            >
              <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                Tem obra, tem cliente, tem dinheiro...{" "}
                <span className="text-primary font-bold">
                  Mas quem cresce mais não é quem trabalha mais — é quem está mais bem
                  posicionado, mais bem conectado e inserido no ambiente certo!
                </span>
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketContextSection;
