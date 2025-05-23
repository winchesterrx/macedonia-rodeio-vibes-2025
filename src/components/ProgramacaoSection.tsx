import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoCerveja from "../assets/logo-sfundo.png";
import logoApoio from "../assets/apoio-sfundo.png";
import rodeioLogo from "../assets/logo-rodeio.png";
import brunoImage from "../assets/bruno-barreto.jpeg";
import daniloImage from "../assets/danilo-davi.jpeg";
import guilhermeImage from "../assets/guilherme-benuto.jpeg";

interface ShowProps {
  name: string;
  image: string;
  date: string;
  day: string;
}

const ProgramacaoSection = () => {
  const shows: ShowProps[] = [
    {
      name: "Bruno & Barretto",
      image: brunoImage,
      date: "05/06/2025",
      day: "Quinta-feira"
    },
    {
      name: "Danilo & Davi",
      image: daniloImage,
      date: "06/06/2025",
      day: "Sexta-feira"
    },
    {
      name: "Guilherme & Benuto",
      image: guilhermeImage,
      date: "07/06/2025",
      day: "Sábado"
    }
  ];

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
    <section id="programacao" className="py-20 bg-rodeo-darker relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gold-gradient opacity-80"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">SHOWS</span>{" "}
            <span className="text-rodeo-gold">PRINCIPAIS</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Confira as grandes atrações que vão agitar as noites do Macedônia Rodeio Show 2025
          </p>

          <div className="flex justify-center mt-6">
            <img
              src={logoCerveja}
              alt="Cerveja Oficial: Império"
              className="h-[48px]"
              style={{ backgroundColor: "transparent", mixBlendMode: "normal" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border-2 border-rodeo-gold/30"
            >
              <div className="h-96 overflow-hidden">
                <img
                  src={show.image}
                  alt={show.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <img
                  src={rodeioLogo}
                  alt="Macedônia Rodeio Show"
                  className="w-3/5 opacity-60"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/200x200/071507/E9AB17?text=RODEIO";
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-rodeo-dark via-rodeo-dark/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center mb-3">
                  <Calendar size={18} className="text-rodeo-gold mr-2" />
                  <span className="text-sm text-rodeo-gold font-medium">
                    {show.date} • {show.day}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{show.name}</h3>

                <Button
                  onClick={scrollToIngressos}
                  className="bg-rodeo-gold hover:bg-rodeo-darkGold text-rodeo-dark border-2 border-rodeo-gold/70 font-bold"
                >
                  QUERO IR!
                </Button>
              </div>

              <div className="absolute top-4 right-4 bg-black/80 py-1 px-3 rounded-full flex items-center border border-rodeo-gold/30">
                <img
                  src={logoApoio}
                  alt="Apoio: Império"
                  className="h-5 object-contain"
                  style={{ background: "transparent", maxWidth: "80px" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 italic">Mais atrações serão anunciadas em breve...</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramacaoSection;
