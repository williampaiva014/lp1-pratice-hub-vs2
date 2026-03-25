import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import logoPrata from "@/assets/logo pratice3.png";

const TermsOfUse = () => {
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
              <FileText className="text-primary" size={24} />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">Termos de Uso</h1>
              <p className="text-sm text-muted-foreground">Última atualização: Março de 2024</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-white text-xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar o site do Prátice Hub, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">2. Licença de Uso</h2>
              <p>
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Prátice Hub, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modificar ou copiar os materiais;</li>
                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">3. Isenção de Responsabilidade</h2>
              <p>
                Os materiais no site do Prátice Hub são fornecidos 'como estão'. O Prátice Hub não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">4. Limitações</h2>
              <p>
                Em nenhum caso o Prátice Hub ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Prátice Hub.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">5. Precisão dos Materiais</h2>
              <p>
                Os materiais exibidos no site do Prátice Hub podem incluir erros técnicos, tipográficos ou fotográficos. Prátice Hub não garante que qualquer material em seu site seja preciso, completo ou atual. Prátice Hub pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-semibold mb-4">6. Modificações</h2>
              <p>
                O Prátice Hub pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsOfUse;
