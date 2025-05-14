import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
// Trocar logo para a nova recebida e garantir alinhamento
import rodeioLogo from "/lovable-uploads/03276840-4600-4c77-9175-778a068c5bab.png";
import cervejaLogo from "../assets/cerveja-oficial.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-rodeo-darker/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 flex items-center justify-between">
            {/* Logo + cerveja block alinhados centralizadamente */}
            <div className="flex items-center space-x-4">
              <img 
                src={rodeioLogo} 
                alt="Macedônia Rodeio Show" 
                className="h-14 md:h-16 object-contain"
                style={{ background: "transparent" }}
              />
              {/* Cerveja Oficial alinhado verticalmente */}
              <div className="hidden md:flex flex-row items-center gap-2 bg-rodeo-dark/70 rounded-lg border border-rodeo-gold/70 gold-glow px-4 py-2 min-w-[210px] max-w-[330px] ml-4 h-[48px]">
                <span className="text-sm text-rodeo-gold font-semibold whitespace-nowrap">Cerveja Oficial:</span>
                <img
                  src={cervejaLogo}
                  alt="Cerveja Oficial"
                  className="h-8 md:h-9 ml-2 object-contain"
                  style={{ maxWidth: "80px", marginTop: "0px" }}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex space-x-6">
                <li>
                  <button onClick={() => handleNavClick("home")} className="text-white hover:text-rodeo-gold transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("ingressos")} className="text-white hover:text-rodeo-gold transition-colors">
                    Ingressos
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("programacao")} className="text-white hover:text-rodeo-gold transition-colors">
                    Programação
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("rancho-balada")} className="text-white hover:text-rodeo-gold transition-colors">
                    Rancho Balada
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("patrocinadores")} className="text-white hover:text-rodeo-gold transition-colors">
                    Patrocinadores
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("contato")} className="text-white hover:text-rodeo-gold transition-colors">
                    Contato
                  </button>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="border-rodeo-gold text-rodeo-gold hover:bg-rodeo-gold hover:text-rodeo-dark"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-rodeo-dark border-t-2 border-rodeo-gold/50">
            <div className="container mx-auto px-4">
              <ul className="py-4 space-y-3">
                <li>
                  <button 
                    onClick={() => handleNavClick("home")} 
                    className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("ingressos")} 
                    className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors"
                  >
                    Ingressos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("programacao")} 
                    className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors"
                  >
                    Programação
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("rancho-balada")} 
                    className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors"
                  >
                    Rancho Balada
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("patrocinadores")} 
                    className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors"
                  >
                    Patrocinadores
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("contato")} 
                    className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
              
              {/* Cerveja Oficial mobile bem alinhado */}
              <div className="flex items-center justify-center py-3 border-t border-rodeo-gold/50 gap-2 min-w-[210px]">
                <span className="text-xs text-rodeo-gold font-medium whitespace-nowrap">Cerveja Oficial:</span>
                <img 
                  src={cervejaLogo}
                  alt="Cerveja Oficial"
                  className="h-7 md:h-8 object-contain ml-1"
                  style={{ maxWidth: "63px", marginTop: "0px" }}
                />
              </div>
            </div>
          </nav>
        )}
        
        {/* Fixed WhatsApp Button */}
        <a 
          href="https://wa.me/5517997799982" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors gold-glow"
          aria-label="Contato via WhatsApp"
        >
          <Phone size={24} />
        </a>
      </header>
    </>
  );
};

export default Header;
