
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import imperioLogo from "../assets/imperio-logo.png";

const Hero = () => {
  const scrollToIngressos = () => {
    const element = document.getElementById("ingressos");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center text-white"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rodeo-darker/70 via-rodeo-darker/80 to-rodeo-darker"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-rodeo-gold text-xl md:text-2xl font-semibold uppercase tracking-wider">
              05 a 07 de Junho
            </span>
            <div className="h-0.5 bg-rodeo-gold mt-1"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-gold">
            <span className="text-white">MACEDÔNIA</span>
            <br />
            <span className="text-rodeo-gold">RODEIO SHOW</span>
            <br />
            <span className="text-2xl md:text-4xl font-normal">2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl mx-auto">
            O rodeio que mais cresce no Brasil. Emoção, festa e tradição em um único lugar.
          </p>
          
          <div className="bg-rodeo-dark/70 p-3 mb-8 inline-block rounded-lg border border-rodeo-gold/30">
            <div className="flex items-center justify-center">
              <span className="text-sm text-rodeo-gold mr-2">Cerveja Oficial:</span>
              <img 
                src={imperioLogo} 
                alt="Cervejaria Império" 
                className="h-8"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/80x30/121212/D4AF37?text=IMPERIO";
                }}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToIngressos}
              className="bg-rodeo-gold hover:bg-rodeo-darkGold text-black text-lg py-6 px-8"
            >
              GARANTIR INGRESSOS
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.open("https://wa.me/5517997799982", "_blank")}
              className="border-rodeo-gold text-rodeo-gold hover:bg-rodeo-gold hover:text-black text-lg py-6 px-8"
            >
              FALE CONOSCO
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce-subtle">
            <button 
              onClick={scrollToIngressos}
              className="text-rodeo-gold hover:text-white transition-colors focus:outline-none"
              aria-label="Rolar para baixo"
            >
              <ArrowDown size={36} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-rodeo-darker to-transparent"></div>
    </section>
  );
};

export default Hero;
