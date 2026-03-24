import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pauloRobson from "@/assets/paulo_robson.png";

const chapters = [
  {
    tag: "A DOR",
    title: "Eu já estive onde você está agora.",
    text: "Trabalhando mais do que deveria. Crescendo menos do que merecia. Achando que o problema era eu — que precisava de mais esforço, mais horas, mais capacidade técnica.",
    accent: "Mas o problema nunca foi capacidade.",
    cta: "QUERO ULTRAPASSAR O LIMITE",
  },
  {
    tag: "A QUEBRA",
    title: "Eu estava jogando o jogo errado.",
    text: "Tentando fazer tudo sozinho. Sem rede de apoio. Sem ambiente que me puxasse pra cima. Sem acesso às oportunidades que circulam entre quem já está conectado.",
    accent: "Quando entendi isso, tudo mudou.",
    cta: "QUERO ACESSAR UM NOVO AMBIENTE",
  },
  {
    tag: "O JOGO REAL",
    title: "Os que mais crescem não são os melhores tecnicamente.",
    text: "São os mais bem posicionados. Os que estão nos ambientes certos. Os que recebem indicações sem pedir. Os que são lembrados primeiro.",
    accent: "Posicionamento > capacidade.",
    cta: "QUERO ACELERAR",
  },
  {
    tag: "A VIRADA",
    title: "Eu criei o ambiente que eu queria ter tido.",
    text: "Reuni profissionais sérios, criei um ecossistema de troca real, e construí uma infraestrutura de negócios que funciona na palma da mão. Hoje, mais de 550 profissionais fazem parte.",
    accent: "E os resultados falam por si.",
    cta: "QUERO FAZER PARTE",
  },
];

const StorytellingSection = () => {
  return (
    <section id="story" className="relative py-32">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={pauloRobson}
              alt="Paulo Robson"
              className="mx-auto w-64 sm:w-80 md:w-96 drop-shadow-2xl"
            />
          </motion.div>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Minha história
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Uma jornada de{" "}
            <span className="text-gradient-gold">transformação</span>
          </h2>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {chapters.map((ch, i) => (
            <ChapterBlock key={ch.tag} chapter={ch} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ChapterBlock = ({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[number];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-gold-sm z-10"
      />

      <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-start ${isEven ? "" : "direction-rtl"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`${isEven ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16 lg:col-start-2"}`}
          style={{ direction: "ltr" }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3 px-3 py-1 rounded-full glass-gold">
            {chapter.tag}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            {chapter.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 text-base sm:text-lg">
            {chapter.text}
          </p>
          <p className="text-xl font-display font-semibold text-gradient-gold mb-6">
            {chapter.accent}
          </p>
          <a
            href="#final"
            className="inline-block px-6 py-3 rounded-full border border-primary/30 text-primary font-medium text-sm hover:bg-primary/10 transition-all duration-300"
          >
            {chapter.cta}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default StorytellingSection;
