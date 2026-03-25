import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import logoPrata from "@/assets/logo pratice3.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
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
                <a href="#scroll-section" className="text-sm text-muted-foreground hover:text-primary transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#benefits" className="text-sm text-muted-foreground hover:text-primary transition-colors">Vantagens</a>
              </li>
              <li>
                <a href="#proof" className="text-sm text-muted-foreground hover:text-primary transition-colors">Resultados</a>
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
