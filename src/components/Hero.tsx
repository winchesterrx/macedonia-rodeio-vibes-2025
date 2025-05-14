import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import rodeioLogo from "/lovable-uploads/03276840-4600-4c77-9175-778a068c5bab.png";
import CountdownTimer from "./CountdownTimer";
import cervejaLogo from "../assets/cerveja-oficial.png";

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
        backgroundImage: "linear-gradient(rgba(7, 21, 7, 0.85), rgba(7, 21, 7, 0.9)), url('https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071')",
        backgroundColor: "#071507"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-rodeo-dark/90 via-rodeo-dark/95 to-rodeo-darker"></div>
      
      <div className="container mx-auto px-4 z-10 py-10 md:pt-14 mt-8 lg:mt-20">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Logo principal do evento e bloco da cerveja totalmente alinhados */}
          <div className="mb-4 md:mb-6 flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full gap-4">
              <img 
                src={rodeioLogo} 
                alt="Macedônia Rodeio Show" 
                className="mx-auto max-w-[260px] md:max-w-[320px] lg:max-w-[380px] object-contain"
                style={{ filter: "drop-shadow(0 0 10px rgba(233, 171, 23, 0.7))", background: "transparent" }}
              />
              <div className="flex flex-row items-center gap-2 bg-rodeo-dark/70 rounded-lg border border-rodeo-gold/70 gold-glow px-4 py-2 min-w-[210px] max-w-[330px] mx-auto h-[48px]">
                <span className="text-sm text-rodeo-gold font-semibold whitespace-nowrap">Cerveja Oficial:</span>
                <img 
                  src={cervejaLogo}
                  alt="Cervejaria Oficial"
                  className="h-8 md:h-9 object-contain ml-2"
                  style={{maxWidth: "80px", marginTop: "0px"}}
                />
              </div>
            </div>
          </div>

          {/* CONTADOR destacado abaixo da logo+cerveja */}
          <div className="w-full flex justify-center mt-4 mb-6">
            <CountdownTimer />
          </div>
          
          {/* Data e separador */}
          <div className="mb-8 inline-block">
            <span className="text-rodeo-gold text-xl md:text-2xl font-bold uppercase tracking-wider">
              05 a 07 de Junho
            </span>
            <div className="h-1 bg-rodeo-gold mt-1"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-gold">
            <span className="text-white">MACEDÔNIA</span>
            <br />
            <span className="text-rodeo-gold">RODEIO SHOW</span>
            <br />
            <span className="text-2xl md:text-3xl font-normal mt-2">2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-shadow max-w-2xl mx-auto">
            O rodeio que mais cresce no Brasil. Emoção, festa e tradição em um único lugar.
          </p>

          {/* REMOVER SEGUNDO BLOCO DA CERVEJA, JÁ QUE ESTÁ JUNTO DA LOGO */}
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-2">
            <Button 
              onClick={scrollToIngressos}
              className="bg-rodeo-gold hover:bg-rodeo-darkGold text-rodeo-dark text-lg py-7 px-10 font-bold border-2 border-rodeo-gold/80"
            >
              GARANTIR INGRESSOS
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.open("https://wa.me/5517997799982", "_blank")}
              className="border-2 border-rodeo-gold text-rodeo-gold hover:bg-rodeo-gold hover:text-rodeo-dark text-lg py-7 px-10 font-bold"
            >
              FALE CONOSCO
            </Button>
          </div>
          
          <div className="mt-20 animate-bounce-subtle">
            <button 
              onClick={scrollToIngressos}
              className="text-rodeo-gold hover:text-white transition-colors focus:outline-none"
              aria-label="Rolar para baixo"
            >
              <ArrowDown size={40} className="stroke-2" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-rodeo-darker to-transparent"></div>
    </section>
  );
};

export default Hero;
