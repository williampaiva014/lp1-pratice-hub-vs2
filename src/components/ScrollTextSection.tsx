import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phrases = [
  "O Prátice Hub não |br| nasceu de uma ideia",
  "Nasceu de um limite.",
];

const ScrollTextSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Frase 1 ocupa 72% do scroll, frase 2 os 28% restantes
  const phraseRanges = [
    { start: 0,    mid: 0.36, end: 0.72 },
    { start: 0.72, mid: 0.86, end: 1.0  },
  ];

  return (
    <section id="scroll-section" ref={containerRef} className="h-[200vh] md:h-[400vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-primary/[0.08] blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center w-full min-h-[50vh] flex items-center justify-center">
          {phrases.map((phrase, i) => {
            const { start, mid, end } = phraseRanges[i];
            const rangeSize = end - start;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
            
            const words = phrase.split(" ");

            return (
              <motion.div 
                key={i}
                style={{ 
                  opacity,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                }}
                className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.15] md:leading-tight"
              >
                {words.map((word, wordIndex) => {
                  const wordOffset = wordIndex * (rangeSize * 0.004);
                  const wordStart = start + wordOffset;
                  const wordEnd = wordStart + (rangeSize * 0.03);

                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const wordY = useTransform(scrollYProgress, [wordStart, wordEnd], [50, 0]);
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const wordOpacity = useTransform(scrollYProgress, [wordStart, wordEnd], [0, 1]);

                    return word === "|br|" ? (
                      <br key={wordIndex} style={{ display: "block", content: "\"\"" }} />
                    ) : (
                      <motion.span
                        key={wordIndex}
                        style={{ 
                          display: "inline-block",
                          y: wordY,
                          opacity: wordOpacity,
                          marginRight: "0.25em"
                        }}
                        className={["Prátice", "Hub", "limite."].includes(word) ? "text-gradient-gold" : ""}
                      >
                        {word}
                      </motion.span>
                    );
                })}
              </motion.div>
            );
          })}
        </div>
        
        {/* Scroll Hint (Fixed exactly as reference image) for all devices */}
        <motion.div 
          className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-50 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex items-center gap-2">
            {/* Dots */}
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            {/* Yellow pill */}
            <div className="w-6 h-1.5 rounded-full bg-[hsl(42,90%,58%)]" />
          </div>
          {/* Separator */}
          <div className="h-4 w-px bg-white/10" />
          {/* Text */}
          <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase whitespace-nowrap">
            Role para continuar
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollTextSection;
