import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Star, BookOpen, BarChart3, LogIn, Instagram, Linkedin, Phone } from "lucide-react";
import logoPrata from "@/assets/logo pratice3.png";

const navItems = [
  { label: "Início", href: "#hero", icon: Home },
  { label: "O Mercado", href: "#market", icon: BarChart3 },
  { label: "História", href: "#story", icon: BookOpen },
  { label: "Para Quem", href: "#para-quem", icon: Star },
  { label: "Diferenciais", href: "#cta-final", icon: LogIn },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    // Observer para verificar se a scroll-section está visível
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se 10% ou mais da seção estiver visível, ela está na tela
          if (entry.isIntersecting) {
            setIsDarkSection(true);
          } else {
            setIsDarkSection(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const scrollSection = document.getElementById("scroll-section");
    if (scrollSection) {
      observer.observe(scrollSection);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollSection) {
        observer.unobserve(scrollSection);
      }
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-500 ${
        isDarkSection ? "bg-[#050505] py-3" : scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={logoPrata} alt="Prátice Hub" className="h-9 lg:h-10 xl:h-12" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta-final"
            className="px-4 lg:px-5 xl:px-5 py-1.5 lg:py-2 text-xs lg:text-sm font-bold rounded-full btn-gold-gradient whitespace-nowrap"
          >
            Acessar Agora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu - Drawer Fullscreen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100000] bg-black md:hidden flex flex-col h-[100dvh] w-screen"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
              <img src={logoPrata} alt="Prátice Hub" className="h-10" />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-8 py-12 flex flex-col gap-6 overflow-y-auto">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-lg font-medium text-foreground active:scale-95 transition-all"
                >
                  <item.icon className="text-primary" size={24} />
                  {item.label}
                </motion.a>
              ))}
              
              <motion.a
                href="#final"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-5 rounded-2xl btn-gold-gradient text-center font-bold text-lg shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
              >
                ACESSAR AGORA
              </motion.a>
            </div>

            {/* Mini Footer */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02]">
              <div className="flex items-center justify-center gap-6 mb-6">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                  <Phone size={20} />
                </a>
              </div>
              <p className="text-center text-xs text-muted-foreground font-medium tracking-widest uppercase opacity-60">
                Conectando a elite da construção
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
