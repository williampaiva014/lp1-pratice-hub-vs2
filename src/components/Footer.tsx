const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-display text-sm">
        <span className="text-gradient-gold font-bold">Prátice</span>{" "}
        <span className="text-foreground">Hub</span>{" "}
        <span className="text-muted-foreground">© {new Date().getFullYear()}</span>
      </p>
      <p className="text-xs text-muted-foreground">
        Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
