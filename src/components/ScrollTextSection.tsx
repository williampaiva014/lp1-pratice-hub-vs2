import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phrases = [
  "Foi por isso que eu criei",
  "o Prátice Hub.",
  "O maior ecossistema do Brasil",
  "onde",
  "oportunidades já estão circulando",
  "profissionais já estão se conectando",
  "negócios já estão acontecendo"
];

const ScrollTextSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rangePerPhrase = 1 / phrases.length;

  return (
    <section id="scroll-section" ref={containerRef} className="h-[400vh] md:h-[800vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-primary/[0.08] blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center w-full min-h-[50vh] flex items-center justify-center">
          {phrases.map((phrase, i) => {
            const start = i * rangePerPhrase;
            const end = (i + 1) * rangePerPhrase;
            const mid = (start + end) / 2;
            
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
                  const wordOffset = wordIndex * (rangePerPhrase * 0.1);
                  const wordStart = start + wordOffset;
                  const wordEnd = wordStart + (rangePerPhrase * 0.3);

                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const wordY = useTransform(scrollYProgress, [wordStart, wordEnd], [50, 0]);
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const wordOpacity = useTransform(scrollYProgress, [wordStart, wordEnd], [0, 1]);

                  return (
                    <motion.span
                      key={wordIndex}
                      style={{ 
                        display: "inline-block",
                        y: wordY,
                        opacity: wordOpacity,
                        marginRight: "0.25em"
                      }}
                      className={["Prátice", "Hub.", "Brasil", "oportunidades", "profissionais", "negócios"].includes(word) ? "text-gradient-gold" : ""}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollTextSection;
