import { Instagram, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import imperioLogo from "../assets/imperio-logo.png";
const ContatoSection = () => {
  return <section id="contato" className="py-20 bg-rodeo-dark relative">
      {/* Rope border top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gold-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">LOCALIZAÇÃO E</span> <span className="text-rodeo-gold">CONTATO</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Saiba como chegar ao evento e entre em contato com a organização
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden h-[400px] border-2 border-rodeo-gold/40 shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14924.337516650035!2d-50.203761931622266!3d-20.147407001324993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9498780586ab6a95%3A0xd8ff5790b56e3ee!2sMaced%C3%B4nia%2C%20SP%2C%2015620-000!5e0!3m2!1spt-BR!2sbr!4v1715622841051!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
          {/* Contact Info */}
          <div className="bg-rodeo-darker rounded-lg p-8 border-2 border-rodeo-gold/40 gold-glow">
            <h3 className="text-2xl font-bold mb-6 text-rodeo-gold">Fale conosco</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-rodeo-gold mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-gray-300">
                    Parque de Exposições<br />
                    Macedônia - SP, 15620-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-rodeo-gold mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Contato</h4>
                  <p className="text-gray-300">
                    +55 17 99779-9982
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-rodeo-gold mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p className="text-gray-300">
                    contato@macedoniarodeioshow.com.br
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="text-rodeo-gold mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Redes Sociais</h4>
                  <a href="https://instagram.com/macedoniarodeioshow2025" target="_blank" rel="noopener noreferrer" className="text-rodeo-gold hover:underline">
                    @macedoniarodeioshow2025
                  </a>
                </div>
              </div>
              
              <div className="pt-6">
                <Button onClick={() => window.open("https://wa.me/5517997799982", "_blank")} className="w-full bg-rodeo-gold hover:bg-rodeo-darkGold text-rodeo-dark font-bold border-2 border-rodeo-gold/70">
                  ENTRAR EM CONTATO VIA WHATSAPP
                </Button>
                
                <div className="mt-6 text-center">
                  <div className="inline-block">
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-rodeo-gold mr-2 font-medium">Cerveja Oficial:</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContatoSection;