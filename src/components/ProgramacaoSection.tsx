import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
// import imperioLogo from "../assets/imperio-logo.png";
import rodeioLogo from "../assets/logo-rodeio.png";
interface ShowProps {
  name: string;
  image: string;
  date: string;
  day: string;
}
const ProgramacaoSection = () => {
  const shows: ShowProps[] = [{
    name: "Bruno & Barretto",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070",
    date: "05/06/2025",
    day: "Quinta-feira"
  }, {
    name: "Danilo & Davi",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070",
    date: "06/06/2025",
    day: "Sexta-feira"
  }, {
    name: "Guilherme & Benuto",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070",
    date: "07/06/2025",
    day: "Sábado"
  }];
  const scrollToIngressos = () => {
    const element = document.getElementById("ingressos");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };
  return <section id="programacao" className="py-20 bg-rodeo-darker relative">
      {/* Rope border top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gold-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">SHOWS</span> <span className="text-rodeo-gold">PRINCIPAIS</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Confira as grandes atrações que vão agitar as noites do Macedônia Rodeio Show 2025
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6">
  <span className="text-sm text-rodeo-gold font-medium">Cerveja Oficial:</span>
  <img
    src="/src/assets/imperio-logo.png"
    alt="Cerveja Império"
    className="h-6 object-contain"
  />
</div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show, index) => <div key={index} className="group relative overflow-hidden rounded-xl border-2 border-rodeo-gold/30">
              {/* Show image */}
              <div className="h-96 overflow-hidden">
                <img src={show.image} alt={show.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              
              {/* Event logo overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <img src={rodeioLogo} alt="Macedônia Rodeio Show" className="w-3/5 opacity-60" onError={e => {
              e.currentTarget.src = "https://via.placeholder.com/200x200/071507/E9AB17?text=RODEIO";
            }} />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-rodeo-dark via-rodeo-dark/80 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center mb-3">
                  <Calendar size={18} className="text-rodeo-gold mr-2" />
                  <span className="text-sm text-rodeo-gold font-medium">
                    {show.date} • {show.day}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{show.name}</h3>
                
                <Button onClick={scrollToIngressos} className="bg-rodeo-gold hover:bg-rodeo-darkGold text-rodeo-dark border-2 border-rodeo-gold/70 font-bold">
                  QUERO IR!
                </Button>
              </div>
              
              {/* Imperio sponsorship tag NOVO */}
              <div className="absolute top-4 right-4 bg-black/80 py-1 px-3 rounded-full flex items-center border border-rodeo-gold/30 gap-2">
                <span className="text-xs text-rodeo-gold font-medium">Apoio:</span>
                <img alt="Cervejaria Império" className="h-5 object-contain" style={{
              maxWidth: "38px"
            }} src="/lovable-uploads/ee8ac9df-1c43-40fb-b3bb-f4a5965b9f31.png" />
              </div>
            </div>)}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 italic">Mais atrações serão anunciadas em breve...</p>
        </div>
      </div>
    </section>;
};
export default ProgramacaoSection;
