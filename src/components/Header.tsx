import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import rodeioLogo from "/lovable-uploads/03276840-4600-4c77-9175-778a068c5bab.png";
import cervejaLogo from "../assets/logo-sfundo.png";

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
            {/* Logo + cerveja block alinhados */}
            <div className="flex items-center space-x-4">
              <img 
                src={rodeioLogo} 
                alt="Macedônia Rodeio Show" 
                className="h-14 md:h-16 object-contain"
                style={{ background: "transparent" }}
              />
              {/* Apenas a imagem da cerveja com texto embutido */}
              <div className="hidden md:flex items-center bg-rodeo-dark/70 rounded-lg border border-rodeo-gold/70 gold-glow px-4 py-2 ml-4 h-[48px]">
                <img
                  src={cervejaLogo}
                  alt="Cerveja Oficial"
                  className="h-8 md:h-9 object-contain"
                  style={{ maxHeight: "100%", background: "transparent" }}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex space-x-6">
                <li><button onClick={() => handleNavClick("home")} className="text-white hover:text-rodeo-gold transition-colors">Home</button></li>
                <li><button onClick={() => handleNavClick("ingressos")} className="text-white hover:text-rodeo-gold transition-colors">Ingressos</button></li>
                <li><button onClick={() => handleNavClick("programacao")} className="text-white hover:text-rodeo-gold transition-colors">Programação</button></li>
                <li><button onClick={() => handleNavClick("rancho-balada")} className="text-white hover:text-rodeo-gold transition-colors">Rancho Balada</button></li>
                <li><button onClick={() => handleNavClick("patrocinadores")} className="text-white hover:text-rodeo-gold transition-colors">Patrocinadores</button></li>
                <li><button onClick={() => handleNavClick("contato")} className="text-white hover:text-rodeo-gold transition-colors">Contato</button></li>
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
                <li><button onClick={() => handleNavClick("home")} className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors">Home</button></li>
                <li><button onClick={() => handleNavClick("ingressos")} className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors">Ingressos</button></li>
                <li><button onClick={() => handleNavClick("programacao")} className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors">Programação</button></li>
                <li><button onClick={() => handleNavClick("rancho-balada")} className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors">Rancho Balada</button></li>
                <li><button onClick={() => handleNavClick("patrocinadores")} className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors">Patrocinadores</button></li>
                <li><button onClick={() => handleNavClick("contato")} className="w-full text-left py-2 px-4 hover:bg-rodeo-gold/20 rounded-md transition-colors">Contato</button></li>
              </ul>

              {/* Mobile: somente a imagem da cerveja */}
              <div className="flex items-center justify-center py-3 border-t border-rodeo-gold/50">
                <img 
                  src={cervejaLogo}
                  alt="Cerveja Oficial"
                  className="h-8 object-contain"
                  style={{ background: "transparent" }}
                />
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
