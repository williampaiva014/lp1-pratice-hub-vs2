import { motion } from "framer-motion";

/**
 * Divisor entre a Hero Section e a seção seguinte.
 * SVG com curva em U (arco côncavo) e gradiente dourado
 * que fade para transparente nas duas pontas.
 */
const HeroDivider = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "60px", marginTop: "-30px" }}>
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        viewBox="0 0 1440 20"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gold-divider-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="hsl(42, 78%, 55%)" stopOpacity="0" />
            <stop offset="20%"  stopColor="hsl(42, 78%, 55%)" stopOpacity="0.6" />
            <stop offset="50%"  stopColor="hsl(42, 85%, 65%)" stopOpacity="1" />
            <stop offset="80%"  stopColor="hsl(42, 78%, 55%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(42, 78%, 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/*
          Linha reta → curva em U de 10px no centro → linha reta
          L = linha reta | Q = bezier quadrático (curva suave)
          Control point em (720, 18) faz a curva descer 10px
        */}
        <path
          d="M 0,2 L 540,2 Q 720,10 900,2 L 1440,2"
          fill="none"
          stroke="url(#gold-divider-h)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Brilho sutil – linha mais fina por baixo */}
        <path
          d="M 0,2 L 540,2 Q 720,10 900,2 L 1440,2"
          fill="none"
          stroke="url(#gold-divider-h)"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.35"
        />
      </motion.svg>
    </div>
  );
};

export default HeroDivider;
