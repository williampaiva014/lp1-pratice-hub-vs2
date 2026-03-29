import { WhatsAppIcon } from "./ui/WhatsAppIcon";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5585987244622?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Pr%C3%A1tice%20Hub"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[99999] flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:scale-110 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={32} />
      
      {/* Bolinha piscando de "Online" */}
      <span className="absolute top-0 right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white/20"></span>
      </span>
      
      {/* Tooltip escondido */}
      <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
        Estamos online
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
