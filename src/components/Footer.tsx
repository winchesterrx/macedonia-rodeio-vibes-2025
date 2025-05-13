
import { Facebook, Instagram, Share2, Twitter } from "lucide-react";
import imperioLogo from "../assets/imperio-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rodeo-gold">Sobre o Evento</h3>
            <p className="text-gray-400 mb-6">
              O rodeio que mais cresce no Brasil. 
              Macedônia 2025 – Aqui a tradição e a emoção se encontram!
            </p>
            <p className="text-gray-400">
              Dias 05, 06 e 07 de Junho de 2025
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rodeo-gold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-rodeo-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#ingressos" className="text-gray-400 hover:text-rodeo-gold transition-colors">Ingressos</a>
              </li>
              <li>
                <a href="#programacao" className="text-gray-400 hover:text-rodeo-gold transition-colors">Programação</a>
              </li>
              <li>
                <a href="#rancho-balada" className="text-gray-400 hover:text-rodeo-gold transition-colors">Rancho Balada</a>
              </li>
              <li>
                <a href="#patrocinadores" className="text-gray-400 hover:text-rodeo-gold transition-colors">Patrocinadores</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-rodeo-gold transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rodeo-gold">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Parque de Exposições, Macedônia - SP</li>
              <li>+55 17 99779-9982</li>
              <li>contato@macedoniarodeioshow.com.br</li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://instagram.com/macedoniarodeioshow2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rodeo-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/macedoniarodeioshow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rodeo-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/rodeioshow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rodeo-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Macedônia Rodeio Show 2025',
                      text: 'Vem pro maior rodeio da região! Dias 05, 06 e 07 de Junho de 2025.',
                      url: window.location.href,
                    })
                  }
                }}
                className="text-gray-400 hover:text-rodeo-gold transition-colors cursor-pointer"
                aria-label="Compartilhar"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
          
          {/* Imperio Logo */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rodeo-gold">Patrocínio Master</h3>
            <div className="bg-black/40 p-6 rounded-lg border border-rodeo-gold/40">
              <img 
                src={imperioLogo} 
                alt="Cervejaria Império" 
                className="max-h-28 mx-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/180x90/000000/D4AF37?text=IMPERIO";
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Macedônia Rodeio Show. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center">
              <span className="text-gray-500 text-sm mr-2">
                Realização:
              </span>
              <span className="text-rodeo-gold font-semibold">
                LDO Eventos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
