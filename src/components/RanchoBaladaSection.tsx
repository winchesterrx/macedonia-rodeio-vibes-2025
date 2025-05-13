
import { MoveRight, Music, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import imperioLogo from "../assets/imperio-logo.png";

interface DJProps {
  name: string;
  date: string;
}

const RanchoBaladaSection = () => {
  const djs: DJProps[] = [
    {
      name: "Mença",
      date: "05/06",
    },
    {
      name: "Maycon & Renato",
      date: "06/06",
    },
    {
      name: "Bruno & Ed Carlos",
      date: "07/06",
    },
  ];

  const openWhatsapp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Rancho Balada Fest.");
    window.open(`whatsapp://send?phone=5517997799982&text=${message}`, '_blank');
  };

  return (
    <section 
      id="rancho-balada" 
      className="py-20 relative bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1556035511-3168381ea4d4?q=80&w=2074')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rodeo-darker via-rodeo-darker/90 to-rodeo-darker/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-rodeo-gold">RANCHO BALADA</span>
                <br />
                <span className="text-white">FEST</span>
              </h2>
              <div className="h-1 w-24 bg-rodeo-gold mt-4"></div>
              <p className="text-xl text-rodeo-gold mt-2">A balada oficial do rodeio</p>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg">
              Após os shows principais, a festa continua no Rancho Balada! 
              Um ambiente exclusivo com o melhor da música eletrônica e 
              sertaneja para você dançar até o amanhecer.
            </p>
            
            <div className="bg-rodeo-dark/60 p-6 rounded-lg border border-rodeo-gold/30 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Sparkles size={20} className="text-rodeo-gold mr-2" /> 
                Diferenciais
              </h3>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <MoveRight size={16} className="text-rodeo-gold mr-2" />
                  Ambientes diferenciados para todos os gostos
                </li>
                <li className="flex items-center">
                  <MoveRight size={16} className="text-rodeo-gold mr-2" />
                  Iluminação especial e cenografia exclusiva
                </li>
                <li className="flex items-center">
                  <MoveRight size={16} className="text-rodeo-gold mr-2" />
                  Área VIP com serviço personalizado
                </li>
                <li className="flex items-center">
                  <MoveRight size={16} className="text-rodeo-gold mr-2" />
                  Cervejaria Império com drinks especiais
                </li>
              </ul>
            </div>
            
            <div className="mb-8 flex items-center">
              <span className="text-sm text-rodeo-gold mr-2">Cerveja Oficial:</span>
              <img 
                src={imperioLogo} 
                alt="Cervejaria Império" 
                className="h-7" 
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/70x26/121212/D4AF37?text=IMPERIO";
                }}
              />
            </div>
            
            <Button 
              onClick={openWhatsapp}
              className="bg-rodeo-gold hover:bg-rodeo-darkGold text-black text-lg py-6 px-8"
            >
              QUERO CURTIR A BALADA!
            </Button>
          </div>
          
          {/* Right Content - DJs */}
          <div className="lg:w-1/2">
            <div className="bg-rodeo-dark/40 p-6 rounded-lg backdrop-blur-sm border border-rodeo-gold/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Music size={24} className="text-rodeo-gold mr-3" />
                Line-up Confirmado
              </h3>
              
              <div className="space-y-6">
                {djs.map((dj, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-5 bg-black/30 rounded-lg hover:bg-black/50 transition-colors"
                  >
                    <div className="h-16 w-16 bg-rodeo-gold/20 rounded-full flex items-center justify-center mr-4 text-rodeo-gold border border-rodeo-gold/30">
                      {dj.date}
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {dj.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {index === 0 ? "DJ Set Eletrônica" : 
                         index === 1 ? "House e Tech House" : 
                         "Set Mix Sertanejo"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-rodeo-gold text-lg font-semibold">
                  Novas atrações em breve!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RanchoBaladaSection;
