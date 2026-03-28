import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import pauloRobson from "@/assets/paulo-robson2.png";

/* ─── Capítulos da história ─────────────────────────────────────── */
const chapters = [
  {
    year: "Origem",
    tag: "O COMEÇO",
    title: "Do interior do Nordeste. 14 mil habitantes.",
    text: "O ponto de partida não define o destino. Venho de uma realidade onde as oportunidades eram escassas, mas a visão era clara: o conhecimento técnico somado à estratégia de negócios é a única saída para a liberdade.",
    accent: "A engenharia foi o meio, o negócio foi o fim.",
  },
  {
    year: "A Jornada",
    tag: "A BUSCA",
    title: "Cresci, construí carreira, gerei resultado.",
    text: "Mas como a maioria dos profissionais da construção... cresci sozinho — e isso tem um preço. Percebi que o mercado estava saturado de bons técnicos que não sabiam vender.",
    accent: "",
  },
  {
    year: "2024",
    tag: "A VIRADA",
    title: "Ali, pela primeira vez, entendi o jogo de verdade.",
    text: "Um convite para um evento em Alphaville. Ambientes certos. Pessoas certas. Conexões que viraram negócios de alto nível. O Prátice Hub nasceu dessa necessidade de ambiência.",
    accent: "Networking é a moeda mais forte da construção civil.",
  },
  {
    year: "Hoje",
    tag: "A MISSÃO",
    title: "A maior infraestrutura de negócios.",
    text: "Não estamos mais falando apenas de construir casas. Estamos falando de construir impérios. O Prátice Hub é o seu QG para escala, tecnologia e conexões exclusivas.",
    accent: "",
  },
];

const N = chapters.length;

/* ─── Card de capítulo animado (desktop only) ───────────────────── */
const ChapterSlide = ({
  chapter,
  index,
  scrollYProgress,
}: {
  chapter: (typeof chapters)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const step = 1 / N;
  const start = index * step;
  const center = start + step * 0.5;
  const end = start + step;
  const isLast = index === N - 1;

  const opacity = useTransform(
    scrollYProgress,
    [start, center, end],
    [0, 1, isLast ? 1 : 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, center, end],
    [0.9, 1, isLast ? 1 : 0.95]
  );

  const y = useTransform(
    scrollYProgress,
    [start, center, end],
    [20, 0, isLast ? 0 : -20]
  );

  return (
    <motion.div
      style={{ opacity, scale, y, position: "absolute", inset: 0 }}
      className="flex flex-col justify-end pb-16 2xl:pb-24 px-8 xl:px-12 2xl:px-16 items-start text-left"
    >
      {/* [TAG] Label — exatamente como na referência */}
      <div className="flex items-center gap-2 mb-5">
        <span className="inline-flex items-center px-3 py-1 rounded-full glass-gold text-[10px] font-bold tracking-widest text-primary uppercase">
          {chapter.tag}
        </span>
        <span className="text-sm font-semibold text-white/60 tracking-wide">
          {chapter.year}
        </span>
      </div>

      <h3 className="font-display text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-tight mb-4 max-w-xl 2xl:max-w-2xl">
        {chapter.title}
      </h3>

      <p className="text-muted-foreground text-base leading-relaxed mb-5 max-w-lg">
        {chapter.text}
      </p>

      {chapter.accent && (
        <div className="glass rounded-xl p-4 border border-primary/20 max-w-lg">
          <p className="text-primary font-semibold text-sm sm:text-base leading-snug italic">
            "{chapter.accent}"
          </p>
        </div>
      )}
    </motion.div>
  );
};

/* ─── Seção principal ────────────────────────────────────────────── */
const StorytellingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * N), N - 1);
    setActiveChapter(idx);
  });

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative lg:h-[400vh] bg-transparent text-white"
    >
      {/* ── Glow bg ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      {/* ══════════════════════════════════════
          DESKTOP: Sticky / Scroll-lock total
          ══════════════════════════════════════ */}
      <div className="sticky top-0 h-screen hidden lg:flex flex-col overflow-hidden">

        {/* Header — dentro do sticky para o lock funcionar corretamente */}
        <div className="flex flex-col items-center text-center pt-20 xl:pt-24 pb-3 px-6 relative z-30 flex-shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Minha História
          </div>
          <h2 className="font-display text-4xl xl:text-5xl font-bold leading-tight">
            Uma decisão que{" "}
            <span className="text-gradient-gold">mudou o jogo.</span>
          </h2>
        </div>

        {/* Conteúdo: coluna esquerda (imagem) + coluna direita (capítulos) */}
        <div className="flex-1 flex overflow-hidden relative z-10 min-h-0">
          <div className="w-full max-w-[1400px] mx-auto flex flex-row h-full px-8 2xl:px-16">

            {/* ESQUERDA: Paulo — alinhado ao topo para aparecer junto ao título */}
            <div className="flex w-[48%] 2xl:w-[50%] flex-shrink-0 items-start justify-center h-full pt-8 relative">
              <div className="absolute inset-0 pointer-events-none flex items-start justify-center pt-4">
                <div className="w-[600px] h-[600px] bg-primary/[0.05] blur-[140px] rounded-full" />
              </div>
              <img
                src={pauloRobson}
                alt="Paulo Robson"
                className="relative z-10 w-full max-w-[480px] 2xl:max-w-[580px] h-[92%] object-contain object-top select-none"
              />
            </div>

            {/* Linha divisória */}
            <div className="w-px flex-shrink-0 h-3/4 self-center bg-gradient-to-b from-transparent via-primary/20 to-transparent mx-2" />

            {/* DIREITA: capítulos animados */}
            <div className="flex-1 relative h-full overflow-hidden">
              {chapters.map((ch, i) => (
                <ChapterSlide
                  key={ch.tag}
                  chapter={ch}
                  index={i}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Rodapé: dots de progresso + scroll hint */}
        <div className="relative z-10 py-4 px-8 flex items-center justify-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            {chapters.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeChapter ? "24px" : "6px",
                  height: "6px",
                  background: i === activeChapter
                    ? "hsl(42,90%,58%)"
                    : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase opacity-40">
            Role para continuar
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE: Timeline Estática (sem trava)
          ══════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col px-6 pb-16">

        {/* Header mobile */}
        <div className="flex flex-col items-center text-center pt-10 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-[10px] font-bold tracking-widest text-primary uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Minha História
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            Uma decisão que{" "}
            <span className="text-gradient-gold">mudou o jogo.</span>
          </h2>
        </div>

        {/* Imagem Paulo — Mobile (completa, sem bordas, com glow) */}
        <div className="flex justify-center mb-10 relative">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[280px] h-[280px] bg-primary/[0.1] blur-[80px] rounded-full" />
          </div>
          <img
            src={pauloRobson}
            alt="Paulo Robson"
            className="relative z-10 w-full max-w-[300px] object-contain"
          />
        </div>

        {/* Capítulos — todos visíveis de uma vez */}
        <div className="space-y-12">
          {chapters.map((ch) => (
            <div key={ch.tag} className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3 w-full">
                <span className="text-primary font-display text-3xl font-extrabold opacity-40 leading-none">
                  {ch.year}
                </span>
                <div className="h-px flex-1 bg-primary/20" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full glass-gold text-[10px] font-bold tracking-widest text-primary uppercase mb-3">
                {ch.tag}
              </div>

              <h3 className="font-display text-xl font-bold leading-tight mb-3 text-white">
                {ch.title}
              </h3>

              <p className="text-muted-foreground text-base leading-relaxed mb-3">
                {ch.text}
              </p>

              {ch.accent && (
                <div className="glass rounded-xl p-4 border border-primary/20 w-full">
                  <p className="text-primary font-semibold text-sm leading-snug italic">
                    "{ch.accent}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default StorytellingSection;
