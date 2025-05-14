import { MoveRight, Music, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import imperioLogo from "../assets/imperio-logo.png";

interface DJProps {
  name: string;
  date: string;
  image: string; // Adicionamos o campo da imagem aqui
}

const RanchoBaladaSection = () => {
  const djs: DJProps[] = [
    {
      name: "Mença",
      date: "05/06",
      image: "https://exemplo.com/imagens/menca.jpg", // <-- Altere aqui
    },
    {
      name: "Maycon & Renato",
      date: "06/06",
      image: "data:image/jpeg;base64,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", // <-- Altere aqui
    },
    {
      name: "Bruno & Ed Carlos",
      date: "07/06",
      image: "data:image/jpeg;base64,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", // <-- Altere aqui
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
                    <div className="relative h-16 w-16 mr-4">
                      <img
                        src={dj.image}
                        alt={`Imagem de ${dj.name}`}
                        className="h-full w-full object-cover rounded-full border border-rodeo-gold/30"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-rodeo-gold">
                        {dj.date}
                      </span>
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
