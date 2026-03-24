import logoPrata from "@/assets/logo-prata.png";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="#hero" className="flex items-center">
        <img src={logoPrata} alt="Prátice Hub" className="h-6" />
      </a>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
