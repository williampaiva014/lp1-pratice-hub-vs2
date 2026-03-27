import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pauloRobson from "@/assets/paulo-robson2.png";

/* ─── Capítulos da história ─────────────────────────────────────── */
const chapters = [
  {
    year: "Origem",
    tag: "O COMEÇO",
    title: "Interior do Ceará. 14 mil habitantes.",
    text: "Eu nasci e cresci no interior do Ceará, numa cidade de 14 mil habitantes. Sem acesso. Sem conexões. Sem quem abrisse portas. Só com uma decisão: dar certo.",
    accent: "",
  },
  {
    year: "A Ascensão",
    tag: "A JORNADA",
    title: "Cresci, construí carreira, gerei resultado.",
    text: "E eu fui... Cresci, construí carreira, gerei resultado. Mas como a maioria dos profissionais da construção... cresci sozinho — e isso tem um preço.",
    accent: "",
  },
  {
    year: "2024",
    tag: "O CALOTE",
    title: "Centenas de milhares de reais perdidos.",
    text: "Em 2024, esse teto chegou. Sofri um calote pesado de um parceiro próximo. Centenas de milhares de reais perdidos. Não foi só dinheiro — foi confiança, foi estrutura.",
    accent: "E se o problema não for falta de esforço, mas o fato de estar tentando fazer tudo sozinho?",
  },
  {
    year: "A Virada",
    tag: "ALPHAVILLE",
    title: "Ali, pela primeira vez, entendi o jogo de verdade.",
    text: "Um convite para um evento em Alphaville. Fui. E ali, pela primeira vez, entendi o jogo de verdade. Ambientes certos. Pessoas certas. Conexões que viraram negócios.",
    accent: "",
  },
  {
    year: "< 1 ano",
    tag: "A REFERÊNCIA",
    title: "A maior referência do Brasil em regularização de INSS de obras.",
    text: "Em menos de um ano me tornei a maior referência do Brasil em regularização de INSS de obras. Em dezembro de 2025 voltei para Alphaville — desta vez para fazer o meu próprio evento, ao lado de quem antes eu só admirava de longe.",
    accent: "",
  },
  {
    year: "Hoje",
    tag: "O HUB",
    title: "Para que você não precise passar pelo mesmo ciclo.",
    text: "O Prátice Hub existe para que você não precise passar pelo mesmo ciclo. Você entra direto no ambiente certo.",
    accent: "Você entra direto no ambiente certo.",
  },
];

const N = chapters.length;

/* ─── Card de capítulo animado ──────────────────────────────────── */
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
    isLast
      ? [start, start + step * 0.15, center]
      : [start, start + step * 0.15, center, end - step * 0.15, end],
    isLast ? [0, 1, 1] : [0, 1, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    isLast
      ? [start, start + step * 0.2]
      : [start, start + step * 0.2, end - step * 0.2, end],
    isLast ? [40, 0] : [40, 0, 0, -30]
  );

  return (
    <motion.div
      style={{ opacity, y, position: "absolute", inset: 0 }}
      className="flex flex-col justify-center px-4 sm:px-6 lg:px-2"
    >
      {/* Tag + ano */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full glass-gold text-xs sm:text-sm font-bold tracking-[0.15em] text-primary uppercase">
          {chapter.tag}
        </span>
        <span className="text-xs text-muted-foreground font-medium">{chapter.year}</span>
      </div>

      {/* Título */}
      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl 2xl:text-3xl font-bold leading-tight mb-4 sm:mb-5 text-foreground">
        {chapter.title}
      </h3>

      {/* Texto */}
      <p className="text-muted-foreground text-base leading-relaxed mb-4 sm:mb-5">
        {chapter.text}
      </p>

      {/* Accent */}
      {chapter.accent && (
        <div className="glass rounded-xl p-3 sm:p-4 border border-primary/20">
          <p className="text-primary font-semibold text-sm sm:text-base leading-snug italic">
            "{chapter.accent}"
          </p>
        </div>
      )}

      {/* Dots indicadores */}
      <div className="flex gap-1.5 mt-6 sm:mt-8">
        {chapters.map((_, j) => (
          <div
            key={j}
            className={`h-1 rounded-full transition-all duration-300 ${
              j === index ? "w-8 bg-primary" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Seção principal ────────────────────────────────────────────── */
const StorytellingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="story"
      ref={sectionRef}
      style={{ height: `${(N + 1) * 100}vh` }}
      className="relative"
    >
      {/* ── Sticky wrapper ── */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] lg:h-[800px] overflow-hidden flex flex-col">

        {/* Glow bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />
        </div>

        {/* ── Header centralizado ── */}
        <div className="flex flex-col items-center text-center pt-8 sm:pt-10 lg:pt-16 2xl:pt-12 pb-3 sm:pb-4 px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Minha História
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
            Uma decisão que{" "}
            <span className="text-gradient-gold">mudou o jogo.</span>
          </h2>
        </div>

        {/* ── Imagem mobile (entre header e timeline) ── */}
        <div className="lg:hidden flex-shrink-0 flex justify-center px-6 pb-2">
          <img
            src={pauloRobson}
            alt="Paulo Robson"
            className="h-56 sm:h-64 w-auto object-contain object-top drop-shadow-[0_10px_40px_rgba(255,190,40,0.2)] select-none"
          />
        </div>

        {/* ── Corpo: duas colunas desktop / coluna única mobile ── */}
        <div className="flex-1 flex overflow-hidden relative z-10 min-h-0">
          <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row h-full">

            {/* ESQUERDA: imagem Paulo — apenas desktop */}
            <div className="hidden lg:flex w-[44%] flex-shrink-0 items-center justify-center h-full">
              <img
                src={pauloRobson}
                alt="Paulo Robson"
                className="h-full max-h-[560px] 2xl:max-h-[520px] w-auto object-contain object-center drop-shadow-[0_20px_60px_rgba(255,190,40,0.18)] select-none"
              />
            </div>

            {/* Linha divisória — apenas desktop */}
            <div className="hidden lg:block w-px flex-shrink-0 h-3/4 self-center bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

            {/* DIREITA (ou full-width mobile): capítulos */}
            <div className="flex-1 relative h-full">
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

        {/* ── Barra de progresso ── */}
        <div className="relative z-10 pb-4 sm:pb-6 px-6 flex items-center justify-center gap-3">
          <div className="h-0.5 w-28 sm:w-32 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase opacity-50">
            Role para continuar
          </span>
        </div>

      </div>
    </section>
  );
};

export default StorytellingSection;
