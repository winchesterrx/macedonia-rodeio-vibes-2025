
import { Ticket, Users, Music, HandCoins } from "lucide-react";
import { Button } from "@/components/ui/button";
import imperioLogo from "../assets/imperio-logo.png";

const IngressosSection = () => {
  const tickets = [
    {
      title: "Camarotes",
      icon: <Users size={32} className="text-rodeo-gold" />,
      description: "Espaço exclusivo com visão privilegiada e serviço personalizado.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre os Camarotes do Macedônia Rodeio Show 2025.",
    },
    {
      title: "Passaporte Boate",
      icon: <Music size={32} className="text-rodeo-gold" />,
      description: "Acesso a todos os dias de festa com preço promocional.",
      whatsappMessage: "Olá! Tenho interesse no Passaporte Boate. Pode me enviar informações?",
    },
    {
      title: "Banca do Ingresso",
      icon: <Ticket size={32} className="text-rodeo-gold" />,
      description: "Adquira na plataforma oficial com facilidade e segurança.",
      whatsappMessage: "Olá! Vi sobre o Passaporte pela Banca do Ingresso. Pode me explicar como funciona?",
    },
    {
      title: "Quero Patrocinar",
      icon: <HandCoins size={32} className="text-rodeo-gold" />,
      description: "Oportunidades de patrocínio e parceria para sua marca.",
      whatsappMessage: "Olá! Tenho interesse em patrocinar o Macedônia Rodeio Show 2025. Pode me mandar as opções?",
    }
  ];

  const openWhatsapp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`whatsapp://send?phone=5517997799982&text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="ingressos" className="py-20 bg-rodeo-dark relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-rope-pattern opacity-5 pointer-events-none"></div>
      
      {/* Rope border top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gold-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-rodeo-gold">INGRESSOS</span> E CAMAROTES
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Garanta seu lugar no maior rodeio da região. Entrada gratuita para a arena e opções exclusivas para a boate.
          </p>
          
          <div className="mt-6 flex items-center justify-center">
            <span className="text-sm text-rodeo-gold mr-2 font-medium">Cerveja Oficial:</span>
            <img 
              src={imperioLogo} 
              alt="Cervejaria Império" 
              className="h-10"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/100x40/071507/E9AB17?text=IMPERIO";
              }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tickets.map((ticket, index) => (
            <div 
              key={index} 
              className="bg-rodeo-darker p-6 rounded-lg border-2 border-rodeo-gold/40 hover:border-rodeo-gold transition-all duration-300 group"
            >
              <div className="text-center mb-4 group-hover:scale-110 transition-transform">
                {ticket.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-white">{ticket.title}</h3>
              <p className="text-gray-400 mb-6 text-sm text-center">
                {ticket.description}
              </p>
              <Button 
                onClick={() => openWhatsapp(ticket.whatsappMessage)}
                className="w-full bg-rodeo-green hover:bg-rodeo-green/80 text-white border border-rodeo-gold/30"
              >
                QUERO SABER MAIS
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-dashed border-rodeo-gold/50 p-6 rounded-lg bg-rodeo-dark/70 max-w-2xl">
            <p className="text-rodeo-gold font-bold mb-2 text-xl">💥 ENTRADA GRATUITA PARA A ARENA 💥</p>
            <p className="text-sm text-gray-300">
              O acesso à arena do rodeio é totalmente gratuito. Os ingressos acima são para áreas exclusivas e boate após os shows principais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngressosSection;
