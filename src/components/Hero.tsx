
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
// Logo transparente nova!
import rodeioLogo from "/lovable-uploads/d9f418e4-1e7d-479b-9978-eea4b88ced49.png";
import cervejaLogo from "../assets/cerveja-oficial.png";

const Hero = () => {
  const scrollToIngressos = () => {
    const element = document.getElementById("ingressos");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(7, 21, 7, 0.88), rgba(7, 21, 7, 0.92)), url('https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071')",
        backgroundColor: "#071507"
      }}
    >
      {/* Visual mais moderno no overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rodeo-dark/90 via-rodeo-dark/95 to-rodeo-darker pointer-events-none"></div>
      <div className="container mx-auto px-4 z-10 py-10 md:pt-14 mt-6 lg:mt-16">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center animate-fade-in">
          {/* Logo evento alinhada com bloco cerveja */}
          <div className="mb-5 w-full flex flex-col items-center">
            {/* Glassmorphism na logo */}
            <div className="bg-rodeo-dark/70 rounded-xl p-4 md:p-7 backdrop-blur-lg gold-glow flex flex-col items-center shadow-xl">
              <img
                src={rodeioLogo}
                alt="Macedônia Rodeio Show"
                className="mx-auto max-w-[215px] sm:max-w-[290px] md:max-w-[320px] lg:max-w-[380px] object-contain drop-shadow-xl"
                style={{ background: "transparent" }}
              />
              <div className="flex flex-row items-center justify-center mt-3 gap-3">
                <div className="flex flex-row items-center bg-rodeo-darker/60 rounded-lg border border-rodeo-gold/60 px-3 py-1 glass min-w-[128px] shadow gold-glow">
                  <span className="text-xs md:text-sm text-rodeo-gold font-semibold whitespace-nowrap">Cerveja Oficial</span>
                  <span className="mx-2 px-2 py-[2px] bg-rodeo-gold/80 text-rodeo-dark rounded font-bold text-[10px]">parceria</span>
                  <img
                    src={cervejaLogo}
                    alt="Cerveja Oficial"
                    className="h-8 object-contain"
                    style={{ maxWidth: "49px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Contador centralizado logo abaixo */}
          <div className="w-full flex justify-center my-6 animate-fade-in">
            <CountdownTimer />
          </div>
          {/* Data & separador */}
          <div className="mb-8 inline-block">
            <span className="text-rodeo-gold text-xl md:text-2xl font-bold uppercase tracking-wider">
              05 a 07 de Junho
            </span>
            <div className="h-1 bg-rodeo-gold mt-1"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-gold drop-shadow-xl">
            <span className="text-white">MACEDÔNIA</span>
            <br />
            <span className="text-rodeo-gold">RODEIO SHOW</span>
            <br />
            <span className="text-2xl md:text-3xl font-normal mt-2">2025</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-shadow max-w-2xl mx-auto">
            O rodeio que mais cresce no Brasil. Emoção, festa e tradição em um único lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-2">
            <Button
              onClick={scrollToIngressos}
              className="bg-rodeo-gold hover:bg-rodeo-darkGold text-rodeo-dark text-lg py-7 px-10 font-bold border-2 border-rodeo-gold/80 shadow-xl"
            >
              GARANTIR INGRESSOS
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://wa.me/5517997799982", "_blank")}
              className="border-2 border-rodeo-gold text-rodeo-gold hover:bg-rodeo-gold hover:text-rodeo-dark text-lg py-7 px-10 font-bold shadow"
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
