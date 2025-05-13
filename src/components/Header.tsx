
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import imperioLogo from "../assets/imperio-logo.png";
import rodeioLogo from "../assets/logo-rodeio.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const eventDate = new Date("June 5, 2025").getTime();
    
    const updateCounter = () => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;
      const days = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000 * 60 * 60); // Update every hour
    
    return () => clearInterval(interval);
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-rodeo-darker/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center space-x-4">
            <img 
              src={rodeioLogo} 
              alt="Macedônia Rodeio Show" 
              className="h-14 md:h-16"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/160x160/0D4F0D/E9AB17?text=RODEIO+SHOW";
              }}
            />
          </div>
          
          {/* Imperio Beer Logo */}
          <div className="hidden md:flex items-center">
            <div className="text-sm text-rodeo-gold font-medium">Cerveja Oficial:</div>
            <img 
              src={imperioLogo} 
              alt="Cervejaria Império" 
              className="h-10 ml-2"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/100x40/071507/E9AB17?text=IMPERIO";
              }}
            />
          </div>

          {/* Countdown */}
          <div className="hidden md:flex items-center justify-center bg-rodeo-dark/80 px-5 py-2 rounded-full border-2 border-rodeo-gold">
            <span className="text-rodeo-gold font-bold animate-pulse-gold">
              FALTAM {daysLeft} DIAS
            </span>
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
            
            {/* Mobile Countdown */}
            <div className="my-4 flex items-center justify-center bg-rodeo-dark/80 p-2 rounded-md border-2 border-rodeo-gold">
              <span className="text-rodeo-gold font-bold text-sm">
                FALTAM {daysLeft} DIAS
              </span>
            </div>
            
            {/* Mobile Imperio Beer Logo */}
            <div className="flex items-center justify-center py-3 border-t border-rodeo-gold/50">
              <div className="text-xs text-rodeo-gold font-medium">Cerveja Oficial:</div>
              <img 
                src={imperioLogo} 
                alt="Cervejaria Império" 
                className="h-8 ml-2"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/80x32/071507/E9AB17?text=IMPERIO";
                }}
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
  );
};

export default Header;
