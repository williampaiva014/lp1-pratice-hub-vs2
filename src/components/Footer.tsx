import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import logoPrata from "@/assets/logo pratice3.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2 text-center md:text-left">
            <Link to="/" className="inline-block mb-6">
              <img src={logoPrata} alt="Prátice Hub" className="h-12 md:h-16 mx-auto md:mx-0 object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto md:mx-0 leading-relaxed mb-6">
              A primeira infraestrutura de negócios completa para profissionais da construção. 
              Um ecossistema criado para quem decidiu escalar de verdade.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-primary font-medium uppercase tracking-widest">
              <Shield size={14} />
              Ambiente Seguro e Verificado
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-display font-semibold mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <a href="#market" className="text-sm text-muted-foreground hover:text-primary transition-colors">O Mercado</a>
              </li>
              <li>
                <a href="#story" className="text-sm text-muted-foreground hover:text-primary transition-colors">História</a>
              </li>
              <li>
                <a href="#para-quem" className="text-sm text-muted-foreground hover:text-primary transition-colors">Para Quem É</a>
              </li>
              <li>
                <a href="#differentiation" className="text-sm text-muted-foreground hover:text-primary transition-colors">Diferenciais</a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-display font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <span className="text-xs text-muted-foreground/50 block mt-4">
                  CNPJ: 00.000.000/0001-00
                </span>
              </li>
            </ul>
          </div>

          {/* ── Baixe o App ── */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-display font-semibold mb-6">Baixe o Aplicativo</h4>
            <p className="text-muted-foreground text-xs mb-6 max-w-[200px] mx-auto md:mx-0 leading-relaxed">
              Leve o ecossistema Prátice Hub sempre com você.
            </p>
            <div className="flex flex-col gap-3 items-center md:items-start">
              {/* Apple Store */}
              <a 
                href="https://apps.apple.com/us/app/pr%C3%A1tice-hub/id6760728943" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
              >
                <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="135" height="40" rx="6" fill="black" stroke="#A1A1AA" strokeWidth="0.8"/>
                  <path d="M22.036 21.066c-.021-.19-.033-.377-.033-.566s.012-.376.033-.566a5.122 5.122 0 0 1 2.91-4.108 5.755 5.755 0 0 1-5.067-2.618 6.075 6.075 0 1 1 5.067 11.458 5.122 5.122 0 0 1-2.91-4.041c-.021.144-.033.287-.033.441" fill="white" transform="translate(0, 3)"/>
                  <path d="M21.282 13.911a3.674 3.674 0 0 1-.954-2.5 3.553 3.553 0 0 1 2.37-3.411c.144.97-.245 1.956-.942 2.65-.697.693-1.637.953-2.585.953-.153 0-.306-.01-.46-.03-.021.173-.031.354-.034.538 0 1.053.472 2.051 1.259 2.766a3.553 3.553 0 0 1-1.23.034" fill="white" transform="translate(0, 3)"/>
                  <text fill="white" fontSize="7" fontWeight="500" font-family=" Kanit, sans-serif" x="38" y="16">Download on the</text>
                  <text fill="white" fontSize="16" fontWeight="700" font-family="Kanit, sans-serif" x="38" y="32">App Store</text>
                </svg>
              </a>
              {/* Play Store */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.praticehub.comunidade" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
              >
                <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="135" height="40" rx="6" fill="black" stroke="#A1A1AA" strokeWidth="0.8"/>
                  <path d="M12.923 27.24a2.21 2.21 0 0 1-.212-.962V13.722c0-.366.07-.711.212-.962l8.74 8.74-8.74 5.74zM24.164 21.5l1.9-1.2c.45-.26.45-.73 0-.9l-1.9-1.2-1.914 1.914 1.914 1.386zM21.146 12.3l-7.796-4.56a1.053 1.053 0 0 0-.58-.16c-.225 0-.44.06-.62.16l8.82 8.82L24.164 21.5l-3.018-9.2zM21.146 30.7l-7.796 4.56c-.18.1-.395.16-.62.16-.21 0-.41-.06-.58-.16l8.82-8.82L24.164 21.5l-3.018 9.2z" fill="#00C0FF" transform="translate(5, 0) scale(1.1)"/>
                  <text fill="white" fontSize="7" fontWeight="500" font-family="Kanit, sans-serif" x="38" y="16">GET IT ON</text>
                  <text fill="white" fontSize="16" fontWeight="700" font-family="Kanit, sans-serif" x="38" y="32">Google Play</text>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prátice Hub. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-muted-foreground/30 uppercase tracking-widest">
            Feito para quem constrói o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
