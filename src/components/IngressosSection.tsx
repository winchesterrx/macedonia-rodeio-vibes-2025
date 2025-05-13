
import { Ticket, Users, Music, HandCoins } from "lucide-react";
import { Button } from "@/components/ui/button";
import imperioLogo from "../assets/imperio-logo.png";

const IngressosSection = () => {
  const tickets = [
    {
      title: "Camarotes",
      icon: <Users size={32} />,
      description: "Espaço exclusivo com visão privilegiada e serviço personalizado.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre os Camarotes do Macedônia Rodeio Show 2025.",
    },
    {
      title: "Passaporte Boate",
      icon: <Music size={32} />,
      description: "Acesso a todos os dias de festa com preço promocional.",
      whatsappMessage: "Olá! Tenho interesse no Passaporte Boate. Pode me enviar informações?",
    },
    {
      title: "Banca do Ingresso",
      icon: <Ticket size={32} />,
      description: "Adquira na plataforma oficial com facilidade e segurança.",
      whatsappMessage: "Olá! Vi sobre o Passaporte pela Banca do Ingresso. Pode me explicar como funciona?",
    },
    {
      title: "Quero Patrocinar",
      icon: <HandCoins size={32} />,
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
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
           }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-rodeo-gold">INGRESSOS</span> E CAMAROTES
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Garanta seu lugar no maior rodeio da região. Entrada gratuita para a arena e opções exclusivas para a boate.
          </p>
          
          <div className="mt-4 flex items-center justify-center">
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tickets.map((ticket, index) => (
            <div 
              key={index} 
              className="bg-rodeo-darker p-6 rounded-lg border border-rodeo-gold/30 hover:border-rodeo-gold/80 transition-all group"
            >
              <div className="text-rodeo-gold mb-4 group-hover:scale-110 transition-transform">
                {ticket.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{ticket.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">
                {ticket.description}
              </p>
              <Button 
                onClick={() => openWhatsapp(ticket.whatsappMessage)}
                className="w-full bg-rodeo-green hover:bg-rodeo-green/80 text-white"
              >
                QUERO SABER MAIS
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block border border-dashed border-rodeo-gold/50 p-4 rounded-md bg-rodeo-dark/50 max-w-2xl">
            <p className="text-rodeo-gold font-semibold mb-2">💥 ENTRADA GRATUITA PARA A ARENA 💥</p>
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
