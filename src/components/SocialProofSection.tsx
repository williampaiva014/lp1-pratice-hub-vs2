import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Estatísticas de destaque ──────────────────────────────────── */
const stats = [
  {
    number: "+550",
    label: "profissionais dentro do ecossistema",
    icon: "👷",
  },
  {
    number: "Diário",
    label: "indicações acontecendo entre membros",
    icon: "🤝",
  },
  {
    number: "R$ 10M+",
    label: "já gerados em economia para clientes",
    icon: "💰",
  },
];

/* ─── Cards do carrossel infinito ───────────────────────────────── */
const testimonials = [
  {
    type: "depoimento",
    name: "Rafael Mendonça",
    role: "Engenheiro Civil · São Paulo",
    text: "Em 3 meses dentro do Prátice Hub, fechei 2 parcerias e economizei R$ 42k em insumos. Não tem como voltar atrás.",
    avatar: "RM",
    stars: 5,
  },
  {
    type: "resultado",
    name: "Construtora Neto & Silva",
    role: "Construtora · Goiânia",
    text: "A indicação de um colega do Hub me gerou R$ 180k em obra. Em 15 dias. É o ambiente certo.",
    avatar: "NS",
    stars: 5,
  },
  {
    type: "depoimento",
    name: "Mariana Figueiredo",
    role: "Arquiteta de Interiores · Curitiba",
    text: "O networking que eu tentei montar há anos, o Hub me entregou em semanas. Parcerias reais, projetos reais.",
    avatar: "MF",
    stars: 5,
  },
  {
    type: "resultado",
    name: "Lucas Andrade",
    role: "Corretor de Imóveis · Brasília",
    text: "Foram 4 fechamentos em 60 dias graças a indicações que vieram do ecossistema. O ROI é absurdo.",
    avatar: "LA",
    stars: 5,
  },
  {
    type: "depoimento",
    name: "Carla Dutra",
    role: "Engenheira Civil · Rio de Janeiro",
    text: "Não sabia que existia um ambiente assim para a construção civil. Hoje não consigo imaginar meu negócio sem ele.",
    avatar: "CD",
    stars: 5,
  },
  {
    type: "resultado",
    name: "Diego Pereira",
    role: "Construtor · Belo Horizonte",
    text: "Economizei mais de R$ 90k em compras coletivas só no primeiro trimestre. O Hub paga ele mesmo e muito mais.",
    avatar: "DP",
    stars: 5,
  },
  {
    type: "depoimento",
    name: "Ana Paula Costa",
    role: "Arquiteta · Salvador",
    text: "A qualidade das conexões aqui é de outro nível. Não é troca de cartão — é parceria séria com profissional de verdade.",
    avatar: "AC",
    stars: 5,
  },
  {
    type: "resultado",
    name: "Marcos Teixeira",
    role: "Engenheiro · Florianópolis",
    text: "Indiquei um parceiro do Hub e recebi comissão. Ele fechou o projeto e trouxe mais dois clientes pra mim. Ciclo virtuoso.",
    avatar: "MT",
    stars: 5,
  },
];

/* ─── Card individual ────────────────────────────────────────────── */
const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => (
  <div
    className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex flex-col gap-3"
    style={{ minHeight: "180px" }}
  >
    {/* Stars */}
    <div className="flex gap-0.5">
      {Array.from({ length: item.stars }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>

    {/* Texto */}
    <p className="text-gray-700 text-sm leading-relaxed flex-1">
      "{item.text}"
    </p>

    {/* Autor */}
    <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        {item.avatar}
      </div>
      <div>
        <p className="text-gray-900 text-xs font-bold leading-tight">{item.name}</p>
        <p className="text-gray-400 text-[10px]">{item.role}</p>
      </div>
    </div>
  </div>
);

/* ─── Carrossel infinito ─────────────────────────────────────────── */
const InfiniteCarousel = () => {
  // Duplica os itens para criar o loop sem interrupção
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade esquerdo */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
      />
      {/* Fade direito */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
      />

      {/* Track animado */}
      <motion.div
        className="flex gap-4 py-2"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

/* ─── Seção principal ────────────────────────────────────────────── */
const SocialProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proof-hub" className="relative py-20 md:py-28 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>

        {/* ── Card branco com bordas arredondadas ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)" }}
        >
          {/* ── Topo: Chip + Título + Stats ── */}
          <div className="px-8 sm:px-12 pt-12 pb-10">

            {/* Chip + Título – centralizados */}
            <div className="flex flex-col items-center text-center mb-10">

              {/* Chip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                style={{
                  background: "linear-gradient(135deg, hsl(42,78%,55%) 0%, hsl(36,70%,45%) 100%)",
                  color: "#1a1008",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                Um Movimento Real
              </motion.div>

              {/* Título */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900"
              >
                Uma infraestrutura de negócios{" "}
                <span style={{ background: "linear-gradient(135deg, hsl(42,78%,45%) 0%, hsl(36,70%,35%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  real e pulsante.
                </span>
              </motion.h2>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.12 }}
                  className="flex flex-col items-center text-center gap-1 rounded-2xl px-6 py-6"
                  style={{ background: "#f9f9f9", boxShadow: "0 4px 20px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-3xl mb-1">{stat.icon}</span>
                  <span
                    className="font-display text-3xl sm:text-4xl font-bold"
                    style={{ background: "linear-gradient(135deg, hsl(42,78%,45%) 0%, hsl(36,70%,35%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {stat.number}
                  </span>
                  <span className="text-gray-500 text-sm leading-snug">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Linha divisória */}
          <div className="mx-8 sm:mx-12 h-px bg-gray-100" />

          {/* ── Carrossel ── */}
          <div className="py-8 px-0">
            <InfiniteCarousel />
          </div>

          {/* ── Rodapé do card ── */}
          <div className="px-8 sm:px-12 pb-10 border-t border-gray-100 pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-center text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Parcerias estão sendo formadas. Novos negócios estão surgindo.{" "}
              <span className="text-gray-900 font-bold">
                O ambiente já existe. Você só ainda não entrou!
              </span>
            </motion.p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
