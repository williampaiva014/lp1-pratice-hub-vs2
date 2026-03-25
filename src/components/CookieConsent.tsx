import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "granted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="glass-gold p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                <Cookie className="text-primary" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-display font-semibold mb-2">Respeitamos sua privacidade</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Usamos cookies para melhorar sua experiência e analisar o tráfego do Prátice Hub. 
                  Ao continuar, você concorda com nossa política.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 btn-gold-gradient py-2.5 rounded-xl text-sm font-semibold transition-transform active:scale-95"
                  >
                    Aceitar Tudo
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-2.5 text-muted-foreground hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
