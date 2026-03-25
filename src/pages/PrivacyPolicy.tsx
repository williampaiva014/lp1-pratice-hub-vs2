import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import logoPrata from "@/assets/logo pratice3.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="border-b border-white/5 py-6 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Voltar</span>
          </Link>
          <img src={logoPrata} alt="Prátice Hub" className="h-6" />
          <div className="w-10" /> {/* Spacer */}
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="text-primary" size={24} />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">Política de Privacidade</h1>
              <p className="text-sm text-muted-foreground">Última atualização: Março de 2024</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-semibold mb-4">1. Introdução</h2>
              <p>
                A sua privacidade é importante para nós. É política do Prátice Hub respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Prátice Hub, e outros sites que possuímos e operamos.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">2. Coleta de Dados</h2>
              <p>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Dados de navegação (Cookies e Pixels) para análise de tráfego.</li>
                <li>Informações de contato (quando fornecidas voluntariamente em nossos formulários).</li>
                <li>Dados técnicos como endereço IP, tipo de navegador e localização aproximada.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">3. Uso de Informações</h2>
              <p>
                Usamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Personalizar sua experiência no ecossistema.</li>
                <li>Melhorar nossa infraestrutura de negócios e serviços.</li>
                <li>Enviar atualizações sobre oportunidades na rede (com sua autorização).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">4. Retenção de Dados</h2>
              <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">5. Link para Terceiros</h2>
              <p>
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">6. Consentimento</h2>
              <p>
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
