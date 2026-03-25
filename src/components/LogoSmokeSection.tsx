import { useState, useRef } from "react";
import { motion } from "framer-motion";
import logoPrata from "@/assets/logo pratice3.png";

const LogoSmokeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative min-h-[50vh] md:min-h-[80vh] bg-background flex flex-col items-center justify-center overflow-hidden pt-4 pb-16 md:pb-32">
      {/* Radial glow consistent with Hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5 }}
        className="relative flex items-center justify-center w-full max-w-[1400px] px-6 cursor-crosshair h-full"
      >
        {/* Base Logo: 100% no mobile, opacidade baixa no desktop para o efeito de mouse */}
        <img 
          src={logoPrata} 
          alt="Prátice Hub Base" 
          className="w-[70vw] max-w-[500px] object-contain opacity-100 md:opacity-[0.08] transition-opacity duration-1000"
        />

        {/* Revelação Spotlight Logo: Apenas para Desktop */}
        <div 
          className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none transition-opacity duration-500 ease-out"
          style={{
            opacity: isHovering ? 1 : 0,
            WebkitMaskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black 5%, transparent 70%)`,
            maskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black 5%, transparent 70%)`
          }}
        >
          <img 
            src={logoPrata} 
            alt="Prátice Hub Highlight" 
            className="w-[70vw] max-w-[500px] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          />
        </div>
      </motion.div>

      {/* Novo Bloco de Texto Adicionado (Headline, Subheadline e Botão) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="container mx-auto px-6 text-center max-w-4xl relative z-10 mt-16"
      >
        <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] md:leading-tight mb-6">
          Isso que vou te apresentar,<br />
          não é um grupo. Não é um curso.<br />
          <span className="text-gradient-gold">É uma infraestrutura de negócios.</span>
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light lg:leading-[1.8]">
          Um ecossistema completo dentro de um app na palma da sua mão, criado do zero para 
          engenheiros, arquitetos, construtores, corretores, corbans e profissionais da 
          construção que decidiram ir além do crescimento limitado de quem tenta sozinho.
        </p>

        <a href="#benefits" className="inline-block px-10 py-4 rounded-full btn-gold-gradient font-display font-bold text-lg hover:shadow-[0_0_30px_rgba(255,190,40,0.4)] transition-all">
          Quero saber mais
        </a>
      </motion.div>
    </section>
  );
};

export default LogoSmokeSection;
